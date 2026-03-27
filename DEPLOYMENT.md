# 🚀 Deployment Guide - True Feedback

This guide will help you deploy True Feedback to Vercel (recommended) or any Node.js hosting platform.

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup
Ensure you have all required environment variables:

- ✅ `MONGODB_URI` - MongoDB connection string
- ✅ `NEXTAUTH_SECRET` - NextAuth secret key
- ✅ `NEXTAUTH_URL` - Production URL
- ✅ `RESEND_API_KEY` - Resend email API key
- ✅ `GOOGLE_GENERATIVE_AI_API_KEY` - Google Gemini API key

### 2. Database Setup
- ✅ MongoDB Atlas cluster created and accessible
- ✅ Database user with read/write permissions
- ✅ IP whitelist configured (0.0.0.0/0 for serverless)
- ✅ Connection string tested

### 3. Third-Party Services
- ✅ Resend domain verified (or using default domain)
- ✅ Google Gemini API key active with quota

---

## 🎯 Vercel Deployment (Recommended)

### Step 1: Prepare Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
   - **Install Command:** `npm install`

### Step 3: Configure Environment Variables
In Vercel dashboard, add all environment variables from `.env.example`:

```env
MONGODB_URI=mongodb+srv://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://your-app.vercel.app
RESEND_API_KEY=...
GOOGLE_GENERATIVE_AI_API_KEY=...
```

### Step 4: Deploy
Click "Deploy" and wait for build to complete.

---

## 🔧 Alternative Deployment Options

### Option 1: Netlify
1. Connect GitHub repository
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Add environment variables
4. Deploy

### Option 2: Railway
1. Create new project from GitHub
2. Add environment variables
3. Railway auto-detects Next.js and deploys

### Option 3: DigitalOcean App Platform
1. Create new app from GitHub
2. Configure build settings
3. Add environment variables
4. Deploy

### Option 4: Self-Hosted (VPS/Dedicated Server)
```bash
# On your server
git clone <your-repo>
cd true-feedback
npm install
npm run build

# Create .env.local with production values
nano .env.local

# Start with PM2
npm install -g pm2
pm2 start npm --name "true-feedback" -- start
pm2 save
pm2 startup
```

---

## 🔐 Security Checklist

- ✅ All environment variables are set and secure
- ✅ NEXTAUTH_SECRET is strong (32+ characters)
- ✅ MongoDB connection uses authentication
- ✅ API keys are not exposed in client-side code
- ✅ CORS is properly configured
- ✅ Rate limiting is in place (built into the app)

---

## 🧪 Post-Deployment Testing

### Test Authentication
1. ✅ Sign up with email/username
2. ✅ Verify email OTP
3. ✅ Sign in with credentials
4. ✅ Sign out

### Test Core Features
1. ✅ Toggle message acceptance
2. ✅ Share profile link
3. ✅ Send anonymous message
4. ✅ Receive message in dashboard
5. ✅ Delete message
6. ✅ AI suggestion generation

### Test Edge Cases
1. ✅ Invalid credentials
2. ✅ Duplicate username
3. ✅ Expired verification code
4. ✅ Rate limiting on message sending

---

## 📊 Monitoring & Maintenance

### Vercel Analytics (Built-in)
- Monitor page views
- Track Web Vitals
- Analyze user behavior

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Logs for debugging

### Database Monitoring
- MongoDB Atlas monitoring dashboard
- Set up alerts for high CPU/memory usage
- Monitor connection pool

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Database Connection Issues
- Verify MongoDB URI format
- Check IP whitelist (use 0.0.0.0/0 for serverless)
- Ensure database user has correct permissions

### Email Not Sending
- Verify Resend API key
- Check domain verification status
- Review Resend dashboard logs

### AI Suggestions Failing
- Verify Google Gemini API key
- Check API quota limits
- Review API route logs

---

## 🔄 Continuous Deployment

### Automatic Deployments
Vercel automatically deploys on:
- Push to `main` branch (production)
- Pull requests (preview deployments)

### Manual Deployments
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📈 Performance Optimization

### Already Implemented
- ✅ Next.js Image Optimization
- ✅ Edge Runtime for AI routes
- ✅ MongoDB connection pooling
- ✅ Debounced username checks
- ✅ React Hook Form for optimized forms

### Recommended Additions
- Add Redis for session caching
- Implement CDN for static assets
- Enable Vercel Edge Functions
- Add database indexes for frequent queries

---

## 🎉 Deployment Complete!

Your True Feedback app is now live and ready to use. Share your unique link and start receiving anonymous feedback!

**Need Help?**
- Check Vercel deployment logs
- Review MongoDB Atlas logs
- Contact support for third-party services
