# Cloudflare Pages Deployment

This project is configured for **Cloudflare Pages** (not Workers).

## Build Settings in Cloudflare Dashboard

When setting up your Cloudflare Pages project, use these settings:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (or leave empty)

## Important Notes

1. **Do NOT use `wrangler deploy`** - Cloudflare Pages automatically deploys after the build completes
2. The build output goes to the `dist` folder
3. The `_redirects` file ensures proper SPA routing

## If you see "Missing entry-point" error

This means Cloudflare is trying to deploy as a Worker instead of Pages. Make sure:
- You're using Cloudflare **Pages** (not Workers)
- The build command is `npm run build`
- The output directory is `dist`
- There is NO deploy command configured

