# Portfolio Screenshots Update Guide

## Quick Steps to Update Portfolio Images

### 1. Take Screenshots of Your Live Websites

**For each website, take a high-quality screenshot:**

1. **PA Real Estate Support** (https://parealestatesupport.com)
   - Open the website in Chrome/Firefox
   - Press F12 to open Developer Tools
   - Click the device icon (mobile/tablet view)
   - Set to "Desktop" or "Responsive" at 1920x1080
   - Right-click and "Save screenshot" or use a tool like:
     - **Mac**: Cmd+Shift+4 (select area)
     - **Windows**: Snipping Tool or Win+Shift+S
     - **Chrome Extension**: "Full Page Screen Capture"

2. **Blissful Existence Healing Acres** (https://behealingacres.com)
   - Follow same process

3. **The Falls Community Association** (https://falls.multimedium.dev)
   - Follow same process

### 2. Optimize Images

**Recommended specifications:**
- **Size**: 1200x800 pixels (3:2 aspect ratio)
- **Format**: WebP or JPEG
- **Quality**: 80-85% (balance between quality and file size)
- **File size**: Under 200KB each

**Tools for optimization:**
- **Online**: TinyPNG.com, Squoosh.app
- **Mac**: ImageOptim
- **Windows**: RIOT (Radical Image Optimization Tool)

### 3. Upload Images

**Option A: Use a CDN (Recommended)**
1. Upload to your preferred CDN:
   - **Cloudinary** (free tier available)
   - **Vercel** (if hosting there)
   - **AWS S3** + CloudFront
   - **GitHub** (for simple hosting)

**Option B: Add to Project**
1. Create folder: `/public/portfolio/`
2. Add your optimized images:
   - `pa-real-estate-support.webp`
   - `blissful-existence-healing-acres.webp`
   - `falls-community-association.webp`

### 4. Update the Code

**In `/src/components/Portfolio.tsx`, replace the image URLs:**

```typescript
const projects = [
  {
    id: 1,
    title: "PA Real Estate Support",
    // Replace this line:
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&q=80",
    // With your screenshot:
    image: "/portfolio/pa-real-estate-support.webp",
    // OR with CDN URL:
    // image: "https://your-cdn.com/pa-real-estate-support.webp",
  },
  {
    id: 2,
    title: "Blissful Existence Healing Acres",
    // Replace this line:
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80",
    // With your screenshot:
    image: "/portfolio/blissful-existence-healing-acres.webp",
  },
  {
    id: 3,
    title: "The Falls Community Association",
    // Replace this line:
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80",
    // With your screenshot:
    image: "/portfolio/falls-community-association.webp",
  }
]
```

### 5. Test and Deploy

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy**: Push to your hosting platform

## Pro Tips

### Best Screenshot Practices:
- **Timing**: Take screenshots when sites look their best
- **Content**: Ensure real content is visible (not placeholder text)
- **Browser**: Use Chrome for consistency
- **Clean**: Clear browser cache/cookies for fresh load
- **Mobile**: Consider taking mobile versions too

### Advanced Options:
- **Automated Screenshots**: Use services like:
  - URLbox.io
  - htmlcsstoimage.com
  - Puppeteer (if you're technical)

### If Websites Are Down:
- **Cached versions**: Use Wayback Machine (archive.org)
- **Backup screenshots**: Keep screenshots in version control
- **Placeholder**: Use website mockups as temporary solution

## Troubleshooting

**Image not loading?**
- Check file path is correct
- Verify image file exists in public folder
- Clear browser cache
- Check file permissions

**Image looks blurry?**
- Use higher resolution source (2400x1600 → 1200x800)
- Check compression settings
- Ensure 3:2 aspect ratio

**File size too large?**
- Compress with TinyPNG
- Convert to WebP format
- Reduce quality to 75-80%

## Quick Automation Script

If you're comfortable with code, here's a simple Node.js script to take screenshots:

```javascript
// Save as screenshot.js
const puppeteer = require('puppeteer');

const sites = [
  { name: 'pa-real-estate-support', url: 'https://parealestatesupport.com' },
  { name: 'blissful-existence-healing-acres', url: 'https://behealingacres.com' },
  { name: 'falls-community-association', url: 'https://falls.multimedium.dev' }
];

(async () => {
  const browser = await puppeteer.launch();
  
  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto(site.url, { waitUntil: 'networkidle0' });
    await page.screenshot({ 
      path: `public/portfolio/${site.name}.png`,
      type: 'png',
      quality: 85
    });
    console.log(`Screenshot saved: ${site.name}.png`);
  }
  
  await browser.close();
})();
```

Run with: `npm install puppeteer && node screenshot.js`

This guide will help you get professional, current screenshots of your portfolio websites!