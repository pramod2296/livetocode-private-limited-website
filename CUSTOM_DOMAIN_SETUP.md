# Setting Up Custom Domain: livetocode.in

## Step-by-Step Guide

### Step 1: Add Custom Domain in Cloudflare Pages

1. Go to **Cloudflare Dashboard** → **Pages** → Your Project (`livetocodein`)
2. Click on **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `livetocode.in`
5. Click **Continue** or **Add domain**

### Step 2: Configure DNS Records

Cloudflare will show you the DNS records needed. You need to add:

**Option A: CNAME Record (Recommended)**
- **Type**: CNAME
- **Name**: `@` (or root domain)
- **Target**: `livetocodein.pages.dev` (your Pages project URL)
- **Proxy status**: Proxied (orange cloud)

**Option B: If CNAME doesn't work for root domain, use A records:**
- Cloudflare Pages will provide specific IP addresses if needed

### Step 3: Verify Domain is in Cloudflare

Make sure `livetocode.in` is added to your Cloudflare account:

1. Go to **Cloudflare Dashboard** → Select `livetocode.in` domain
2. If not added, add it first:
   - Click **Add a Site**
   - Enter `livetocode.in`
   - Follow the setup wizard

### Step 4: Configure SSL/TLS Settings

**CRITICAL**: This is likely the issue!

1. In Cloudflare Dashboard, select your `livetocode.in` domain (not Pages)
2. Go to **SSL/TLS** section
3. Set **SSL/TLS encryption mode** to:
   - ✅ **Full** or **Full (strict)** (NOT Flexible!)
4. **Full (strict)** is recommended if you have a valid certificate

### Step 5: Wait for SSL Certificate

1. Go back to **Pages** → Your Project → **Custom domains**
2. Check the status of `livetocode.in`:
   - **Pending** = Certificate is being issued (wait 15-30 minutes)
   - **Active** = Certificate is ready (should work)
   - **Error** = Something is wrong (check DNS)

### Step 6: Verify DNS Propagation

Check if DNS is resolving correctly:
- Visit: https://dnschecker.org
- Enter: `livetocode.in`
- Check if it resolves to Cloudflare IPs

## Common Issues

### Issue: "Doesn't support HTTPS"

**Causes:**
1. Custom domain not added to Pages
2. DNS records not configured
3. SSL/TLS mode set to "Flexible" (should be "Full")
4. SSL certificate still being issued (wait 15-30 min)

**Solution:**
1. Verify domain is added in Pages → Custom domains
2. Check DNS records are correct
3. Set SSL/TLS to "Full" or "Full (strict)"
4. Wait for certificate issuance

### Issue: Certificate stuck on "Pending"

**Solution:**
1. Verify DNS records are correct
2. Make sure domain is in Cloudflare
3. Wait longer (can take up to 24 hours)
4. Try removing and re-adding the domain

## Quick Checklist

- [ ] Domain `livetocode.in` added to Cloudflare account
- [ ] Custom domain added in Pages → Custom domains
- [ ] DNS records configured (CNAME or A records)
- [ ] SSL/TLS mode set to "Full" or "Full (strict)"
- [ ] Certificate status shows "Active" (or wait if "Pending")
- [ ] DNS propagated (check with dnschecker.org)

## Expected Timeline

- DNS propagation: 5-30 minutes
- SSL certificate issuance: 15-30 minutes
- Total: Usually works within 30-60 minutes

