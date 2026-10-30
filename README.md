# VIRASAT REAL ESTATE DEVELOPERS — OFFICIAL DIGITAL PLATFORM

A production-ready luxury real estate developer website and Content Management System engineered for **VIRASAT DEVELOPMENTS**, Varanasi, Uttar Pradesh, India.

---

## 1. Architecture & Technology Stack

- **Framework**: Next.js 15 (App Router with React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury design tokens
- **Database & ORM**: Prisma ORM with SQLite (seamlessly portable to PostgreSQL/MySQL via `DATABASE_URL`)
- **Icons**: Lucide React
- **Typography**: Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif)
- **Palette**:
  - Deep Forest Green: `#173D32`
  - Champagne Gold: `#C6A66B`
  - Warm Ivory: `#F7F5EF`
  - Charcoal Slate: `#202321`

---

## 2. Public Sitemap & Features

1. **Home (`/`)**: Cinematic full-screen hero, brand philosophy, featured developments, 5 pillars of excellence, lifestyle narrative, Varanasi location connectivity advantage, recent market insights, and private consultation form.
2. **About Us (`/about`)**: Company brand story, vision, mission, founder's message, and 4-stage development lifecycle.
3. **Our Projects (`/projects`)**: Real-time filterable inventory by Category (Residential Plots, Luxury Apartments, Villas, Commercial), Status (New Launch, Upcoming, Under Development, Ready to Move, Completed), and search query.
4. **Project Details (`/projects/[slug]`)**: Adaptive layout supporting Plotted Developments vs. High-rise Apartments vs. Commercial Hubs with configurations, amenities, master plan blueprint zoom, image gallery lightbox, verified nearby landmarks, FAQs, and brochure download gate.
5. **Lifestyle & Amenities (`/lifestyle`)**: Curated editorial on The Virasat Club (15,000 sq.ft.), 70% open botanical parklands, and subterranean 3-tier security infrastructure.
6. **Location & Connectivity (`/location`)**: Varanasi Outer Ring Road Phase-2, Babatpur International Airport corridor, Cantt transit metrics with verified travel times and interactive map.
7. **Visual Gallery (`/gallery`)**: High-resolution architectural photography, landscape gardens, and club pavilions with category filters and modal lightbox.
8. **Downloads (`/downloads`)**: Official master brochures, layout plans, and corporate dossier access with lead capture gate.
9. **Insights & Blog (`/insights`, `/insights/[slug]`)**: SEO real estate market intelligence articles.
10. **Contact (`/contact`)**: Headquarters address, phone, WhatsApp concierge link, official email, Google Maps embed, and consultation request form.
11. **Legal & Compliance**:
    - `/privacy-policy`: Client data protection policy.
    - `/terms`: Terms of use.
    - `/disclaimer`: Statutory UP-RERA compliance notice.

---

## 3. Lead Generation Engine

- **API Endpoint**: `POST /api/enquiries`
- **Validation**: Indian mobile number (+91 regex) validation, email syntax checking, honeypot spam protection.
- **Lead Pipeline**: `NEW` → `CONTACTED` → `QUALIFIED` → `SITE_VISIT_SCHEDULED` → `CONVERTED` → `NOT_INTERESTED`.
- **CRM Features**: Internal notes logger, project tracking, filter by status, and CSV export.

---

## 4. Admin CMS Portal (`/admin`)

- **Login URL**: `/admin/login`
- **Default Credentials**:
  - **Email**: `admin@virasatdevelopments.com`
  - **Password**: `virasat@admin2026`
- **Modules**:
  - **Dashboard Overview (`/admin`)**: Real-time lead count, new inquiries, site visits, and active projects.
  - **Leads CRM (`/admin/leads`)**: Search, filter by project/status, update lead status, record internal client discussion notes, and download CSV.
  - **Project Builder (`/admin/projects`)**: Add and publish new plotted developments or apartments without writing code.
  - **Site Settings (`/admin/settings`)**: Update company address, phone, WhatsApp number, email, RERA disclaimer, and digital marketing tracking tags (GA4, GTM, Meta Pixel).

---

## 5. Local Setup & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Synchronize Database & Seed
```bash
npx prisma db push
npx tsx prisma/seed.ts
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website, or [http://localhost:3000/admin](http://localhost:3000/admin) for the CMS.

---

## 6. Hostinger Deployment Guide

Hostinger hosting tiers determine the deployment strategy:

### Option A: Hostinger VPS / Cloud / KVM (Recommended for Next.js)
1. Run Node.js 18+ on the server.
2. Clone repository and run `npm install`.
3. Set `DATABASE_URL` in `.env` to PostgreSQL or keep the SQLite database.
4. Run `npm run build`.
5. Start persistent daemon with PM2: `pm2 start npm --name "virasat-web" -- start`.
6. Configure Nginx reverse proxy to `http://localhost:3000`.

### Option B: Hostinger Business Web Hosting (cPanel / hPanel Node.js App Manager)
1. Navigate to **Node.js Selector** in hPanel.
2. Select Node.js version 20 LTS or higher.
3. Set Application Startup File to `node_modules/next/dist/bin/next` with argument `start`.
4. Point domain to the Node application root.

### Option C: Decoupled / Static Export + Serverless Database
If the Hostinger plan is strictly Apache/PHP shared hosting without Node.js daemon support:
- Next.js can be deployed on Vercel or Cloudflare Pages with zero monthly cost, while keeping your Hostinger domain DNS pointed to the deployment via standard A/CNAME records.

---

© 2026 VIRASAT DEVELOPMENTS. All rights reserved.
