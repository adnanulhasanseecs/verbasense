# CourtSense — Judicial Intelligence System (CJIS)

Enterprise marketing site for **CourtSense Judicial Intelligence System**: Next.js (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.

## Requirements

- Node.js 20+ (LTS recommended)
- npm 10+

## Setup

```bash
npm install
```

## Frontend dev server (recommended on Windows)

From the repo root, use **`manage-frontend.ps1`** so start/stop/restart/status stay consistent (port **3010**, PID file, logs):

```powershell
.\manage-frontend.ps1 start    # background dev server
.\manage-frontend.ps1 status
.\manage-frontend.ps1 stop
.\manage-frontend.ps1 restart
```

- Wrapper PID: `.courtsense-dev.pid` (gitignored)
- Log output: `logs/dev-server.log`

## Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `.\manage-frontend.ps1 start` | Dev server in background (port 3010) — **prefer this** |
| `npm run dev`      | Dev server on **http://localhost:3010** (foreground) |
| `npm run build`    | Production build                                 |
| `npm run start`    | Production server on **http://localhost:3010** (after `build`) |
| `npm run lint`     | ESLint                                           |
| `npm run test`     | Vitest (unit + component tests)                  |
| `npm run test:watch` | Vitest watch mode                              |

## Deployment (Vercel)

1. Import the repository in [Vercel](https://vercel.com).
2. Framework preset: **Next.js**.
3. Build command: `npm run build`, output: `.next`.

### Contact form email delivery

The contact form now posts to `POST /api/contact` and sends inquiries via Resend.

Set these environment variables (see `.env.example`):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (recipient inbox, e.g. `info@verbasense.io`)
- `CONTACT_FROM_EMAIL` (must be a verified sender/domain in Resend, e.g. `VerbaSense <info@verbasense.io>`)

Without these variables, the API returns a safe error and the UI shows a submit failure message.

## Project layout

- `app/` — routes and `layout.tsx`
- `components/` — `ui/` (shadcn), `layout/`, `cjis/`, `contact/`, `providers/`
- `sections/` — landing page sections
- `lib/` — utilities, constants, Zod schemas, tests (`*.test.ts`)

## Design tokens

Primary navy `#0B1F3A`, accent gold `#C89B3C`, background `#F8FAFC`. Light/dark themes via `next-themes` (navbar toggle).

## License

Private / unlicensed — adjust for your organization.
