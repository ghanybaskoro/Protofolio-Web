# Guide Deploy Portfolio ke Vercel

## Prerequisites (Yang Diperlukan)

### 1. Akun Vercel
- Daftar akun di [vercel.com](https://vercel.com)
- Login dengan GitHub, GitLab, atau Bitbucket

### 2. Git Repository
- Pastikan proyek sudah di-push ke GitHub/GitLab/Bitbucket
- Repository harus public atau Anda memiliki akses private

### 3. Node.js & npm
- Pastikan Node.js terinstall (versi 18+ direkomendasikan)
- npm atau yarn untuk package management

## Step-by-Step Deployment

### Step 1: Persiapan Repository

1. **Commit semua perubahan ke Git:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Pastikan file penting sudah ada:**
   - ✅ `package.json` (sudah ada)
   - ✅ `next.config.js` (sudah ada)
   - ✅ `.gitignore` (sudah diperbaiki)
   - ✅ `tsconfig.json` (sudah ada)

### Step 2: Deploy via Vercel Dashboard

#### Opsi A: Import dari Git Repository

1. **Login ke Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Sign Up" atau "Login"
   - Pilih "Continue with GitHub" (atau GitLab/Bitbucket)

2. **Import Project:**
   - Klik "New Project"
   - Pilih repository `ghany-portfolio`
   - Klik "Import"

3. **Konfigurasi Project:**
   - **Project Name:** `ghany-portfolio` (atau nama yang diinginkan)
   - **Framework Preset:** Next.js (otomatis terdeteksi)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (otomatis)
   - **Output Directory:** `.next` (otomatis)
   - **Install Command:** `npm install` (otomatis)

4. **Environment Variables (jika ada):**
   - Jika menggunakan environment variables, tambahkan di sini
   - Untuk portfolio sederhana, biasanya tidak diperlukan

5. **Deploy:**
   - Klik "Deploy"
   - Tunggu proses build selesai (2-5 menit)

#### Opsi B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? `Y`
   - Which scope? Pilih akun Anda
   - Link to existing project? `N`
   - Project name: `ghany-portfolio`
   - Directory: `./`
   - Override settings? `N`

### Step 3: Verifikasi Deployment

1. **Cek Build Logs:**
   - Di dashboard Vercel, lihat tab "Functions" dan "Build Logs"
   - Pastikan tidak ada error

2. **Test Website:**
   - Klik URL yang diberikan Vercel (contoh: `https://ghany-portfolio.vercel.app`)
   - Pastikan semua halaman berfungsi dengan baik

3. **Custom Domain (Opsional):**
   - Di dashboard Vercel, masuk ke "Settings" > "Domains"
   - Tambahkan domain custom jika ada

## Konfigurasi Tambahan

### 1. Environment Variables
Jika menggunakan environment variables, tambahkan di:
- Vercel Dashboard > Project Settings > Environment Variables

### 2. Build Settings
Konfigurasi build di `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi tambahan jika diperlukan
  output: 'standalone', // untuk optimasi
  images: {
    domains: ['example.com'], // jika menggunakan external images
  },
}

module.exports = nextConfig
```

### 3. Performance Optimization
- Pastikan menggunakan `next/image` untuk images
- Optimize CSS dengan Tailwind CSS (sudah ada)
- Gunakan `next/dynamic` untuk lazy loading

## Troubleshooting

### Error Umum:

1. **"Function Runtimes must have a valid version" Error:**
   - **Penyebab:** Konfigurasi `functions` di `vercel.json` tidak diperlukan untuk Next.js
   - **Solusi:** Hapus bagian `functions` dari `vercel.json` atau gunakan konfigurasi minimal
   - **File yang sudah diperbaiki:** `vercel.json` sudah dioptimasi

2. **Build Failed:**
   - Cek `package.json` dependencies
   - Pastikan semua import paths benar
   - Cek TypeScript errors

3. **404 on Refresh:**
   - Pastikan menggunakan Next.js routing dengan benar
   - Cek konfigurasi `next.config.js`

4. **Images Not Loading:**
   - Pastikan menggunakan `next/image`
   - Cek konfigurasi domains di `next.config.js`

### Debug Steps:
1. Test build lokal: `npm run build`
2. Test production: `npm run start`
3. Cek Vercel build logs
4. Cek browser console untuk errors

## Auto-Deployment

Setelah setup pertama, setiap push ke branch `main` akan otomatis trigger deployment baru.

### Branch Management:
- `main` branch → Production deployment
- Feature branches → Preview deployments

## Monitoring & Analytics

1. **Vercel Analytics:**
   - Aktifkan di dashboard untuk melihat performance
   - Gratis untuk personal projects

2. **Speed Insights:**
   - Monitor Core Web Vitals
   - Optimize berdasarkan data

## Cost & Limits

### Vercel Free Tier:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ 100 serverless function executions
- ✅ Custom domains
- ✅ Automatic HTTPS

### Upgrade jika diperlukan:
- Pro: $20/month untuk team features
- Enterprise: untuk large scale applications

## Next Steps Setelah Deploy

1. **SEO Optimization:**
   - Tambahkan meta tags di `layout.tsx`
   - Setup sitemap.xml
   - Submit ke Google Search Console

2. **Performance:**
   - Monitor Core Web Vitals
   - Optimize images dan assets
   - Implement caching strategies

3. **Analytics:**
   - Setup Google Analytics
   - Monitor user behavior
   - Track conversion metrics

---

## Quick Checklist

- [ ] Repository di-push ke Git
- [ ] Akun Vercel dibuat
- [ ] Project di-import ke Vercel
- [ ] Build berhasil tanpa error
- [ ] Website accessible via URL
- [ ] Semua halaman berfungsi
- [ ] Images dan assets loading
- [ ] Mobile responsive
- [ ] Performance optimal

**URL Deployment:** `https://ghany-portfolio.vercel.app` (akan diberikan setelah deploy)

Selamat! Portfolio Anda sudah live di internet! 🚀
