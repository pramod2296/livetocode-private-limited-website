# Cloudflare Pages Deployment Guide

## The Problem

If you're seeing this error:
```
✘ [ERROR] Missing entry-point to Worker script or to assets directory
```

It means Cloudflare is trying to deploy as a **Worker** instead of **Pages**.

## Solution: Configure Cloudflare Pages Correctly

### Step 1: Check Your Cloudflare Dashboard Settings

1. Go to your Cloudflare Dashboard
2. Navigate to **Pages** (not Workers)
3. Select your project
4. Go to **Settings** → **Builds & deployments**

### Step 2: Update Build Configuration

Make sure your build settings are:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty or set to `/`)
- **Deploy command**: **LEAVE THIS EMPTY** or **REMOVE IT**

⚠️ **IMPORTANT**: Do NOT set a deploy command. Cloudflare Pages automatically deploys after the build completes.

### Step 3: Environment Variables (if needed)

If you need any environment variables:
- Go to **Settings** → **Environment variables**
- Add them there (usually not needed for a static React site)

### Step 4: Save and Redeploy

1. Save your settings
2. Go to **Deployments**
3. Click **Retry deployment** or push a new commit to trigger a rebuild

## Alternative: Using Wrangler (Not Recommended for Static Sites)

If you must use Wrangler, you need to configure it for Pages:

1. Install wrangler: `npm install -D wrangler`
2. Create `wrangler.toml`:

```toml
name = "livetocode-website"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

3. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && wrangler pages deploy dist"
  }
}
```

But for a static React site, **Cloudflare Pages automatic deployment is recommended** - no wrangler needed!

## Verification

After deployment, your site should be available at:
- `https://your-project.pages.dev`
- Or your custom domain if configured

## Troubleshooting

- **Build fails**: Check build logs in Cloudflare dashboard
- **404 errors on routes**: Make sure `_redirects` file is in `public/` folder
- **Assets not loading**: Check that paths are relative (Vite handles this automatically)

