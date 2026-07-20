# Panduan Lengkap Deployment Next.js ke AWS EC2 Menggunakan Docker

Panduan ini berisi langkah-langkah komprehensif dari nol hingga aplikasi *Next.js* berhasil *online* di server AWS EC2 secara gratis (menggunakan *Free Tier*). Alur kerjanya adalah:
`Laptop (Build)` ➡️ `Docker Hub (Registri)` ➡️ `AWS EC2 (Server Produksi)`

---

## Tahap 1: Persiapan Aplikasi (Lokal)

### 1. Mematikan Optimasi Gambar (Jika Menggunakan Alpine Linux)
Jika Anda menggunakan *standalone build* di Next.js dengan OS Alpine Linux pada Docker, mematikan optimasi gambar bawaan sangat disarankan untuk menghindari *error library* `sharp`.
Buka `next.config.js` dan pastikan konfigurasi ini ada:
```javascript
images: {
  unoptimized: true, // Matikan optimasi gambar untuk Docker
  domains: [],
},
```

### 2. Membuat `.dockerignore`
Agar proses *build* cepat dan bersih, buat file `.dockerignore` di *root* proyek:
```dockerignore
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
.git
.env*.local
.vercel
```

### 3. Membuat `Dockerfile` (Multi-stage)
Buat file bernama `Dockerfile` tanpa ekstensi apa pun:
```dockerfile
# Tahap 1: Install Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Tahap 2: Build Aplikasi
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Tahap 3: Runner (Production)
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

---

## Tahap 2: Build & Upload ke Docker Hub

1. **Build Image Lokal:**
   ```bash
   docker build -t portofolio-app .
   ```
2. **Login ke Docker Hub:**
   Pastikan Anda sudah punya akun di [hub.docker.com](https://hub.docker.com/).
   ```bash
   docker login
   ```
3. **Ganti Nama (Tagging) Image:**
   Sesuaikan `USERNAME` dengan username Docker Hub Anda.
   ```bash
   docker tag portofolio-app USERNAME/portofolio-app
   ```
4. **Push (Upload) Image:**
   ```bash
   docker push USERNAME/portofolio-app
   ```

---

## Tahap 3: Pembuatan Server AWS EC2

1. Login ke [AWS Management Console](https://console.aws.amazon.com/).
2. Buka halaman **EC2** dan klik **Launch Instance**.
3. **Konfigurasi Server:**
   *   **Name:** `portofolio-server` (bebas).
   *   **OS:** **Ubuntu** (Pilih versi LTS terbaru yang berlabel *Free tier eligible*).
   *   **Instance Type:** **t2.micro** atau **t3.micro** (*Free tier eligible*).
4. **Key Pair (Kunci SSH):**
   *   Klik **Create new key pair**.
   *   Beri nama (misal: `portofolio-key`), pilih tipe **RSA** dan format **.pem**.
   *   Download file tersebut dan simpan di tempat yang aman (misalnya di folder proyek Anda).
5. **Network Settings (Keamanan):**
   Centang dua opsi berikut:
   *   ✅ **Allow SSH traffic from Anywhere** (Membuka Port 22 untuk remote terminal).
   *   ✅ **Allow HTTP traffic from the internet** (Membuka Port 80 agar web bisa diakses).
6. Klik **Launch Instance**. Tunggu hingga *Instance State* berubah menjadi `Running`.

---

## Tahap 4: Remote Server & Perbaikan Akses Key (Windows)

Jika Anda pengguna Windows, keamanan SSH sering kali menolak file `.pem` karena izin (*permissions*) bawaannya terlalu terbuka.

**Cara Memperbaiki Izin File `.pem` di Terminal (PowerShell):**
1. Buka terminal di folder tempat file `.pem` Anda berada.
2. Jalankan perintah ini untuk mencabut izin pengguna asing:
   ```powershell
   icacls.exe portofolio-key.pem /inheritance:r
   icacls.exe portofolio-key.pem /grant:r "$($env:USERNAME):(R)"
   icacls.exe portofolio-key.pem /remove "NT AUTHORITY\Authenticated Users"
   icacls.exe portofolio-key.pem /remove "BUILTIN\Users"
   ```

**Login SSH ke Server:**
Dapatkan *Public IPv4 Address* dari AWS Console, lalu jalankan:
```bash
ssh -i portofolio-key.pem ubuntu@IP_PUBLIK_AWS
```
Ketik `yes` jika ada konfirmasi *fingerprint*.

---

## Tahap 5: Instalasi Docker & Deployment Akhir

Setelah Anda berhasil masuk dan melihat prompt `ubuntu@ip-...`, server siap digunakan.

1. **Update Sistem & Install Docker:**
   ```bash
   sudo apt update
   sudo apt install docker.io -y
   ```

2. **Download Image dari Docker Hub:**
   ```bash
   sudo docker pull USERNAME/portofolio-app
   ```

3. **Jalankan Aplikasi:**
   Kita jalankan aplikasi di *background* (`-d`) dan sambungkan port internal 3000 ke port internet umum 80 (`-p 80:3000`).
   ```bash
   sudo docker run -d -p 80:3000 USERNAME/portofolio-app
   ```

Selesai! Buka browser Anda dan masukkan *Public IP Address* dari AWS EC2 tersebut. Portofolio Anda kini sudah *online* ke seluruh dunia.
