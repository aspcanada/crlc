# CRLC — The Cottonwood Rose Learning Community

Website for the Cottonwood Rose Learning Community, a nature-based K–9 education program in the Comox Valley (Black Creek, BC).

## Tech stack

- **Next.js 14+** (App Router), React 19, TypeScript, Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

- **RESOURCES_PAGE_PASSWORD** — Password for the gated `/resources` page (enrolled families only).
- **CRC_ACCESS_CODE** — (Optional) Access code for the criminal record check form, shown only on the Resources page.

## Project structure

- `src/app/` — Routes and pages (Home, Enrollment, Mentor Proposal, Resources, Contact).
- `src/components/` — Header, Footer, mobile nav, and home page sections.
- `src/data/` — Content and structured data (home copy, resources links, contacts). Sensitive values (e.g. CRC code) are read from env in server components.
- **Resources** (`/resources`) is password-protected; access via the **Parent Login** button in the header. Only enrolled families get the shared password.
- **Images:** Home page uses Unsplash placeholders (hero, program, educators, land, host family). Replace with your own photos by swapping the image URLs in the home section components or adding files under `public/images/` and updating the components.

## Deployment

Deploy to Vercel or Netlify. Set `RESOURCES_PAGE_PASSWORD` and `CRC_ACCESS_CODE` in the project environment.