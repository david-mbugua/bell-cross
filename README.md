# Bell & Cross website

The site is a Next.js App Router application using TypeScript, Tailwind CSS v4, Motion, Radix UI and Phosphor icons. It is configured for standard Vercel deployment.

## Local development

Use Node.js 20.9 or newer, then run:

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The available checks are `npm run lint` and `npx tsc --noEmit`; `npm run build` creates the production build, and `npm run start` serves it locally.

## Deploy to Vercel

Import this project into Vercel or run `npx vercel` from the project directory. Vercel detects Next.js and configures the build automatically. No environment variables or external backend are required. Enquiries use the published email and phone links.

## Design and content notes

The visual system uses Outfit for display text, Geist for body text and a single blue accent with light and dark semantic color tokens. The intended design settings are `DESIGN_VARIANCE: 8`, `MOTION_INTENSITY: 6` and `VISUAL_DENSITY: 3`. Interface controls use an 8px radius and media panels use a 16px radius. The generated fibre and server imagery is conceptual and does not depict company premises or a completed project. Existing original brand artwork and suitable legacy photography are retained.

The original static source files remain at the project root for reference. Next.js serves only the application and the assets in `public/`.
