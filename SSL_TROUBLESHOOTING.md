# SSL Handshake Failed - Troubleshooting Guide

## Quick Checks

### 1. Are you using the `.pages.dev` URL?

If you're trying to access `https://your-project.pages.dev`, this should work immediately. If it doesn't:

- Try clearing your browser cache
- Try in incognito/private mode
- Wait a few minutes (sometimes takes 2-5 minutes after deployment)

### 2. Are you using a custom domain?

If you're using a custom domain (not `.pages.dev`), follow these steps:

## Custom Domain SSL Setup

### Step 1: Add Custom Domain in Cloudflare Pages

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `livetocode.com` or `www.livetocode.com`)
5. Click **Continue**

### Step 2: Configure DNS Records

Cloudflare will show you the DNS records you need. Typically:

- **CNAME record**: Point your domain to `your-project.pages.dev`
- Or use **A records** if specified

### Step 3: SSL/TLS Settings

1. Go to your domain in Cloudflare Dashboard (not Pages, but the main domain)
2. Go to **SSL/TLS** section
3. Make sure SSL/TLS encryption mode is set to **Full** or **Full (strict)**
4. **NOT** "Flexible" - this can cause SSL handshake issues

### Step 4: Wait for SSL Certificate

- Cloudflare automatically issues SSL certificates
- This can take **5-30 minutes** after adding the domain
- Check the **Custom domains** tab in Pages to see certificate status
- Status should show "Active" when ready

## Common Issues & Solutions

### Issue 1: "SSL handshake failed" on custom domain

**Solution:**
1. Check DNS records are correct (CNAME pointing to `.pages.dev`)
2. Wait 15-30 minutes for DNS propagation
3. Verify SSL/TLS mode is "Full" not "Flexible"
4. Check certificate status in Pages → Custom domains

### Issue 2: Works on `.pages.dev` but not custom domain

**Solution:**
- DNS might not be fully propagated
- SSL certificate might still be issuing
- Check DNS propagation: https://dnschecker.org

### Issue 3: Certificate shows "Pending" or "Error"

**Solution:**
1. Make sure DNS records are correct
2. Wait longer (can take up to 24 hours in rare cases)
3. Remove and re-add the custom domain
4. Contact Cloudflare support if persists

## Quick Test

Try accessing your site via:
- `https://your-project.pages.dev` (should work immediately)
- Your custom domain (might need DNS/SSL setup)

If `.pages.dev` works but custom domain doesn't, it's a DNS/SSL configuration issue.

## Still Having Issues?

1. **Check Cloudflare Pages dashboard:**
   - Go to your project → Custom domains
   - Check certificate status
   - Check for any error messages

2. **Check DNS:**
   - Verify CNAME/A records are correct
   - Use `dig` or `nslookup` to check DNS resolution

3. **Check SSL/TLS settings:**
   - Must be "Full" or "Full (strict)"
   - Not "Flexible"

4. **Wait:**
   - DNS propagation: 5-30 minutes
   - SSL certificate: 5-30 minutes
   - Sometimes up to 24 hours

