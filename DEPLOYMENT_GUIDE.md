# Deployment Guide - Two Versions

This project can be deployed in two versions:
1. **With Gift Box Game** - Full gamified experience
2. **Without Gift Box Game** - Direct checkout experience

Both versions include the feedback form on the Thank You page.

---

## 🎮 Version 1: WITH Gift Box Game

### Vercel Deployment Settings:
1. **Project Name**: `gamified-shopping` (or your choice)
2. **Environment Variables**:
   ```
   VITE_ENABLE_GAME=true
   ```

### User Flow:
Cart → Confirm Order → **Gift Box Game** → Thank You Page (with discount) → Feedback Form

---

## 📦 Version 2: WITHOUT Gift Box Game

### Vercel Deployment Settings:
1. **Project Name**: `gamified-shopping-simple` (or your choice)
2. **Environment Variables**:
   ```
   VITE_ENABLE_GAME=false
   ```

### User Flow:
Cart → Confirm Order → Thank You Page (no discount) → Feedback Form

---

## 🚀 How to Deploy Both Versions

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Add feature toggle for game"
git push origin main
```

### Step 2: Deploy Version 1 (WITH Game)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. **Project Settings**:
   - Name: `gamified-shopping`
   - Framework: Vite
   - Root Directory: `./`
5. **Environment Variables** (Important!):
   - Key: `VITE_ENABLE_GAME`
   - Value: `true`
6. Click **Deploy**
7. Your URL: `https://gamified-shopping.vercel.app`

### Step 3: Deploy Version 2 (WITHOUT Game)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. **Import the SAME GitHub repository again**
4. **Project Settings**:
   - Name: `gamified-shopping-simple`
   - Framework: Vite
   - Root Directory: `./`
5. **Environment Variables** (Important!):
   - Key: `VITE_ENABLE_GAME`
   - Value: `false`
6. Click **Deploy**
7. Your URL: `https://gamified-shopping-simple.vercel.app`

---

## 🔄 Updating Both Versions

When you make changes:
1. Commit and push to GitHub
2. **Both versions auto-update!**
3. No need to maintain separate code

```bash
# Make your changes
git add .
git commit -m "Update styling"
git push origin main

# Vercel automatically deploys to BOTH versions!
```

---

## 🧪 Testing Both Versions Locally

### Test WITH Game:
```bash
# Make sure .env has:
# VITE_ENABLE_GAME=true

npm run dev
```

### Test WITHOUT Game:
```bash
# Option 1: Change .env to:
# VITE_ENABLE_GAME=false

npm run dev

# Option 2: Use inline environment variable
VITE_ENABLE_GAME=false npm run dev
```

---

## ✅ Verification Checklist

After deployment, verify:

**Version 1 (With Game):**
- [ ] Cart → Checkout → Confirm shows Gift Box Game
- [ ] Can select a gift box
- [ ] Discount is applied to final bill
- [ ] Thank You page shows savings
- [ ] Feedback form works
- [ ] Data goes to Google Sheets

**Version 2 (Without Game):**
- [ ] Cart → Checkout → Confirm goes directly to Thank You page
- [ ] No gift box game appears
- [ ] Final bill has no discount
- [ ] Feedback form works
- [ ] Data goes to Google Sheets

---

## 🎯 Custom Domains (Optional)

You can add custom domains in Vercel:

**Version 1:** `shop.yourwebsite.com`
**Version 2:** `simple.yourwebsite.com`

1. Go to Vercel Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## 📊 Analytics

Track which version performs better:
- User feedback from both versions
- Conversion rates
- User preferences from feedback form

---

## 🔧 Troubleshooting

**Issue**: Changes not showing up?
- Solution: Check you pushed to GitHub
- Both Vercel projects auto-deploy from main branch

**Issue**: Wrong version showing?
- Solution: Check Environment Variables in Vercel dashboard
- Project Settings → Environment Variables

**Issue**: Game showing when it shouldn't?
- Solution: Verify `VITE_ENABLE_GAME=false` in Vercel
- Redeploy if needed

---

## 💡 Tips

1. **Same codebase** = Easy maintenance
2. **Different environment variables** = Different behavior
3. **Both auto-deploy** = Less work for you
4. **Can A/B test** = See which users prefer
5. **Feedback form** = Collect user opinions on both

---

Need help? Check the console logs or contact support!

