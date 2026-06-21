# SUR VPN Landing Page — Deployment Guide

This is a statically exported Next.js app. Run `npm run build` to generate the `out/` folder, then deploy that folder anywhere.

---

## Prerequisites

```bash
npm install
npm run build   # generates out/
```

The `out/` directory contains pure HTML/CSS/JS — no server required.

---

## Vercel (Recommended — Easiest)

1. Push your repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Vercel auto-detects Next.js. Leave all settings as default.
4. Click **Deploy**.

**Custom domain**: In the Vercel dashboard → Domains → add `survpn.xyz`.

> Note: `output: 'export'` in `next.config.ts` means Vercel serves static files — no serverless functions needed.

---

## GitHub Pages

### Option A — GitHub Actions (automated)

1. Push your code to a GitHub repository (e.g., `survpn/landing`).

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out/

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. In your GitHub repo → **Settings** → **Pages** → Source: **GitHub Actions**.

4. Push to `main`. The action runs automatically and deploys to `https://<username>.github.io/<repo>/`.

### Option B — Manual

```bash
npm run build
# Install gh-pages helper
npx gh-pages -d out
```

### Custom domain with GitHub Pages

1. Add a `CNAME` file inside `public/`:
   ```
   survpn.xyz
   ```
2. In GitHub → Settings → Pages → Custom domain → enter `survpn.xyz`.
3. Update your DNS: add a CNAME record pointing `survpn.xyz` → `<username>.github.io`.

> **Important**: If hosting at `username.github.io/repo-name/` (without a custom domain), set `basePath` in `next.config.ts`:
> ```ts
> const nextConfig: NextConfig = {
>   output: "export",
>   trailingSlash: true,
>   basePath: "/repo-name",
>   images: { unoptimized: true },
> };
> ```

---

## GitLab Pages

1. Push your repo to GitLab.

2. Create `.gitlab-ci.yml`:

```yaml
image: node:20-alpine

pages:
  stage: deploy
  script:
    - npm ci
    - npm run build
    - mv out public
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
```

3. Push to `main`. GitLab CI runs and deploys to `https://<username>.gitlab.io/<project>/`.

### Custom domain with GitLab Pages

1. In GitLab → Deploy → Pages → **New Domain** → enter `survpn.xyz`.
2. Update your DNS to point to GitLab Pages IPs (shown in GitLab UI).
3. Add a `CNAME` file inside `public/` containing `survpn.xyz`.

---

## Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com) → New Project.
2. Connect your GitHub/GitLab repo.
3. Build settings:
   - **Framework**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Deploy.

**Custom domain**: Cloudflare Pages → Custom Domains → add `survpn.xyz` (works automatically if your domain uses Cloudflare DNS).

---

## Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → New Site → Import from Git.
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
3. Deploy.

**Or drag-and-drop**: Run `npm run build` locally, then drag the `out/` folder to Netlify's drop zone.

---

## Self-hosted (Nginx)

```bash
npm run build
scp -r out/ user@yourserver:/var/www/survpn/
```

Nginx config:

```nginx
server {
    listen 80;
    server_name survpn.xyz www.survpn.xyz;
    root /var/www/survpn/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /404.html;
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

---

## URL Structure

After deploying, the site is structured as:

| URL | Content |
|-----|---------|
| `survpn.xyz/` | Language-detection redirect |
| `survpn.xyz/en/` | English |
| `survpn.xyz/fa/` | Persian (RTL) |
| `survpn.xyz/ar/` | Arabic (RTL) |
| `survpn.xyz/zh/` | Chinese |
| `survpn.xyz/ru/` | Russian |
| `survpn.xyz/es/` | Spanish |
| `survpn.xyz/ur/` | Urdu (RTL) |
| `survpn.xyz/uk/` | Ukrainian |

---

## Environment Notes

- Node.js 18+ required
- No environment variables needed (fully static)
- Google Fonts are loaded via CDN (users need internet access for fonts to load; the fallback is `system-ui`)
- All images are unoptimized for static export compatibility
