# ==========================================
# RUANGAN 1: MENGINSTALL DEPENDENCIES (deps)
# ==========================================
# Kita gunakan sistem operasi Linux Alpine (sangat ringan, ukurannya hanya ~5MB) 
# yang sudah terinstal Node.js versi 18.
FROM node:18-alpine AS deps

# Masuk ke folder bernama /app di dalam container
WORKDIR /app

# Salin file daftar belanjaan kita (package.json) dari laptop ke dalam container
COPY package.json package-lock.json* ./

# Suruh Docker menjalankan 'npm ci' (seperti npm install tapi lebih cepat/bersih)
RUN npm ci


# ==========================================
# RUANGAN 2: MEM-BUILD APLIKASI (builder)
# ==========================================
FROM node:18-alpine AS builder
WORKDIR /app

# Ambil hasil download-an dari Ruangan 1 tadi
COPY --from=deps /app/node_modules ./node_modules

# Salin seluruh sisa file source code (komponen, pages, dll) dari laptop ke container
COPY . .

# Set pengaturan Next.js ke mode produksi
ENV NODE_ENV production

# Jalankan perintah build Next.js
RUN npm run build


# ==========================================
# RUANGAN 3: SERVER PRODUKSI (runner)
# ==========================================
# Ruangan ini adalah hasil akhir yang akan dijalankan oleh Google Cloud.
# Ruangan ini bersih dari kode sumber, hanya berisi hasil jadinya saja.
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Salin folder publik (gambar, font) dari Ruangan 2
COPY --from=builder /app/public ./public

# Salin file pengaturan Next.js
COPY --from=builder /app/next.config.js ./

# Salin HASIL JADI (folder standalone) dari Ruangan 2.
# Ini adalah fitur Next.js yang membuat aplikasinya siap jalan tanpa node_modules raksasa.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Buka port 3000 agar server bisa diakses
EXPOSE 3000
ENV PORT 3000

# PERINTAH TERAKHIR: Saat container dinyalakan, jalankan file server.js
CMD ["node", "server.js"]
