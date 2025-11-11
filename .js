# 🚀 Deploy to Vercel - Complete Guide

## 📁 Project Structure

Your project should have this structure:

```
divine-goddess-collective/
├── app/
│   ├── page.js           # Main page component
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── favicon.ico       # (optional) Your favicon
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # Documentation
```

## 🎯 Quick Deployment (3 Methods)

### Method 1: Deploy with Vercel Dashboard (Easiest)

1. **Create GitHub Repository**
   - Go to GitHub.com and create a new repository
   - Name it: `divine-goddess-collective`
   - Make it public or private

2. **Push Your Code to GitHub**
   ```bash
   # Initialize git in your project folder
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Divine Goddess Collective"
   
   # Add remote (replace with your repo URL)
   git remote add origin https://github.com/YOUR_USERNAME/divine-goddess-collective.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! 🎉

---

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From your project directory
   vercel
   
   # Follow prompts:
   # - Set up and deploy? Yes
   # - Which scope? Select your account
   # - Link to existing project? No
   # - What's your project's name? divine-goddess-collective
   # - In which directory is your code located? ./
   # - Override settings? No
   ```

4. **For Production Deployment**
   ```bash
   vercel --prod
   ```

---

### Method 3: Direct Git Deployment

1. **Connect GitHub to Vercel**
   - Go to vercel.com/new
   - Click "Import Git Repository"
   - Authorize Vercel to access your GitHub
   - Select your repository

2. **Configure Build Settings** (Usually auto-detected)
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - Add any API keys or secrets
   - Example: `STRIPE_SECRET_KEY`, `EMAIL_API_KEY`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-3 minutes
   - Your site is live! 🚀

---

## ⚙️ Local Development

Before deploying, test locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Go to: `http://localhost:3000`
   - Test all features

4. **Build for Production (Test)**
   ```bash
   npm run build
   npm start
   ```

---

## 🔧 Configuration Options

### Environment Variables

Create `.env.local` for local development:

```bash
# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# Email (SendGrid, Mailchimp, etc.)
SENDGRID_API_KEY=SG.xxxxx
EMAIL_FROM=hello@divinegoddess.com

# Printify (if using API)
PRINTIFY_API_KEY=xxxxx
PRINTIFY_SHOP_ID=xxxxx
```

**Add to Vercel:**
1. Go to Project Settings
2. Click "Environment Variables"
3. Add each variable
4. Redeploy

---

## 🌐 Custom Domain

### Option 1: Use Vercel Domain (Free)
Your app will be at: `divine-goddess-collective.vercel.app`

### Option 2: Add Custom Domain

1. **Buy a Domain**
   - Namecheap, GoDaddy, Google Domains
   - Example: `divinegoddess.com`

2. **Add to Vercel**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain: `divinegoddess.com`

3. **Update DNS Settings**
   - Go to your domain registrar
   - Add these records:

   **For Root Domain (divinegoddess.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW (www.divinegoddess.com):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS Propagation** (5 minutes - 24 hours)

5. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Your site will have HTTPS 🔒

---

## 📊 Performance Optimization

Vercel automatically handles:
- ✅ Global CDN distribution
- ✅ Image optimization
- ✅ Automatic compression
- ✅ Edge caching
- ✅ Serverless functions

### Additional Optimizations:

**1. Image Optimization**
```javascript
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Divine Goddess"
  width={300}
  height={200}
  priority
/>
```

**2. Font Optimization**
```javascript
// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🔐 Security Best Practices

1. **Never commit secrets**
   - Create `.gitignore`
   - Add: `.env.local`, `.env`, `node_modules`

2. **Use Environment Variables**
   - Store API keys in Vercel dashboard
   - Never hardcode in code

3. **Enable CORS** (if using API routes)
   ```javascript
   // app/api/checkout/route.js
   export async function POST(request) {
     const headers = {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'POST, OPTIONS',
     }
     // Your logic
   }
   ```

---

## 📈 Analytics & Monitoring

### Vercel Analytics (Built-in)

1. Enable in Project Settings
2. See:
   - Page views
   - User interactions
   - Performance metrics

### Google Analytics

```javascript
// app/layout.js
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.data
