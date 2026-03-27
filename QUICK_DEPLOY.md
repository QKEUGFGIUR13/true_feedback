# 🚀 Quick Deployment Reference

## One-Command Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Environment Variables (Copy to Vercel Dashboard)

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=https://your-app.vercel.app
RESEND_API_KEY=re_your_key
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-key
```

## Post-Deployment Updates

### 1. MongoDB Atlas
```
Network Access → IP Whitelist:
0.0.0.0/0 (Allow from anywhere)
```

### 2. Resend
```
From Email: no-reply@arpitchauhan.me
(or your verified domain)
```

## Test URLs After Deployment

- Homepage: `https://your-app.vercel.app`
- Sign Up: `https://your-app.vercel.app/sign-up`
- Sign In: `https://your-app.vercel.app/sign-in`
- Dashboard: `https://your-app.vercel.app/dashboard`
- Public Profile: `https://your-app.vercel.app/u/username`

## Troubleshooting

### Build Fails
```bash
npm run build  # Test locally first
```

### Database Connection Error
- Check MONGODB_URI format
- Verify IP whitelist (0.0.0.0/0)
- Test connection string

### Email Not Sending
- Verify Resend API key
- Check domain verification
- Review Resend logs

## Monitoring

- **Vercel Dashboard:** https://vercel.com/dashboard
- **MongoDB Atlas:** https://cloud.mongodb.com
- **Resend Logs:** https://resend.com/logs
- **Google Cloud Console:** https://console.cloud.google.com

## Support

- Vercel Support: https://vercel.com/support
- MongoDB Support: https://support.mongodb.com
- Check DEPLOYMENT.md for detailed guide
- Check PRODUCTION_CHECKLIST.md for complete checklist

---

**Ready to Deploy?** Follow DEPLOYMENT.md for step-by-step instructions.
