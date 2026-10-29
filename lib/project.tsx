import { ReactNode } from "react";
// Impor ikon-ikon teknologi yang akan digunakan
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGetx,
  SiSupabase,
  SiPython,
  SiFlask,
  SiRoboflow,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiMqtt,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiRedis,
  SiSwagger,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiAxios,
  SiPrimevue,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiKotlin,
  SiAndroid,
  SiBluetooth,
  SiSqlite,
  SiGradle,
  SiShadcnui,
  SiZod,
  SiGin,
  SiMinio,
} from "react-icons/si";

export type ProjectCategory = 'All' | 'Mobile' | 'Web' | 'Backend' | 'IoT' | 'AI';

export interface ProjectDetailsType {
  techStack?: { layer: string; tool: string }[];
  structure?: string;
  routes?: {
    category: string;
    headers: string[];
    rows: string[][];
  }[];
  roles?: { role: string; code: string; capabilities: string }[];
  colors?: { token: string; hex: string; usage: string }[];
  instructions?: {
    title: string;
    description?: string;
    code?: string;
    steps?: { name: string; cmd: string }[];
  }[];
}

export interface ProjectType {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tech: ReactNode[];
  link: string;
  github?: string;
  playstore?: string;
  appstore?: string;
  website?: string;
  details?: ProjectDetailsType;
}

export const projects: ProjectType[] = [
  {
    slug: 'simrs-spkd-dashboard',
    title: 'SIMRS SPKD — Hospital Dashboard (Frontend)',
    description: 'The staff-facing web client of an integrated Hospital Information Management System, built with Next.js 16 (App Router), React 19, and strict TypeScript. It covers the whole care chain — self-service kiosk, queueing, registration, encounters, clinical records, laboratory, radiology, operating theatre, pharmacy, beds, and billing — behind a permission-aware shell that renders a different landing dashboard for each of the nine staff roles. Because it handles patient medical data, every screen is assembled from shadcn primitives on theme tokens only, validated with Zod against the OpenAPI contract, and readable in light mode, dark mode, and on printed documents.',
    image: '/projects/simrs_spkd.webp',
    category: 'Web',
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiReact key="react" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiShadcnui key="shadcn" />,
      <SiZod key="zod" />,
      <SiAxios key="axios" />,
      <SiDocker key="docker" />,
    ],
    link: '/projects/simrs-spkd-dashboard',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Next.js 16.4 (App Router + Server Components)' },
        { layer: 'UI Library', tool: 'React 19.3 with strict TypeScript 5' },
        { layer: 'Styling', tool: 'Tailwind CSS v4 + tw-animate-css' },
        { layer: 'Component System', tool: 'shadcn/ui style base-vega on @base-ui/react' },
        { layer: 'Icons', tool: 'Remix Icon (@remixicon/react) only' },
        { layer: 'Charts', tool: 'Recharts 3.8 wrapped in the shadcn ChartContainer' },
        { layer: 'Validation', tool: 'Zod v4, mirrored from swagger.yaml limits' },
        { layer: 'HTTP Client', tool: 'Axios — a single instance with an envelope interceptor' },
        { layer: 'Real-time', tool: 'Centrifuge 5 (WebSocket) for queue and order events' },
        { layer: 'Date & Time', tool: 'Day.js pinned to the hospital time zone' },
        { layer: 'Scheduling UI', tool: 'React Big Calendar (practitioner practice sessions)' },
        { layer: 'Theming', tool: 'next-themes — light, dark, and a forced-light print theme' },
        { layer: 'Quality Gates', tool: 'ESLint 9, Prettier + prettier-plugin-tailwindcss, Husky, Commitlint' },
        { layer: 'Package Manager', tool: 'pnpm 12 (the only accepted lockfile)' },
        { layer: 'Containerization', tool: 'Docker multi-stage — non-root, read-only rootfs' },
      ],
      structure: `simrs-dashboard-client/
├── app/
│   ├── (auth)/login/                  # Staff sign-in, the only public page
│   ├── (apm)/apm/                     # Anjungan Pendaftaran Mandiri — patient self-service kiosk
│   ├── (vwr)/display/                 # Waiting-room screens: desk calls and clinic board
│   └── (dashboard)/                   # Authenticated area — 48 route segments
│       ├── _layouts/<role>/           # Nine role landing dashboards (doctor, nurse, cashier, …)
│       ├── patients/ · encounters/    # Patient registry and the encounter workspace (triage → discharge)
│       ├── queues/ · schedules/       # Ticketing desks, kiosk services, practice sessions
│       ├── lab/ · radiology/          # Orders, sample collection, results, verified reports
│       ├── surgery/                   # Operating-theatre board, WHO checklist, intra-op records
│       ├── pharmacy/                  # Prescriptions, clinical review, dispensing, stock batches
│       ├── billing/ · cashier/        # Bills, payments, receipts, tariff versions, cashier shifts
│       └── users/ · roles/ · settings/# Accounts, permission matrix, settings, audit trail
├── components/
│   ├── ui/                            # shadcn primitives — the only source of UI elements
│   └── *.tsx                          # Cross-page shells (sidebar, patient picker, print portal)
├── lib/
│   ├── api/<feature>.ts               # One typed module per backend feature (22 modules)
│   ├── axios.ts · auth.ts             # Shared instance, envelope errors, token cookies
│   └── body-map/ · wilayah.ts         # Anatomy map data and the Indonesian region dataset
├── hooks/                             # Shared state hooks (useApi, useRealtime, useDoctorScope, …)
├── config/env.ts                      # Zod-validated env vars — the only reader of process.env
└── proxy.ts                           # Next.js 16 request layer: session gate + /api/* forwarding`,
      routes: [
        {
          category: 'Public & Device Routes',
          headers: ['Route', 'Screen', 'Key Capabilities'],
          rows: [
            ['/login', 'Staff sign-in', 'Username + password, forced password change on first login, shortcuts to the public device screens'],
            ['/apm', 'Self-service kiosk', 'Device login, on-screen keyboard, booking check-in, walk-in registration for returning patients, printed ticket'],
            ['/display', 'Queue display (desk)', 'Called-ticket hero, recent calls, next-up strip, screen setup and wake-lock for an always-on TV'],
            ['/display/poli', 'Queue display (clinic)', 'Per-clinic board driven by the same real-time channel'],
          ]
        },
        {
          category: 'Clinical Service Routes',
          headers: ['Route', 'Screen', 'Key Capabilities'],
          rows: [
            ['/', 'Role dashboard', 'Nine layouts picked from the signed-in role: queue, stat cards, charts, licence reminders, rejected-prescription alerts'],
            ['/patients · /patients/[id]', 'Patient registry', 'Search, masked NIK in lists, region-aware address form, allergy panel, encounter history'],
            ['/encounters · /encounters/[id]', 'Encounter workspace', 'Registration dialog, ED triage, vitals, 28-section physical exam with body map, SOAP notes, ICD-10 diagnoses, consent and refusal letters, discharge checklist, medical resume'],
            ['/queues/operate', 'Desk console', 'Call next, recall, skip, complete, attach a patient to a ticket, change priority'],
            ['/queues/tickets · /desks · /services', 'Queue administration', 'Ticket log with event history, desk-to-service mapping, service master'],
            ['/schedules/availability · /sessions', 'Practice schedules', 'Availability board per clinic and date, calendar of sessions, per-date cancellations'],
          ]
        },
        {
          category: 'Ancillary, Surgery & Pharmacy Routes',
          headers: ['Route', 'Screen', 'Key Capabilities'],
          rows: [
            ['/lab/orders · /lab/tests', 'Laboratory', 'Order from an encounter, sample collection, result entry, critical-value read-back, analyst verification, test master'],
            ['/radiology/orders · /exams', 'Radiology', 'Order and schedule, record the examination, radiologist reading, verification, exam master'],
            ['/surgery · /surgery/[id]', 'Operating theatre', 'Case board, request and scheduling, consent and site marking, WHO safety checklist per phase, intra-op steps, operative and anaesthesia records, material usage'],
            ['/pharmacy/prescriptions', 'Prescriptions', 'Prescribe against stock availability, printable prescription document, cancellation'],
            ['/pharmacy/reviews · /reviews/[id]', 'Clinical review', 'Pharmacist worklist, allergy alert panel, review pipeline, dispensing dialog, batch traceability, medication labels'],
            ['/pharmacy/stock · /medications', 'Stock & medication master', 'Batch balances, stock receipts, opname adjustments, unit pricing'],
          ]
        },
        {
          category: 'Finance, Facility & Administration Routes',
          headers: ['Route', 'Screen', 'Key Capabilities'],
          rows: [
            ['/billing · /billing/[id]', 'Billing', 'Unbilled encounters, bill lines and reversals, finalize and reopen, payments, printable invoice and receipt'],
            ['/cashier', 'Cashier shift', 'Open and close a shift, reconcile the drawer against recorded payments'],
            ['/tariffs', 'Tariff master', 'Billing services, tariff versions with price preview, per-unit default services'],
            ['/beds · /beds/census · /rooms', 'Facility', 'Bed list and detail, maintenance and housekeeping states, occupancy census per unit, rooms'],
            ['/units · /practitioners', 'Organisation', 'Service units, practitioner profiles, STR/SIP licences, linked login accounts'],
            ['/users · /roles', 'Access control', 'Accounts with activation and password reset, role builder, permission matrix'],
            ['/clinical/icd10 · /settings · /audit-logs', 'Administration', 'ICD-10 master with CSV import, admin-editable settings with change history, audit trail with hash-chain verification'],
          ]
        }
      ],
      roles: [
        { role: 'Administrator', code: 'admin', capabilities: 'Analytics dashboard, user and role management, settings, ICD-10 master, audit trail with hash-chain verification.' },
        { role: 'Admisi / Registration', code: 'registrar', capabilities: 'Patient registry, encounter registration and check-in, coverage, queue desks and tickets.' },
        { role: 'Dokter', code: 'doctor', capabilities: 'Own patient queue, clinical workspace: vitals, physical exam, SOAP notes, diagnoses, orders, prescriptions, signed medical resume.' },
        { role: 'Perawat', code: 'nurse', capabilities: 'Triage, vitals, nursing notes, bed transfers, discharge checklist, intra-operative nursing records.' },
        { role: 'Apoteker', code: 'pharmacist', capabilities: 'Prescription worklist, clinical review with allergy alerts, dispensing, stock batches and opname.' },
        { role: 'Kasir', code: 'cashier', capabilities: 'Cashier shift panel, bill payments and refunds, receipts, payment voiding.' },
        { role: 'Analis Laboratorium', code: 'lab_analyst', capabilities: 'Lab order queue, sample collection, result entry, critical-value read-back.' },
        { role: 'Radiografer', code: 'radiographer', capabilities: 'Radiology order queue, examination execution, image handover for reading.' },
        { role: 'Koordinator Kamar Operasi', code: 'surgery_coordinator', capabilities: 'Operating-theatre board, scheduling, room and procedure master, clinical privileges.' },
        { role: 'Anjungan Mandiri (device)', code: 'kiosk', capabilities: 'Kiosk account with narrow permissions: issue tickets, look up today\'s booking, self check-in. Cannot read other patients.' },
        { role: 'Monitor Antrean (device)', code: 'queue_display', capabilities: 'Display account that may only read the queue board channel for the waiting-room TV.' }
      ],
      colors: [
        { token: 'brand-navy', hex: '#012E5E', usage: 'Sidebar surface in both themes and the logo lettering behind it' },
        { token: 'brand-teal', hex: '#019A96', usage: 'Brand accent taken from the logo artwork; login gradient and marks' },
        { token: 'primary', hex: '#00837F', usage: 'Primary buttons and links in light mode — darkened to reach 4.6:1 on white' },
        { token: 'primary-dark', hex: '#1BBDB7', usage: 'Primary in dark mode, paired with near-black text instead of white' },
        { token: 'destructive', hex: '#D92D33', usage: 'Irreversible actions: cancel encounter, deactivate user, void payment' },
        { token: 'background', hex: '#F4F6FA', usage: 'Page background behind white cards; #0B1522 in dark mode' },
        { token: 'chart-1', hex: '#1257D6', usage: 'First chart series; all series come from --chart-1 … --chart-5, never raw Tailwind colors' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Node.js 24 LTS and **pnpm 12** (enabled through corepack — npm and yarn lockfiles are rejected). The dashboard is API-driven, so a reachable SIMRS API is required.'
        },
        {
          title: 'Setup & Installation',
          code: `# Install dependencies (pnpm only)
corepack enable
pnpm install

# Point the client at the API
cp .env.example .env
# API_URL is read at runtime by proxy.ts; NEXT_PUBLIC_* values are inlined at build time.`
        },
        {
          title: 'Development & Quality Commands',
          steps: [
            { name: 'Run Dev Server', cmd: 'pnpm dev' },
            { name: 'Build Production', cmd: 'pnpm build' },
            { name: 'Type Check', cmd: 'pnpm exec tsc --noEmit' },
            { name: 'Lint', cmd: 'pnpm lint' },
            { name: 'Format Changed Files', cmd: 'pnpm exec prettier --write .' },
            { name: 'Add a shadcn Component', cmd: 'pnpm dlx shadcn@latest add <name>' }
          ]
        },
        {
          title: 'Docker Deployment',
          description: 'The backend address is a runtime variable, so one image serves every environment.',
          code: `# Build the image
docker build -t simrs-dashboard .

# Run it, pointing at the API
docker run -d --name simrs-dashboard -p 3000:3000 \\
  -e API_URL=https://api.example.id simrs-dashboard

# Or with the hardened production stack (non-root, read-only rootfs, loopback bind)
docker compose -f docker-compose.prod.yml up -d --build`
        }
      ]
    }
  },
  {
    slug: 'simrs-spkd-server',
    title: 'SIMRS SPKD — Backend (Golang)',
    description: 'A hospital information system API written in Go with Gin and pgx/v5, shaped around Indonesian Ministry of Health regulations (Permenkes 24/2022 on medical records, 72/2016 on pharmacy, 290/2008 on informed consent). Twenty-four self-contained features — encounters, clinical records, laboratory, radiology, the operating theatre, the pharmacy stock ledger, and billing — expose 191 documented endpoints guarded by 71 permissions and 14 seeded roles. Clinical and financial data is append-only and enforced by database triggers rather than by the application alone, so a correction is a new superseding row and never an UPDATE, and every route is recorded in a hash-chained audit trail.',
    image: '/projects/simrs_server.webp',
    category: 'Backend',
    tech: [
      <SiGo key="go" />,
      <SiGin key="gin" />,
      <SiPostgresql key="postgres" />,
      <SiRedis key="redis" />,
      <SiMinio key="minio" />,
      <SiSwagger key="swagger" />,
      <SiDocker key="docker" />,
    ],
    link: '/projects/simrs-spkd-server',
    details: {
      techStack: [
        { layer: 'Language', tool: 'Go 1.27' },
        { layer: 'Router / HTTP', tool: 'Gin 1.12' },
        { layer: 'Database Client', tool: 'pgx/v5 connection pool with WithTx helpers' },
        { layer: 'Database', tool: 'PostgreSQL 16 — one schema per feature, singular table names' },
        { layer: 'Migrations', tool: 'golang-migrate v4, embedded — 35 tested up/down pairs' },
        { layer: 'Authentication', tool: 'JWT (golang-jwt/v5) with refresh rotation + bcrypt' },
        { layer: 'Authorization', tool: 'RequirePermission middleware — 71 permissions across 14 roles' },
        { layer: 'Cache & Rate Limit', tool: 'Redis 9 (go-redis), login attempt lockouts' },
        { layer: 'Object Storage', tool: 'MinIO — signed, short-lived document download URLs' },
        { layer: 'Real-time', tool: 'Centrifugo v6 — events emitted from triggers, ID-only payloads' },
        { layer: 'API Documentation', tool: 'swaggo annotations rendered through Scalar API Reference' },
        { layer: 'Audit Trail', tool: 'Hash-chained audit log with an integrity verification endpoint' },
        { layer: 'Monitoring', tool: 'Sentry + structured logging (IDs only, never PII)' },
        { layer: 'Testing', tool: 'testify + Testcontainers — 151 test files, unit and `integration` tags' },
        { layer: 'Containerization', tool: 'Docker Compose — API, PostgreSQL, Redis, MinIO, Centrifugo' }
      ],
      structure: `simrs-server/
├── cmd/server/
│   ├── main.go · router.go            # Wiring: the only place allowed to import many features
│   ├── audit_rules.go                 # 217 audit rules — each route names its action and patient scope
│   ├── surgery_wiring.go              # Cross-feature adapter: surgery issues stock through pharmacy
│   └── realtime_wiring.go             # Centrifugo channel catalog and publication switch
├── internal/features/<feature>/       # 24 packages; a feature never imports another feature
│   ├── <f>.domain.go                  # Types, pure business rules, repo interfaces, error codes
│   ├── <f>.dto.go                     # Request/response types, binding tags, response mappers
│   ├── <f>.service.go                 # Orchestration and rule validation — no SQL, no gin.Context
│   ├── <f>.repository.go              # SQL, transactions, row locks (FOR UPDATE / SKIP LOCKED)
│   ├── <f>.handler.go                 # Bind, read principal, write envelope, swagger annotations
│   └── <f>.route.go                   # Route table — every route carries RequirePermission
├── internal/pkg/                      # Cross-feature infrastructure, no domain logic
│   ├── middleware/ · access/ · token/ # Authenticate, permission guard, JWT issue and rotation
│   ├── auditlog/                      # Hash-chained trail written by the global middleware
│   ├── database/ · settings/ · cache/ # pgx pool and WithTx, admin-editable settings, Redis
│   ├── realtime/ · storage/           # Centrifugo emitter, MinIO object storage
│   └── apperror/ · response/          # FEATURE_REASON codes, { data, meta, error } envelope
├── migrations/                        # 35 ordered up/down pairs, embedded via golang-migrate
├── docs/                              # swaggo output (docs.go, swagger.json, swagger.yaml)
└── deploy/centrifugo/config.json      # Real-time namespaces, one per channel rule`,
      routes: [
        {
          category: 'Authentication & Access Control',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['POST', '/api/v1/auth/login', 'Authenticate and issue an access + refresh token pair', 'Public'],
            ['POST', '/api/v1/auth/refresh', 'Rotate the refresh token', 'Public'],
            ['GET', '/api/v1/auth/me', 'Profile, roles, and effective permissions of the session', 'Bearer Token'],
            ['POST', '/api/v1/auth/change-password', 'Change own password (forced on a seeded account)', 'Bearer Token'],
            ['GET/POST', '/api/v1/users', 'List and create staff accounts', 'user:manage'],
            ['POST', '/api/v1/users/{id}/reset-password', 'Reset a password and flag a forced change', 'user:manage'],
            ['GET/POST', '/api/v1/roles', 'List roles with their permissions, create a role', 'role:manage'],
            ['PUT', '/api/v1/roles/{id}/permissions', 'Replace the whole permission set of a role', 'role:manage'],
            ['GET', '/api/v1/audit-logs', 'Read the audit trail', 'audit:read'],
            ['GET', '/api/v1/audit-logs/verify', 'Verify the integrity of the audit hash-chain', 'audit:read'],
          ]
        },
        {
          category: 'Patient & Encounter',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET/POST', '/api/v1/patients', 'Patient registry — list with masked NIK, register a new patient', 'patient:read / patient:write'],
            ['GET/POST', '/api/v1/encounters', 'Daily queue of encounters; register outpatient, ED, or inpatient', 'encounter:read / encounter:write'],
            ['POST', '/api/v1/encounters/{id}/check-in', 'Check in a booked outpatient', 'encounter:write'],
            ['POST', '/api/v1/encounters/{id}/triage', 'ED triage level and arrival assessment', 'encounter:care'],
            ['POST', '/api/v1/encounters/{id}/start', 'Start the service (emergency-first rule applies)', 'encounter:care'],
            ['POST', '/api/v1/encounters/{id}/transfer', 'Move an inpatient between rooms or beds', 'encounter:care'],
            ['PUT', '/api/v1/encounters/{id}/coverage', 'Change the payer (self-pay, BPJS, insurance)', 'encounter:write'],
            ['POST', '/api/v1/encounters/kiosk/check-in', 'Kiosk: check in against today\'s booking', 'encounter:kiosk'],
            ['POST', '/api/v1/encounters/kiosk/register', 'Kiosk: self-registration for a returning patient', 'encounter:kiosk'],
            ['GET/POST', '/api/v1/patients/{id}/allergies', 'Patient allergies, including an explicit "no known allergy"', 'allergy:read / allergy:write'],
          ]
        },
        {
          category: 'Clinical Records (append-only)',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['POST', '/api/v1/clinical/encounters/{id}/vitals', 'Record vital signs', 'clinical:write'],
            ['POST', '/api/v1/clinical/encounters/{id}/physical-exams', 'Physical assessment across 28 sections with a body map', 'clinical:examine'],
            ['POST', '/api/v1/clinical/encounters/{id}/notes', 'Write a SOAP progress note (CPPT)', 'clinical:write'],
            ['POST', '/api/v1/clinical/notes/{id}/amend', 'Correct a note — a new superseding row, never an edit', 'clinical:write'],
            ['POST', '/api/v1/clinical/notes/{id}/verify', 'Verification by the attending physician (DPJP)', 'clinical:sign'],
            ['POST', '/api/v1/clinical/encounters/{id}/diagnoses', 'Record an ICD-10 diagnosis', 'clinical:diagnose'],
            ['POST', '/api/v1/clinical/encounters/{id}/resume/sign', 'Sign the medical resume (identity copied at signing time)', 'clinical:sign'],
            ['POST', '/api/v1/clinical/icd10/import', 'Import the ICD-10 master from a CSV file', 'clinical:manage'],
            ['POST', '/api/v1/documents', 'Upload a document to object storage', 'document:write'],
            ['GET', '/api/v1/documents/{id}/download-url', 'Short-lived signed download URL', 'document:read'],
          ]
        },
        {
          category: 'Queue & Scheduling',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET/POST', '/api/v1/queues/services', 'Queue service master (prefix, quota, clinic)', 'queue:read / queue:manage'],
            ['POST', '/api/v1/queues/desks/{id}/call-next', 'Call the next ticket to a desk', 'queue:operate'],
            ['POST', '/api/v1/queues/tickets/{id}/recall', 'Announce a ticket again', 'queue:operate'],
            ['POST', '/api/v1/queues/tickets/{id}/skip', 'Skip a ticket when the patient is absent', 'queue:operate'],
            ['PUT', '/api/v1/queues/tickets/{id}/priority', 'Raise priority (elderly, disability, emergency)', 'queue:operate'],
            ['POST', '/api/v1/queues/kiosk/tickets', 'Issue a ticket from the self-service kiosk', 'queue:kiosk'],
            ['GET', '/api/v1/queues/display', 'Board content for the waiting-room screen', 'queue:display'],
            ['GET', '/api/v1/schedules/availability', 'Doctors practising in a clinic on a given date', 'schedule:read'],
            ['POST', '/api/v1/schedules/sessions/{id}/cancellations', 'Cancel a practice session on one date', 'schedule:manage'],
          ]
        },
        {
          category: 'Laboratory & Radiology',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET/POST', '/api/v1/lab/orders', 'Lab order queue; create an order from an encounter', 'lab:read / lab:order'],
            ['POST', '/api/v1/lab/orders/{id}/collect', 'Record sample collection', 'lab:process'],
            ['PUT', '/api/v1/lab/orders/{id}/results', 'Enter results against the test reference range', 'lab:process'],
            ['POST', '/api/v1/lab/orders/{id}/acknowledge-critical', 'Critical-value read-back confirmation', 'lab:process'],
            ['POST', '/api/v1/lab/orders/{id}/verify', 'Verify and release the result', 'lab:verify'],
            ['GET/POST', '/api/v1/radiology/orders', 'Radiology order queue; create an order', 'radiology:read / radiology:order'],
            ['POST', '/api/v1/radiology/orders/{id}/perform', 'Record that the examination was performed', 'radiology:process'],
            ['PUT', '/api/v1/radiology/orders/{id}/reports', 'Submit the radiologist reading', 'radiology:report'],
            ['POST', '/api/v1/radiology/orders/{id}/verify', 'Verify and release the reading', 'radiology:verify'],
          ]
        },
        {
          category: 'Pharmacy (stock ledger)',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET/POST', '/api/v1/pharmacy/medications', 'Medication master with unit pricing', 'pharmacy:read / pharmacy:manage'],
            ['GET', '/api/v1/pharmacy/stock', 'Stock summary per medication', 'pharmacy:read'],
            ['GET', '/api/v1/pharmacy/stock/batches', 'Batches and balances of one medication', 'pharmacy:read'],
            ['POST', '/api/v1/pharmacy/stock/receipts', 'Receive stock into a batch', 'pharmacy:manage'],
            ['POST', '/api/v1/pharmacy/stock/adjustments', 'Stock-take correction as a ledger entry', 'pharmacy:manage'],
            ['POST', '/api/v1/pharmacy/prescriptions', 'Prescribe — prescriber identity is copied into the document', 'pharmacy:prescribe'],
            ['POST', '/api/v1/pharmacy/prescriptions/{id}/review', 'Pharmacist clinical review (accept, adjust, reject)', 'pharmacy:review'],
            ['POST', '/api/v1/pharmacy/prescriptions/{id}/dispense', 'Dispense and consume batches from the ledger', 'pharmacy:dispense'],
          ]
        },
        {
          category: 'Operating Theatre',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET', '/api/v1/surgery/board', 'Operating-theatre schedule board', 'surgery:read'],
            ['POST', '/api/v1/surgery/cases', 'Request an operation', 'surgery:request'],
            ['POST', '/api/v1/surgery/cases/{id}/schedule', 'Schedule into a room and time slot (clash-excluded in the DB)', 'surgery:schedule'],
            ['POST', '/api/v1/surgery/cases/{id}/consents', 'Record informed consent for the procedure', 'surgery:preop'],
            ['POST', '/api/v1/surgery/cases/{id}/site-marking', 'Record surgical site marking', 'surgery:preop'],
            ['POST', '/api/v1/surgery/cases/{id}/enter', 'Receive the patient into the operating room', 'surgery:receive'],
            ['POST', '/api/v1/surgery/cases/{id}/checklists/{phase}', 'WHO surgical safety checklist per phase', 'surgery:checklist'],
            ['POST', '/api/v1/surgery/cases/{id}/operative-report', 'Operative report — only that case\'s operator may write it', 'surgery:report'],
            ['POST', '/api/v1/surgery/cases/{id}/materials', 'Consume material from central pharmacy stock', 'surgery:nursing'],
            ['GET/POST', '/api/v1/surgery/privileges', 'Clinical privileges: which procedures a surgeon may perform', 'surgery:read / surgery:manage'],
          ]
        },
        {
          category: 'Billing, Cashier & Platform',
          headers: ['Method', 'Endpoint', 'Description', 'Permission'],
          rows: [
            ['GET', '/api/v1/billing/tariffs/resolve', 'Price preview for a service on a given date', 'billing:read'],
            ['POST', '/api/v1/billing/tariffs', 'Publish a tariff version with a validity window', 'billing:tariff'],
            ['POST', '/api/v1/billing/encounters/{id}/bill/sync', 'Pull charges from pharmacy, lab, radiology, and surgery', 'billing:charge'],
            ['POST', '/api/v1/billing/bill-lines/{id}/reverse', 'Reverse a charge with a reversal line, never a delete', 'billing:charge'],
            ['POST', '/api/v1/billing/bills/{id}/finalize', 'Finalize the bill (totals recomputed from lines)', 'billing:finalize'],
            ['POST', '/api/v1/billing/cashier-shifts', 'Open a cashier shift', 'billing:pay'],
            ['POST', '/api/v1/billing/bills/{id}/payments', 'Take a payment and issue a receipt', 'billing:pay'],
            ['POST', '/api/v1/billing/payments/{id}/void', 'Void a payment within the open shift', 'billing:void'],
            ['GET', '/api/v1/analytics/admin/dashboard', 'Aggregated figures for the administrator dashboard', 'analytics:read'],
            ['POST', '/api/v1/realtime/subscription-token', 'Per-channel subscription token for Centrifugo', 'Bearer Token'],
            ['GET', '/healthz · /readyz', 'Liveness and readiness probes for the load balancer', 'Public'],
          ]
        }
      ],
      roles: [
        { role: 'Administrator', code: 'admin', capabilities: 'Platform owner: accounts, roles and the permission matrix, settings, ICD-10 master, analytics, audit trail verification.' },
        { role: 'Admisi', code: 'registrar', capabilities: 'Patient registry and encounter registration, check-in, coverage, queue desks and tickets.' },
        { role: 'Dokter', code: 'doctor', capabilities: 'Clinical writing: vitals, physical exam, SOAP notes, ICD-10 diagnoses, orders, prescriptions. Signing and verification only for the encounter where they are DPJP.' },
        { role: 'Perawat', code: 'nurse', capabilities: 'Triage, vitals, nursing documentation, bed transfers and housekeeping states, intra-operative nursing records.' },
        { role: 'Apoteker', code: 'pharmacist', capabilities: 'Prescription review, dispensing against batches, stock receipts and stock-take corrections, medication master.' },
        { role: 'Kasir', code: 'cashier', capabilities: 'Cashier shifts, payments and refunds, receipts; voiding stays inside the open shift.' },
        { role: 'Koder / Casemix', code: 'coder', capabilities: 'Reads clinical records for coding and claim preparation without clinical write access.' },
        { role: 'Analis Laboratorium', code: 'lab_analyst', capabilities: 'Sample collection, result entry, critical-value read-back.' },
        { role: 'Dokter Patologi Klinik', code: 'pathologist', capabilities: 'Verifies and releases laboratory results.' },
        { role: 'Radiografer', code: 'radiographer', capabilities: 'Performs radiology examinations and hands images over for reading.' },
        { role: 'Dokter Spesialis Radiologi', code: 'radiologist', capabilities: 'Writes and verifies radiology readings.' },
        { role: 'Koordinator Kamar Operasi', code: 'surgery_coordinator', capabilities: 'Operating-theatre scheduling, room and procedure master, granting and revoking clinical privileges.' },
        { role: 'Anjungan Mandiri (device)', code: 'kiosk', capabilities: 'Device account with deliberately narrow permissions: issue tickets, look up a booking, self check-in. Cannot read other patients or encounters.' },
        { role: 'Monitor Antrean (device)', code: 'queue_display', capabilities: 'Device account limited to reading the queue board for the waiting-room screen.' }
      ],
      colors: [
        { token: 'go-cyan', hex: '#00ADD8', usage: 'Go 1.27 runtime badge' },
        { token: 'postgres-blue', hex: '#336791', usage: 'PostgreSQL 16 — one schema per feature, integrity in the database' },
        { token: 'redis-crimson', hex: '#DC382D', usage: 'Redis cache, rate limiting, and login attempt lockouts' },
        { token: 'minio-red', hex: '#C72E49', usage: 'MinIO object storage for signed clinical documents' },
        { token: 'openapi-green', hex: '#85EA2D', usage: 'swaggo / OpenAPI contract rendered through Scalar' },
        { token: 'docker-blue', hex: '#2496ED', usage: 'Docker Compose stack: API, PostgreSQL, Redis, MinIO, Centrifugo' },
        { token: 'sentry-purple', hex: '#362D59', usage: 'Sentry error monitoring (IDs only, never patient data)' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Go `1.27+` and Docker for the infrastructure (PostgreSQL 16, Redis, MinIO, and Centrifugo for real-time).'
        },
        {
          title: 'Infrastructure & Migrations',
          description: 'Dependencies run in containers while the API runs on the host, so a rebuild is just a restart.',
          code: `# Configuration
cp .env.example .env

# PostgreSQL, MinIO, and Redis
make deps

# Apply the 35 embedded migrations
make migrate-up

# Run the API on the host (go run)
make run

# Optional: Centrifugo for real-time channels
make realtime-up`
        },
        {
          title: 'API Documentation',
          description: 'Swagger annotations are generated, never hand-edited. With the server running, the reference is at `/scalar` and the raw spec at `/swagger/doc.json`.',
          code: `# Regenerate docs/docs.go, swagger.json, swagger.yaml
make swag`
        },
        {
          title: 'Definition of Done',
          steps: [
            { name: 'Format', cmd: 'gofmt -l cmd internal' },
            { name: 'Static Analysis', cmd: 'go vet ./... && go vet -tags=integration ./...' },
            { name: 'Unit Tests', cmd: 'go test -race -count=1 ./...' },
            { name: 'Coverage', cmd: 'make cover' },
            { name: 'Regenerate Swagger', cmd: 'make swag' }
          ]
        },
        {
          title: 'Integration Tests',
          description: 'Repository tests run against a real PostgreSQL. Run the packages you changed and the packages that depend on them — changing pharmacy also means running billing, surgery, encounter, rbac, and cmd/server.',
          code: `set -a; . ./.env; set +a
TEST_DATABASE_URL="$DATABASE_URL" \\
  go test -p 2 -race -count=1 -tags integration ./internal/features/<feature>`
        }
      ]
    }
  },
  {
    slug: 'blueradar',
    title: 'BlueRadar — BLE Proximity Tracker',
    description: 'A production-grade Android application engineered with Kotlin, Jetpack Compose, and Clean Architecture for Goodeva Technology study case. Features real-time Bluetooth Low Energy (BLE) scanning, an interactive 360° circular radar proximity visualizer, log-distance path loss distance estimation, and local persistence with Room database.',
    image: '/projects/blueradar.webp',
    category: 'Mobile',
    tech: [
      <SiKotlin key="kotlin" />,
      <SiAndroid key="android" />,
      <SiBluetooth key="bluetooth" />,
      <SiSqlite key="room" />,
      <SiGradle key="gradle" />,
    ],
    link: '/projects/blueradar',
    github: 'https://github.com/tetraxion/blueradar_kotlin',
    details: {
      techStack: [
        { layer: 'Language', tool: 'Kotlin 2.1.0' },
        { layer: 'UI Framework', tool: 'Jetpack Compose 1.8.0 + Material3' },
        { layer: 'Architecture', tool: 'Clean Architecture + MVVM' },
        { layer: 'Dependency Injection', tool: 'Dagger Hilt 2.54' },
        { layer: 'Local Database', tool: 'Room Database 2.7.0 (SQLite) + Coroutine Flow' },
        { layer: 'Async & Concurrency', tool: 'Kotlin Coroutines + StateFlow / callbackFlow' },
        { layer: 'BLE Engine', tool: 'Android Bluetooth Low Energy API' },
        { layer: 'Navigation', tool: 'Jetpack Navigation Compose 2.9.0' },
        { layer: 'Permissions', tool: 'Accompanist Permissions 0.36.0' },
        { layer: 'Build System', tool: 'Gradle 8.11.1 + AGP 8.8.2 (Target SDK 36)' },
      ],
      structure: `com.example.blueradar/
├── data/
│   ├── ble/                          # BLE implementation (BleManager, BleScanner, BluetoothStateReceiver)
│   ├── local/                        # Room persistence (AppDatabase, DeviceDao, DeviceEntity)
│   └── repository/                   # BleRepositoryImpl, DeviceRepositoryImpl
├── domain/
│   ├── model/                        # BleDevice data class, SignalCategory enum
│   └── repository/                   # BleRepository, DeviceRepository interfaces
├── di/                               # Hilt dependency injection modules (AppModule, BleModule)
├── util/                             # Log-Distance RSSI model, SystemSettingsHelper
└── ui/
    ├── navigation/                   # AppNavHost (5 routes), Screen sealed class
    ├── screen/
    │   ├── dashboard/                # Real-time scanner, device cards, filters & search
    │   ├── radar/                    # 360° Canvas-based radar proximity visualizer
    │   ├── history/                  # Persistent database logs, CSV & JSON data export
    │   ├── detail/                   # Single device telemetry & signal history graph
    │   └── splash/                   # App initialization & permission readiness
    ├── components/                   # BlueRadarAppBar, BottomNavBar, SystemStatusActions
    └── theme/                        # Material3 Color, Typography, and Theme system`,
      routes: [
        {
          category: 'Jetpack Compose Screens',
          headers: ['Screen', 'Route', 'Key Capabilities'],
          rows: [
            ['DashboardScreen', 'Screen.Dashboard', 'Real-time BLE scanner (auto-refresh 300ms), search by Name/MAC, RSSI range slider (-100 to -30 dBm), signal badges'],
            ['RadarScreen', 'Screen.Radar', '360° Canvas radar visualizer with continuous rotating sweep cone, concentric distance rings (5m, 10m, 15m, 20m), range filters'],
            ['HistoryScreen', 'Screen.History', 'Room DB persistent device logs, first/last seen timestamps, scan frequency counter, CSV & JSON export with preview'],
            ['DeviceDetailScreen', 'Screen.Detail', 'Target device real-time RSSI monitoring graph, connection stability indicator, re-track shortcut'],
            ['SplashScreen', 'Screen.Splash', 'App startup flow with Bluetooth adapter check & runtime permissions rationale'],
          ]
        }
      ],
      roles: [
        { role: 'Field Operator / Scanner', code: 'mobile_user', capabilities: 'Scan nearby BLE peripherals, monitor real-time RSSI signal strengths, track targets on 360° radar, export session history to CSV/JSON.' },
        { role: 'BLE Peripheral / Beacon', code: 'advertiser', capabilities: 'Broadcasts advertising packets (UUID, MAC address, TxPower) detected by scanner engine.' }
      ],
      colors: [
        { token: 'radar-cyan', hex: '#00E5FF', usage: 'Radar sweep line, live tracking blips, and active scanner state' },
        { token: 'signal-green', hex: '#22C55E', usage: 'Strong signal indicator (>= -60 dBm, distance < 1m)' },
        { token: 'signal-amber', hex: '#F59E0B', usage: 'Moderate signal indicator (-60 to -75 dBm, distance 1-5m)' },
        { token: 'signal-red', hex: '#EF4444', usage: 'Weak signal indicator (< -75 dBm, distance > 5m)' },
        { token: 'dark-surface', hex: '#0F172A', usage: 'Radar dark viewport background and elevation cards' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Android Studio (Ladybug / Meerkat recommended), JDK 11+, and an Android 8.0+ (API 26+) physical device with Bluetooth enabled.'
        },
        {
          title: 'Clone & Build',
          code: `# Clone repository
git clone https://github.com/tetraxion/blueradar_kotlin.git
cd blueradar_kotlin

# Build debug APK
./gradlew assembleDebug

# Output APK location:
# app/build/outputs/apk/debug/app-debug.apk`
        },
        {
          title: 'Install to Physical Device',
          code: `# Ensure device connected via adb
adb devices

# Install debug build directly
./gradlew installDebug`
        }
      ]
    }
  },
  {
    slug: 'velostock',
    title: 'VeloStock — Frontend',
    description: 'A web-based inventory management application built with Vue 3 + Vite. VeloStock facilitates inventory stock tracking, activity audits, and multi-role access control for small to medium-sized businesses.',
    image: '/projects/velostock.webp',
    category: 'Web',
    tech: [
      <SiVuedotjs key="vue" />,
      <SiVite key="vite" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiAxios key="axios" />,
      <SiPrimevue key="primevue" />,
      <SiVitest key="vitest" />,
      <SiDocker key="docker" />,
    ],
    link: '/projects/velostock',
    github: 'https://github.com/tetraxion/Front_Velostock',
    website: 'https://front-velostock-be83.vercel.app/',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Vue 3 (Composition API)' },
        { layer: 'Build Tool', tool: 'Vite 8' },
        { layer: 'Language', tool: 'TypeScript' },
        { layer: 'Styling', tool: 'Tailwind CSS v4' },
        { layer: 'State Management', tool: 'Pinia + pinia-plugin-persistedstate' },
        { layer: 'Routing', tool: 'Vue Router v5' },
        { layer: 'HTTP Client', tool: 'Axios' },
        { layer: 'UI Components', tool: 'PrimeVue 4 + PrimeIcons 7' },
        { layer: 'Linter', tool: 'ESLint + OxLint' },
        { layer: 'Formatter', tool: 'Prettier' },
        { layer: 'Unit Test', tool: 'Vitest' },
        { layer: 'E2E Test', tool: 'Playwright' },
      ],
      structure: `src/
├── api/              # Axios instance & endpoint functions (auth, inventory)
├── assets/           # CSS global, gambar (logo, banner)
├── components/
│   ├── common/       # Komponen reusable (AppButton, AppInput, AppToast, dll.)
│   ├── dashboard/    # Komponen area dashboard (Sidebar, TopBar, StatsCard, dll.)
│   └── public/       # Komponen halaman publik (Navbar, Footer, RevealWrapper, dll.)
├── composables/      # Custom hooks (useDebounce, useFormatter, useReveal, useToast)
├── layouts/          # Layout wrapper (DefaultLayout, DashboardLayout)
├── router/           # Konfigurasi rute + navigation guards
├── stores/           # Pinia stores (auth, inventory)
├── types/            # TypeScript interfaces & types
└── views/
    ├── auth/         # LoginPage
    ├── dashboard/    # InventoryListing, ItemDetail, ItemForm, AuditLog, UserManagement
    └── public/       # LandingPage, FeaturesPage, AboutPage, PricingPage, ContactPage`,
      routes: [
        {
          category: 'Public Routes',
          headers: ['Path', 'Name', 'Description'],
          rows: [
            ['/', 'landing', 'Main landing page'],
            ['/features', 'features', 'Interactive feature showcase'],
            ['/about', 'about', 'About VeloStock'],
            ['/pricing', 'pricing', 'Pricing plans'],
            ['/contact', 'contact', 'Contact form'],
            ['/portal/login', 'login', 'Login page (Guest only)'],
          ]
        },
        {
          category: 'Dashboard Routes (Requires Auth)',
          headers: ['Path', 'Name', 'Allowed Roles'],
          rows: [
            ['/dashboard/inventory', 'inventory', 'All roles'],
            ['/dashboard/inventory/new', 'inventory-new', 'Admin Only'],
            ['/dashboard/inventory/:id', 'inventory-detail', 'All roles'],
            ['/dashboard/inventory/:id/edit', 'inventory-edit', 'Admin Only'],
            ['/dashboard/staff', 'staff', 'Admin Only'],
            ['/dashboard/audit-log', 'audit-log', 'Admin Only'],
          ]
        }
      ],
      roles: [
        { role: 'Admin Utama', code: 'admin_utama', capabilities: 'Full Access — CRUD inventory, staff management, audit log access' },
        { role: 'Staff Gudang', code: 'staff_gudang', capabilities: 'Inventory viewing & item details, no edit/delete capabilities, no audit log access' }
      ],
      colors: [
        { token: 'forest-green', hex: '#0A4224', usage: 'Hero backgrounds, main heading texts' },
        { token: 'vibrant-jade', hex: '#1E8449', usage: 'Primary CTA buttons, interactive accents' },
        { token: 'lime-green', hex: '#2ECC71', usage: 'Highlights, badges, pulse animations' },
        { token: 'slate-mint', hex: '#F4F9F5', usage: 'Alternating section backgrounds' },
        { token: 'obsidian-charcoal', hex: '#2C3E50', usage: 'Default body text color' },
        { token: 'muted-gray', hex: '#637381', usage: 'Secondary texts, placeholders' },
        { token: 'warning-amber', hex: '#F39C12', usage: 'Low stock alerts & badges' },
        { token: 'danger-crimson', hex: '#E74C3C', usage: 'Out of stock alerts, error states' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Node.js version `^22.18.0` or `>=24.12.0` and npm package manager.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone repository
git clone https://github.com/tetraxion/Front_Velostock.git

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env`
        },
        {
          title: 'Development & Build Commands',
          steps: [
            { name: 'Run Dev Server', cmd: 'npm run dev' },
            { name: 'Build Production', cmd: 'npm run build' },
            { name: 'Preview Build', cmd: 'npm run preview' },
            { name: 'Type Check', cmd: 'npm run type-check' },
            { name: 'Lint & Auto-fix', cmd: 'npm run lint' },
            { name: 'Format Code', cmd: 'npm run format' }
          ]
        },
        {
          title: 'Testing Suite',
          code: `# Run Unit Tests (Vitest)
npm run test:unit

# Install Playwright browser engines (first-time only)
npx playwright install

# Run E2E Tests (Playwright)
npm run test:e2e

# Run E2E in debug mode
npm run test:e2e -- --debug`
        },
        {
          title: 'Docker Deployment',
          code: `# Run container locally
docker-compose up --build

# Note: Nginx is configured inside docker/nginx.conf to handle routing fallback to index.html for Single Page Applications (SPA).`
        }
      ]
    }
  },
  {
    slug: 'velostock-backend',
    title: 'VeloStock — Backend (Golang)',
    description: 'A robust RESTful API built with Go (Golang) and native HTTP routing (Go 1.22+). Features clean architecture, database migrations, security controls (JWT authentication, bcrypt hashing, rate limiting/login attempt lockouts), structured logging, and Docker Compose orchestration.',
    image: '/projects/back_velostock.webp',
    category: 'Backend',
    tech: [
      <SiGo key="go" />,
      <SiPostgresql key="postgres" />,
      <SiDocker key="docker" />,
    ],
    link: '/projects/velostock-backend',
    github: 'https://github.com/tetraxion/Back_Velostock',
    details: {
      techStack: [
        { layer: 'Language', tool: 'Go (Golang 1.26)' },
        { layer: 'Router / HTTP', tool: 'Native net/http (Go 1.22+ routing)' },
        { layer: 'Database Client', tool: 'Standard SQL library + lib/pq driver' },
        { layer: 'Authentication', tool: 'JWT (golang-jwt/jwt/v5)' },
        { layer: 'Hashing', tool: 'Bcrypt (golang.org/x/crypto/bcrypt)' },
        { layer: 'ID Generator', tool: 'UUID (google/uuid)' },
        { layer: 'Logging', tool: 'Structured Logging (log/slog)' },
        { layer: 'Database', tool: 'PostgreSQL 16' },
        { layer: 'Containerization', tool: 'Docker + Docker Compose' }
      ],
      structure: `backend/
├── cmd/
│   └── server/
│       └── main.go                  # App entrypoint & dependency injection wiring
├── internal/
│   ├── delivery/
│   │   └── http/
│   │       ├── handler/             # HTTP Route Handlers (Auth, Item, User, Audit Log)
│   │       ├── middleware/          # JWT Auth, Role Guard, Recovery middleware
│   │       └── router.go            # Mux router initialization & endpoint mapping
│   ├── domain/                      # Domain Layer (Models, interfaces)
│   ├── repository/
│   │   └── postgres/                # Postgres repository implementations
│   └── usecase/                     # Usecase / Business logic layer (Auth, Item, User, Audit Log)
├── migrations/                      # PostgreSQL DDL migrations scripts (User, Items, Audit, Login)
├── pkg/
│   ├── config/                      # Environment configuration loading
│   ├── response/                    # Standardized HTTP JSON API response helper
│   └── token/                       # JWT token management wrapper
├── Dockerfile                       # Go builder & runner multistage container configuration
└── docker-compose.yml               # Backend service + PostgreSQL alpine service container orchestration`,
      routes: [
        {
          category: 'Public Endpoints',
          headers: ['Method', 'Endpoint', 'Description', 'Response'],
          rows: [
            ['GET', '/api/health', 'System health status validation', '200 OK'],
            ['POST', '/api/auth/login', 'Authenticates user and returns JWT token & cookie', '200 OK / 400 Bad Request / 401 Unauthorized'],
            ['POST', '/api/contact', 'Mock contact submission form', '200 OK'],
          ]
        },
        {
          category: 'Authenticated Endpoints (All Roles)',
          headers: ['Method', 'Endpoint', 'Description', 'Authorization'],
          rows: [
            ['POST', '/api/auth/logout', 'Revokes active JWT session', 'Bearer Token'],
            ['GET', '/api/items', 'List inventory items (supports filters)', 'Bearer Token'],
            ['GET', '/api/items/{id}', 'Get details of a specific item', 'Bearer Token'],
            ['GET', '/api/inventory', 'Alias for /api/items', 'Bearer Token'],
            ['GET', '/api/inventory/{id}', 'Alias for /api/items/{id}', 'Bearer Token'],
            ['GET', '/api/inventory/categories', 'List unique items categories', 'Bearer Token'],
          ]
        },
        {
          category: 'Admin-Only Endpoints (admin_utama)',
          headers: ['Method', 'Endpoint', 'Description', 'Authorization'],
          rows: [
            ['POST', '/api/items', 'Create new inventory item', 'Bearer Token + Admin Guard'],
            ['PUT', '/api/items/{id}', 'Update existing inventory item details', 'Bearer Token + Admin Guard'],
            ['DELETE', '/api/items/{id}', 'Delete inventory item permanently', 'Bearer Token + Admin Guard'],
            ['POST', '/api/users', 'Register new staff/admin user profile', 'Bearer Token + Admin Guard'],
            ['GET', '/api/audit-logs', 'List system activities history audit logs', 'Bearer Token + Admin Guard'],
            ['POST', '/api/inventory', 'Alias for POST /api/items', 'Bearer Token + Admin Guard'],
            ['PUT', '/api/inventory/{id}', 'Alias for PUT /api/items/{id}', 'Bearer Token + Admin Guard'],
            ['DELETE', '/api/inventory/{id}', 'Alias for DELETE /api/items/{id}', 'Bearer Token + Admin Guard'],
            ['GET', '/api/staff', 'List all staff credentials', 'Bearer Token + Admin Guard'],
            ['POST', '/api/staff', 'Alias for registering staff', 'Bearer Token + Admin Guard'],
            ['PUT', '/api/staff/{id}', 'Update specific staff profiles', 'Bearer Token + Admin Guard'],
            ['DELETE', '/api/staff/{id}', 'Delete staff user accounts', 'Bearer Token + Admin Guard'],
          ]
        }
      ],
      roles: [
        { role: 'Admin Utama', code: 'admin_utama', capabilities: 'Complete system access: full CRUD on inventory, staff/user profile management, inspect security audit log' },
        { role: 'Staff Gudang', code: 'staff_gudang', capabilities: 'Limited access: view inventory items, check item details, view category stats. Cannot manipulate data.' }
      ],
      colors: [
        { token: 'go-cyan', hex: '#00ADD8', usage: 'Go runtime language badge accent' },
        { token: 'postgres-blue', hex: '#336791', usage: 'PostgreSQL database container tag' },
        { token: 'docker-blue', hex: '#2496ED', usage: 'Docker Compose orchestration container' },
        { token: 'jwt-gold', hex: '#D63AFF', usage: 'Security payload JWT token verification indicator' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Go version `^1.22+` (for running bare metal) or Docker Desktop.'
        },
        {
          title: 'Docker Compose Orchestration (Recommended)',
          description: 'Builds API service and starts a healthy PostgreSQL database Alpine container in parallel.',
          code: `# Build and spin up containers\ndocker compose up --build\n\n# Shutdown the container stack and persist volume data\ndocker compose down`
        },
        {
          title: 'Manual Development Run',
          description: 'Run the database using Docker first or provide a custom connection string in .env file.',
          code: `# Setup configuration\ncp .env.example .env\n\n# Run migrations (ensure DB is running and DB_URL is set in .env)\n# The database will automatically initialize schemas from migrations folder when running via Docker.\n# To start the server:\ngo run cmd/server/main.go`
        },
        {
          title: 'Database Seed & Credentials',
          description: 'Upon initial container creation, if the user_profiles table is empty, a default admin credential will be automatically seeded:',
          code: `Email: admin@velostock.com\nPassword: password123`
        }
      ]
    }
  },
  {
    slug: 'anara-website',
    title: 'ANARA - Budget Management Information System',
    description: 'A web-based Budget Management Information System developed for the Deputy of Industry and Investment, Ministry of Tourism of the Republic of Indonesia. ANARA is designed to manage and monitor budgeting data, including DIPA, MAK, and related financial information. The system streamlines data input, maintenance, and reporting processes, ensuring accurate, up-to-date, and well-structured budget information for internal administrative and financial operations.',
    image: '/projects/anara.webp',
    category: 'Web',
    tech: [
      <SiLaravel key="laravel" />, <SiPhp key="php" />, <SiMysql key="mysql" />, <SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key="js" />, <SiBootstrap key="bootstrap" />,
    ],
    link: '/projects/anara-website',
    github: '',
    website: '',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Laravel 12.x' },
        { layer: 'Language', tool: 'PHP 8.2+' },
        { layer: 'Styling', tool: 'Tailwind CSS 3.x' },
        { layer: 'JS Engine', tool: 'Alpine.js 3.x' },
        { layer: 'PDF Renderer', tool: 'DOMPDF' },
        { layer: 'Excel Handler', tool: 'PhpSpreadsheet' },
        { layer: 'Icons', tool: 'Font Awesome 6' },
        { layer: 'Charts', tool: 'Chart.js' },
        { layer: 'Auth', tool: 'Laravel Breeze' },
        { layer: 'Build Tool', tool: 'Vite' },
        { layer: 'Database', tool: 'MySQL / MariaDB' },
        { layer: 'Caching', tool: 'Redis / Memcached' }
      ],
      structure: `ANARA/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── ChatbotController.php   # Chatbot API logic
│   │   │   ├── DashboardController.php
│   │   │   ├── SpjController.php       # SPJ CRUD & auto calculate
│   │   │   ├── SBMController.php       # SBM Rates Management
│   │   │   └── UserController.php      # User profiles & settings
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   │   ├── Spj.php
│   │   ├── SpjDetail.php
│   │   ├── SbmPerjadin.php
│   │   └── User.php
│   └── Helpers/
│       ├── NumberHelper.php
│       └── TerbilangHelper.php
├── resources/
│   ├── views/
│   │   ├── components/
│   │   │   ├── chatbot.blade.php       # Chatbot UI panel
│   │   │   └── sidebar.blade.php
│   │   ├── dashboard.blade.php
│   │   ├── spj/
│   │   ├── sbm/
│   │   └── users/
│   ├── css/
│   └── js/
│       └── chatbot.js                   # Chatbot client-side script
├── routes/
│   ├── web.php                          # Web UI routes
│   └── auth.php                         # Breeze auth routes
└── database/
    ├── migrations/                      # DB migrations
    └── seeders/                         # Master data (provinces, SBM rates)`,
      routes: [
        {
          category: 'Web Interface Routes',
          headers: ['Path', 'Controller Method', 'Description'],
          rows: [
            ['/dashboard', 'DashboardController@index', 'Admin, Superadmin & User Dashboard'],
            ['/spj', 'SpjController@index', 'List SPJ entries'],
            ['/spj/create', 'SpjController@create', 'Wizard Form to create a new SPJ'],
            ['/spj/{id}/edit', 'SpjController@edit', 'Edit specific SPJ (Admin & Creator)'],
            ['/sbm', 'SBMController@index', 'Manage Standard Cost Database (Admin/Superadmin)'],
            ['/users', 'UserController@index', 'Manage PNS & staff profiles (Superadmin)'],
          ]
        },
        {
          category: 'Chatbot & Internal API Routes',
          headers: ['Path', 'Method', 'Security / Use Case'],
          rows: [
            ['/api/chatbot/greeting', 'GET', 'Fetch natural chatbot greetings (self-hosted)'],
            ['/api/chatbot/message', 'POST', 'Process NLP pattern matching query securely on server'],
          ]
        }
      ],
      roles: [
        { role: 'Superadmin', code: 'superadmin', capabilities: 'Full Access — CRUD SPJ, manage users, modify agency parameters, full SBM rates database override, audit trails' },
        { role: 'Admin', code: 'admin', capabilities: 'Manage SPJ, manage standard user accounts, update regional parameters' },
        { role: 'User', code: 'user', capabilities: 'Create and edit their own SPJ, print Official PDFs, view personal dashboard stats' }
      ],
      colors: [
        { token: 'forest-green', hex: '#155C38', usage: 'Primary brand color, sidebar headings, buttons' },
        { token: 'golden-yellow', hex: '#EDAD44', usage: 'Secondary accents, active states, highlights' },
        { token: 'dark-green', hex: '#1A7047', usage: 'CTA hovers, selected item states' },
        { token: 'light-gray', hex: '#F8FAFC', usage: 'App background color' },
        { token: 'slate-charcoal', hex: '#1E293B', usage: 'Default body text and headers' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'PHP >= 8.2, Composer, Node.js & NPM, MySQL, Apache/Nginx web server.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone repository
git clone https://github.com/mahardikaoktvn/anara.git
cd ANARA

# Install dependencies
composer install
npm install

# Setup environment variables
cp .env.example .env
php artisan key:generate`
        },
        {
          title: 'Database Configuration',
          description: 'Configure your DB credentials inside .env, then run:',
          code: `php artisan migrate --seed`
        },
        {
          title: 'Development & Build Commands',
          steps: [
            { name: 'Start PHP server', cmd: 'php artisan serve' },
            { name: 'Vite Dev Server', cmd: 'npm run dev' },
            { name: 'Build Production', cmd: 'npm run build' }
          ]
        },
        {
          title: 'Testing & Formatting Suite',
          code: `# Run all PHPUnit tests
php artisan test

# Format code (PHP CS Fixer)
composer format

# Run JS Linter
npm run lint`
        }
      ]
    }
  },
  {
    slug: 'prime-property-platform',
    title: 'Prime Property - Web Platform & Internal Agent Portal',
    description: 'A high-performance property listing management system built with Next.js and Supabase. Features a mobile-responsive public platform and a secure internal dashboard protected by PostgreSQL Row Level Security (RLS). Includes advanced data tracking with real-time filtering, automatic audit logging via database triggers, and secure session management.',
    image: '/projects/prime_property.webp',
    category: 'Web',
    tech: [
      <SiNextdotjs key="nextjs" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />, <SiSupabase key="supabase" />, <SiPostgresql key="postgres" />,
    ],
    link: '/projects/prime-property-platform',
    github: 'https://github.com/tetraxion/Prime_property.git',
    website: 'https://prime-property-chi.vercel.app/',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Next.js 14.x (App Router)' },
        { layer: 'Language', tool: 'TypeScript 5.x' },
        { layer: 'Styling', tool: 'Tailwind CSS 3.x' },
        { layer: 'UI Library', tool: 'shadcn/ui' },
        { layer: 'Auth', tool: 'Supabase Auth + httpOnly cookie' },
        { layer: 'Database', tool: 'Supabase (PostgreSQL)' },
        { layer: 'Emailer', tool: 'Resend API' },
        { layer: 'Deployment', tool: 'Vercel' }
      ],
      structure: `prime-property/
├── app/
│   ├── (public)/                 # Public pages layout group
│   │   ├── page.tsx              # Landing Page
│   │   ├── about/page.tsx        # About Us
│   │   └── contact/page.tsx      # Contact Us
│   ├── agent/
│   │   └── login/page.tsx        # Agent authentication portal
│   ├── dashboard/
│   │   ├── layout.tsx            # Dashboard shell + authentication check
│   │   ├── listings/
│   │   │   ├── page.tsx          # Real-time tabular inventory listing
│   │   │   ├── new/page.tsx      # Add a new listing form
│   │   │   └── [id]/
│   │   │       ├── page.tsx      # Property detailed profile
│   │   │       └── edit/page.tsx # Edit property details form
│   │   ├── users/page.tsx        # Superadmin agent user management
│   │   └── audit-log/page.tsx    # System change log history
│   └── api/                      # Backend route handlers (Auth, properties, contact)
├── components/
│   ├── ui/                       # shadcn/ui shared primitives (BaseButton, BaseCard)
│   ├── public/                   # Public components (header, footer, FloatingWhatsApp)
│   └── dashboard/                # Internal dashboard widgets
├── lib/
│   ├── supabase/                 # Database clients (client, server, middleware)
│   ├── validations/              # Zod schema definitions
│   └── utils.ts
└── supabase/
    ├── migrations/               # PostgreSQL schema migrations & RLS policies
    └── seed.sql                  # 50+ pre-filled properties dummy dataset`,
      routes: [
        {
          category: 'Public Routes',
          headers: ['Path', 'Layout', 'Access Level'],
          rows: [
            ['/', 'PublicLayout', 'Public - Guest only'],
            ['/about', 'PublicLayout', 'Public - Guest only'],
            ['/contact', 'PublicLayout', 'Public - Guest only'],
          ]
        },
        {
          category: 'Internal Agent Portal (Requires Auth)',
          headers: ['Path', 'Layout', 'Access Control Level'],
          rows: [
            ['/agent/login', 'PublicLayout', 'Public - Auth Guest only'],
            ['/dashboard', 'DashboardLayout', 'Internal (Redirects to /dashboard/listings)'],
            ['/dashboard/listings', 'DashboardLayout', 'All Agents (Read-Only) / Superadmin (CRUD)'],
            ['/dashboard/listings/new', 'DashboardLayout', 'Superadmin Only'],
            ['/dashboard/listings/:id', 'DashboardLayout', 'All Agents (Read-Only) / Superadmin (CRUD)'],
            ['/dashboard/listings/:id/edit', 'DashboardLayout', 'Superadmin Only'],
            ['/dashboard/users', 'DashboardLayout', 'Superadmin Only'],
            ['/dashboard/audit-log', 'DashboardLayout', 'Superadmin Only'],
          ]
        }
      ],
      roles: [
        { role: 'Superadmin', code: 'superadmin', capabilities: 'Complete administrative access. Full CRUD on properties, manage agent credentials (reset passwords, disable/enable profiles), view detailed audit logs.' },
        { role: 'Admin (Agent)', code: 'admin', capabilities: 'Read-only access to property listings. Can search, filter, and inspect property details. Prevented from mutating data (403 Forbidden).' }
      ],
      colors: [
        { token: 'primary-black', hex: '#1A1A1A', usage: 'Header backgrounds, primary heading text' },
        { token: 'accent-gold', hex: '#C9A961', usage: 'Primary CTAs, highlights, badges, borders' },
        { token: 'accent-red', hex: '#B33A3A', usage: 'Sold out statuses, dangerous actions, error feedback' },
        { token: 'neutral-white', hex: '#FFFFFF', usage: 'Main content panels, cards backgrounds' },
        { token: 'soft-gray', hex: '#F5F5F5', usage: 'Sidebar lists, alternative sections backgrounds' },
        { token: 'whatsapp-green', hex: '#25D366', usage: 'WhatsApp floating button highlight' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Node.js version `18.x` or `20.x` and npm package manager.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone repository
git clone https://github.com/tetraxion/Prime_property.git
cd prime-property

# Install dependencies
npm install

# Setup env variables
cp .env.example .env.local`
        },
        {
          title: 'Database Setup',
          description: 'Configure a local Supabase CLI docker stack or connect to a remote cloud project, then apply migrations and seed data:',
          code: `supabase db reset --remote`
        },
        {
          title: 'Development & Build Commands',
          steps: [
            { name: 'Start development server', cmd: 'npm run dev' },
            { name: 'Build project', cmd: 'npm run build' },
            { name: 'Linter check', cmd: 'npm run lint' }
          ]
        }
      ]
    }
  },
  {
    slug: 'portfolio-theme-neobrutalism',
    title: 'Neo-Brutalism Portfolio Theme',
    description: 'A creative, bold, and high-contrast developer portfolio template built with Next.js, React, and Tailwind CSS. Employs the distinct Neo-Brutalism design style featuring thick black borders, vivid flat colors, and playful hover animations.',
    image: '/projects/Porto_NeoBrutalism.webp',
    category: 'Web',
    tech: [
      <SiNextdotjs key="nextjs" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />, <SiJavascript key="javascript" />,
    ],
    link: '/projects/portfolio-theme-neobrutalism',
    github: 'https://github.com/tetraxion/Portofolio_theme_NeoBrutalism',
    website: 'https://portofolio-theme-neo-brutalism.vercel.app/',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Next.js 14.x' },
        { layer: 'Language', tool: 'TypeScript 5.x' },
        { layer: 'Styling', tool: 'Tailwind CSS 3.x' },
        { layer: 'Animations', tool: 'Framer Motion' },
        { layer: 'Icons', tool: 'Lucide React' }
      ],
      structure: `neobrutalism-porto/
├── app/
│   ├── layout.tsx         # Root layout configuring Geist font
│   ├── page.tsx           # Main landing profile page
│   ├── projects/
│   │   └── page.tsx       # Bold grid of mock projects
│   └── contact/
│       └── page.tsx       # Contact form with flat neo shadow style
├── components/
│   └── ui/
│       ├── button.tsx     # Custom Neobrutalism 4px border buttons
│       └── card.tsx       # Shadow-offset panels
├── lib/
│   └── utils.ts
└── tailwind.config.ts     # Neo-brutalist theme color overrides`,
      routes: [
        {
          category: 'Application Routing paths',
          headers: ['Path', 'Layout Wrapper', 'Visual Highlight'],
          rows: [
            ['/', 'RootLayout', 'Hero layout with high-contrast text and interactive grid'],
            ['/projects', 'RootLayout', 'Featured work tiles with pop-out hovering cards'],
            ['/contact', 'RootLayout', 'Secure text input forms utilizing neo offset styling'],
          ]
        }
      ],
      colors: [
        { token: 'neo-yellow', hex: '#FFE600', usage: 'Primary screen background accents' },
        { token: 'neo-blue', hex: '#0066FF', usage: 'Hover background panels, focus rings' },
        { token: 'neo-pink', hex: '#FF007A', usage: 'Secondary visual highlights, buttons' },
        { token: 'pure-black', hex: '#000000', usage: 'Thick 4px border stroke, text headings' },
        { token: 'pure-white', hex: '#FFFFFF', usage: 'Cards panel base background' }
      ],
      instructions: [
        {
          title: 'Setup & Installation',
          code: `# Clone repository
git clone https://github.com/tetraxion/Portofolio_theme_NeoBrutalism.git
cd Portofolio_theme_NeoBrutalism

# Install dependencies
npm install`
        },
        {
          title: 'Development & Build Commands',
          steps: [
            { name: 'Start development server', cmd: 'npm run dev' },
            { name: 'Build project', cmd: 'npm run build' }
          ]
        }
      ]
    }
  },
  {
    slug: 'task-tracker-api',
    title: 'Task Tracker API - Backend (Golang)',
    description: 'A robust RESTful API built with Go (Golang) and the Gin Gonic framework. Features a clean layered architecture, dual-storage strategy (toggled in-memory and PostgreSQL with pgxpool), automated database migrations, unit tests, and Docker Compose configurations. Fully documented with Postman collections and OpenAPI specifications.',
    image: '/projects/backend_tasksTracker.webp',
    category: 'Backend',
    tech: [
      <SiGo key="go" />, <SiPostgresql key="postgres" />, <SiDocker key="docker" />,
    ],
    link: '/projects/task-tracker-api',
    github: 'https://github.com/tetraxion/backend_test_dwi_lutfi.git',
    details: {
      techStack: [
        { layer: 'Language', tool: 'Go (Golang 1.21+)' },
        { layer: 'HTTP Framework', tool: 'Gin Gonic 1.9.1' },
        { layer: 'CORS Middleware', tool: 'gin-contrib/cors 1.5.0' },
        { layer: 'DB Connection Pool', tool: 'pgx/v5 (5.6.0)' },
        { layer: 'UUID Generator', tool: 'google/uuid 1.6.0' },
        { layer: 'Database', tool: 'PostgreSQL 16' },
        { layer: 'Containerization', tool: 'Docker + Docker Compose' }
      ],
      structure: `backend/
├── model/                            # Domain layer
│   └── task.go                       # Struct models, requests, response definitions
├── repository/                       # Data layer
│   ├── task_repository.go            # Thread-safe in-memory mock repository
│   ├── postgres_task_repository.go   # PostgreSQL client query handler
│   └── task_repository_test.go
├── handler/                          # Presentation layer
│   ├── task_handler.go               # HTTP routes endpoint controller
│   └── task_handler_test.go          # Unit tests for HTTP controllers using mocks
├── db/                               # Infrastructure layer
│   └── migrate.go                    # Schema pool initiator & migration scripts
├── docs/
│   └── openapi.yaml                  # Swagger 3.0 API specifications docs
└── main.go                           # App entrypoint & dependency injection wiring`,
      routes: [
        {
          category: 'REST Endpoints (Base URL: /api/v1)',
          headers: ['Method', 'Endpoint', 'Description', 'Expected Code'],
          rows: [
            ['GET', '/tasks', 'Retrieve list of all tasks (newest first)', '200 OK'],
            ['GET', '/tasks/:id', 'Retrieve detailed attributes of a task', '200 OK, 404 Not Found'],
            ['POST', '/tasks', 'Create a new task (validates title/description)', '201 Created, 400 Bad Request'],
            ['PATCH', '/tasks/:id/status', 'Update task completion state (backlog/in_progress/done)', '200 OK, 400, 404'],
            ['DELETE', '/tasks/:id', 'Remove task permanently from database', '200 OK, 404 Not Found'],
            ['GET', '/health', 'System health status validation', '200 OK'],
          ]
        }
      ],
      roles: [
        { role: 'API Client', code: 'stateless', capabilities: 'Stateless access to CRUD tasks. Parallel requests handled securely via pgx connection pool and mutex read-write locks.' }
      ],
      colors: [
        { token: 'go-cyan', hex: '#00ADD8', usage: 'Go programming brand color' },
        { token: 'postgres-blue', hex: '#4169E1', usage: 'Database engine visual tags' },
        { token: 'docker-blue', hex: '#2496ED', usage: 'Docker configurations indicators' },
        { token: 'success-emerald', hex: '#10B981', usage: 'Server health check green indicator' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Go 1.21+ (for local runs) and Docker Desktop (for Compose setup).'
        },
        {
          title: 'Option A: Docker Compose Setup (Recommended)',
          description: 'Runs PostgreSQL and the Go backend automatically in parallel.',
          code: `# Run stack
docker compose up --build

# Stop stack
docker compose down`
        },
        {
          title: 'Option B: Run locally (In-Memory)',
          description: 'Runs backend without requiring PostgreSQL database configurations.',
          code: `go mod tidy
go run main.go`
        },
        {
          title: 'Option C: Run locally with PostgreSQL Docker',
          code: `# 1. Start Postgres container
docker run -d --name task-pg -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tasktracker -p 5433:5432 postgres:16-alpine

# 2. Run backend in Postgres mode
USE_POSTGRES=true DB_PORT=5433 go run main.go`
        },
        {
          title: 'Testing Suite commands',
          code: `# Run all tests
go test ./...

# Run verbose with coverage report
go test ./... -coverprofile=coverage.out
go tool cover -html=coverage.out`
        }
      ]
    }
  },
  {
    slug: 'sparkling',
    title: 'Sparkling Kids - Mobile Learning Hub',
    description: 'A mobile learning hub application built with Flutter (using GetX) for children to discover and enroll in classes based on their talents and interests. This app is powered by a custom backend API built with Laravel and MySQL.',
    image: '/projects/sparkling.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiLaravel key="laravel" />, <SiMysql key="mysql" />, <SiGetx key="getx" />,
    ],
    link: '/projects/sparkling',
    github: '',
    playstore: 'https://play.google.com/store/apps/details?id=com.solae.sparkling.id&hl=en-US',
    appstore: 'https://apps.apple.com/au/app/sparkling-kids/id6756943374',
    details: {
      techStack: [
        { layer: 'Frontend SDK', tool: 'Flutter (SDK ^3.8.1)' },
        { layer: 'Language', tool: 'Dart' },
        { layer: 'State / Routing', tool: 'GetX ^4.7.2' },
        { layer: 'HTTP Client', tool: 'Dio ^5.9.0' },
        { layer: 'Animations', tool: 'Rive ^0.13.0 & Simple Animations' },
        { layer: 'Storage', tool: 'GetStorage ^2.1.1' },
        { layer: 'Push Notification', tool: 'Firebase Messaging ^16.0.4' },
        { layer: 'Auth provider', tool: 'Firebase Auth & Google & Apple Sign-In' },
        { layer: 'Database', tool: 'MySQL' },
        { layer: 'Backend Framework', tool: 'Laravel (REST API)' }
      ],
      structure: `sparkling/
├── lib/
│   ├── app/
│   │   ├── modules/                      # GetX view-controller features
│   │   │   ├── parent/                   # Parent registration & kids stats
│   │   │   ├── child/                    # Child class discovery grids
│   │   │   ├── login/                    # Credential auth forms
│   │   │   └── register/                 # Register screens
│   │   └── routes/
│   │       ├── app_pages.dart            # GetX views mapping
│   │       └── app_routes.dart           # Static screen path definitions
│   ├── common/
│   │   ├── api/                          # Base HTTP API Client (Dio wrapper)
│   │   ├── services/                     # Session cache services
│   │   └── widget/                       # Standard cards, layout shells
│   └── main.dart                         # Flutter initialization entrypoint`,
      routes: [
        {
          category: 'GetX Screen Routes',
          headers: ['Path', 'Target Audience', 'Description'],
          rows: [
            ['/splash', 'All', 'Opening loading animations screen'],
            ['/login', 'All', 'Authentication credentials login screen'],
            ['/main-nav', 'Child', 'Child primary visual dashboard to choose classes'],
            ['/main-nav-parent', 'Parent', 'Parent portal to verify classes, check payments'],
            ['/spark-report', 'Parent', 'Kids performance reports (IQ, EQ, PQ, SQ charts)'],
            ['/subscribe', 'Parent', 'Subscription plans pricing configurations'],
          ]
        }
      ],
      roles: [
        { role: 'Parent', code: 'parent_portal', capabilities: 'Enroll kids in classes, view kids reports charts, manage billing payment profiles, edit kids profiles.' },
        { role: 'Child', code: 'child_dashboard', capabilities: 'Discover class lists, complete class tasks, interact with mascot guides.' }
      ],
      colors: [
        { token: 'lumi-blue (IQ)', hex: '#3B82F6', usage: 'IQ development metrics cards' },
        { token: 'emo-pink (EQ)', hex: '#EC4899', usage: 'EQ development metrics cards' },
        { token: 'pico-green (PQ)', hex: '#10B981', usage: 'PQ development metrics cards' },
        { token: 'sora-yellow (SQ)', hex: '#F59E0B', usage: 'SQ development metrics cards' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Flutter SDK ^3.8.1 installed on system path.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone and tidy dependencies
flutter pub get

# Generate splash screen configurations
flutter pub run flutter_launcher_icons`
        },
        {
          title: 'Build Commands',
          steps: [
            { name: 'Start development on emulator', cmd: 'flutter run' },
            { name: 'Build Android APK', cmd: 'flutter build apk' },
            { name: 'Build iOS bundle', cmd: 'flutter build ios' }
          ]
        }
      ]
    }
  },
  {
    slug: 'floodViser',
    title: 'Dexs Pump - FloodViser IoT Monitoring System',
    description: 'An IoT-based flood monitoring system that utilizes MQTT protocol to collect real-time data from water level sensors. The mobile application, built with Flutter, displays flood information and pump status, while the backend is developed using Laravel and MySQL.',
    image: '/projects/floodviser.webp',
    category: 'IoT',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiMqtt key="mqtt" />, <SiLaravel key="laravel" />, <SiMysql key="mysql" />,
    ],
    link: '/projects/floodViser',
    playstore: 'https://play.google.com/store/apps/details?id=com.floodviser.app&hl=en-US',
    appstore: 'https://apps.apple.com/id/app/flood-viser/id6747161524',
    details: {
      techStack: [
        { layer: 'Frontend SDK', tool: 'Flutter (SDK ^3.7.0)' },
        { layer: 'State Provider', tool: 'Flutter Riverpod ^3.0.0' },
        { layer: 'Notification', tool: 'Firebase Messaging & Local Notifications' },
        { layer: 'Auth Provider', tool: 'Firebase Auth' },
        { layer: 'HTTP Client', tool: 'http Package ^1.3.0' },
        { layer: 'PDF Handler', tool: 'pdfx ^2.9.2' },
        { layer: 'Signature Capture', tool: 'signature ^6.3.0' },
        { layer: 'Backend REST API', tool: 'Laravel + MySQL' },
        { layer: 'IoT Protocol', tool: 'MQTT Client' }
      ],
      structure: `floodviser/
├── lib/
│   ├── api/              # Telemetry payload integration handlers
│   ├── components/       # Custom scroll bars, headers widgets
│   ├── dashboard/        # Real-time water levels graphs & dials screen
│   ├── model/            # Data structure definitions (sensor inputs)
│   ├── profile/          # Alert user thresholds configurations
│   ├── pumps/            # IoT water pumps toggle buttons view
│   ├── riverpod/         # Riverpod providers managing socket connections
│   ├── services/         # Background listener services
│   ├── style/            # Palette layout files
│   └── widget/           # Animated waves, gauges UI`,
      routes: [
        {
          category: 'Application Layout paths',
          headers: ['Path', 'Manager Class', 'Description'],
          rows: [
            ['/login', 'AuthNotifier', 'Secure login form with Firebase credentials'],
            ['/dashboard', 'TelemetryNotifier', 'Live sensor telemetry graphs and meteorological updates'],
            ['/pumps', 'PumpNotifier', 'Direct controls to toggle remote IoT drainage water pumps'],
            ['/profile', 'ProfileNotifier', 'Contact channels and alert threshold configurations'],
          ]
        }
      ],
      roles: [
        { role: 'Field Operator', code: 'operator', capabilities: 'Monitor live water telemetry levels, trigger remote water pumps, adjust alarm thresholds.' },
        { role: 'System Admin', code: 'admin', capabilities: 'Manage user profiles, add new IoT water sensor assets, inspect system connections log logs.' }
      ],
      colors: [
        { token: 'danger-red', hex: '#EF4444', usage: 'Critical flood alerts warning indicator' },
        { token: 'warning-amber', hex: '#F59E0B', usage: 'Moderate alert warning indicator' },
        { token: 'safe-blue', hex: '#3B82F6', usage: 'Normal sensor level indications' },
        { token: 'pump-green', hex: '#10B981', usage: 'Active status indicator for remote pumps' },
        { token: 'card-charcoal', hex: '#1E293B', usage: 'Dashboard base card background panels' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Flutter SDK ^3.7.0 installed locally.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone and clean project dependencies
flutter pub get

# Generate app icons configuration
flutter pub run flutter_launcher_icons`
        },
        {
          title: 'Execution Commands',
          steps: [
            { name: 'Run dev on emulator', cmd: 'flutter run' },
            { name: 'Compile Android release APK', cmd: 'flutter build apk --release' }
          ]
        }
      ]
    }
  },
  {
    slug: 'sidoarjo-superapp',
    title: 'Sidoarjo SuperApp - Integrated Public Services',
    description: 'A SuperApp developed for the Sidoarjo Government, integrating various public services. Features include citizen services, complaints, career information, news, and a local marketplace for MSMEs.',
    image: '/projects/super.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiLaravel key="laravel" />, <SiPostgresql key="postgresql" />, <SiDocker key="docker" />, <SiGetx key="getx" />,
    ],
    link: '/projects/sidoarjo-superapp',
    github: '',
    details: {
      techStack: [
        { layer: 'Frontend SDK', tool: 'Flutter (SDK ^3.7.2)' },
        { layer: 'State / Routes', tool: 'GetX ^4.7.2' },
        { layer: 'HTTP Network', tool: 'Dio ^5.8.0+1' },
        { layer: 'Fonts Family', tool: 'Plus Jakarta Sans' },
        { layer: 'Secure Storage', tool: 'GetStorage & Cookie Jar' },
        { layer: 'Map / GPS Tracker', tool: 'Geolocator & Geocoding' },
        { layer: 'Camera Capture', tool: 'Camera SDK' },
        { layer: 'Shimmer Loader', tool: 'Skeletonizer' },
        { layer: 'QR Engine', tool: 'qr_flutter' }
      ],
      structure: `super_app/
├── lib/
│   ├── app/
│   │   ├── modules/                      # Modular features views
│   │   │   ├── home/                     # Citizen services navigation hub
│   │   │   ├── complaint/                # Photo and GPS upload complaints form
│   │   │   ├── marketplace/              # Local MSMEs store list
│   │   │   └── profile/                  # Citizen digital ID card with QR
│   │   └── routes/
│   │       ├── app_pages.dart            # GetX views registration list
│   │       └── app_routes.dart           # Static screen path definitions
│   ├── components/                       # Shared custom app bars, popups
│   ├── services/                         # Geolocator mapping, local session storage
│   └── main.dart                         # App initialization entrypoint`,
      routes: [
        {
          category: 'GetX Screen Routes',
          headers: ['Path', 'Module Feature', 'Scope & Purpose'],
          rows: [
            ['/home', 'HomeModule', 'Citizen dashboard lists public service grids'],
            ['/complaint', 'ComplaintModule', 'Report issues: snap photo proof and retrieve auto GPS coordinates'],
            ['/profile', 'ProfileModule', 'Displays citizen name, photo, and official citizen identification QR code'],
            ['/marketplace', 'MarketplaceModule', 'Local MSMEs portal to browse catalog and contact sellers'],
          ]
        }
      ],
      roles: [
        { role: 'Citizen', code: 'verified_citizen', capabilities: 'Access civil registry documents, submit complaints with location markers, generate identity QR.' }
      ],
      colors: [
        { token: 'pemkab-blue', hex: '#1D4ED8', usage: 'Primary brand identity header colors' },
        { token: 'accent-gold', hex: '#EAB308', usage: 'Secondary crest details, button outlines' },
        { token: 'success-green', hex: '#22C55E', usage: 'Resolved complaint ticket badges' },
        { token: 'warning-orange', hex: '#F97316', usage: 'In-progress status labels' },
        { token: 'neutral-gray', hex: '#F3F4F6', usage: 'App background color' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Flutter SDK ^3.7.2 installed on system.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone and clean project dependencies
flutter pub get

# Generate app launcher icon configs
flutter pub run flutter_launcher_icons`
        },
        {
          title: 'Execution Commands',
          steps: [
            { name: 'Run dev on emulator', cmd: 'flutter run' },
            { name: 'Build Android APK', cmd: 'flutter build apk' }
          ]
        }
      ]
    }
  },
  {
    slug: 'cineexplore-tmdb',
    title: 'CineExplore — TMDB Client Mobile App',
    description: 'A mobile movie discovery application powered by The Movie Database (TMDB) API. Built with Flutter & Dart, the application provides a modern and responsive user interface to browse trending, popular, top-rated, and upcoming movies and TV shows, complete with watchlists, cast listings, and trailers.',
    image: '/projects/tmdb.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiGetx key="getx" />,
    ],
    link: '/projects/cineexplore-tmdb',
    github: 'https://github.com/tetraxion/tmdb',
  },
  {
    slug: 'cyberguard-awareness',
    title: 'CyberGuard Awareness — Website Security Auditing & Vulnerability Scanner',
    description: 'A web-based security auditing platform that orchestrates passive fingerprinting, active network fuzzing, and vulnerability scanning. Powered by Laravel 11 and a multi-threaded Python scanner engine, the platform processes scans asynchronously via Redis/Horizon queues and provides interactive dashboards, real-time logging, and executive PDF reports with tailored remediation code snippets.',
    image: '/projects/cyberguard.webp',
    category: 'Web',
    tech: [
      <SiLaravel key="laravel" />,
      <SiPhp key="php" />,
      <SiPython key="python" />,
      <SiPostgresql key="postgresql" />,
      <SiRedis key="redis" />,
      <SiDocker key="docker" />,
      <SiHtml5 key="html" />,
      <SiCss3 key="css" />,
      <SiJavascript key="js" />,
    ],
    link: '/projects/cyberguard-awareness',
    github: '',
    details: {
      techStack: [
        { layer: 'Dashboard Framework', tool: 'Laravel 11 (PHP 8.3)' },
        { layer: 'Scanner Engine', tool: 'Python 3.11 (Scapy, Beautiful Soup, Aiohttp)' },
        { layer: 'Asynchronous Queue', tool: 'Laravel Horizon & Redis' },
        { layer: 'Database / Storage', tool: 'PostgreSQL 16' },
        { layer: 'PDF Renderer', tool: 'Barryvdh DomPDF' },
        { layer: 'Containerization', tool: 'Docker & Docker Compose' }
      ],
      structure: `CyberGuard-Awareness/
├── app/
│   ├── Http/Controllers/
│   │   ├── DashboardController.php   # Dashboard analytics and charts data
│   │   └── ScanController.php        # Triggers scan jobs and handles PDF download
│   ├── Jobs/
│   │   └── SecurityAuditJob.php      # Spawns Python scanner and saves findings
│   └── Models/
│       ├── Website.php
│       ├── Scan.php
│       └── Vulnerability.php
├── docker/
│   └── app/
│       └── Dockerfile                # PHP-FPM / Nginx / Supervisor Alpine environment
├── resources/views/
│   ├── dashboard.blade.php           # Security health score dashboard UI
│   └── scan/
│       ├── show.blade.php            # Active scanner log and vulnerable endpoints
│       └── report-pdf.blade.php      # PDF layout with executive summary
├── scanner/
│   ├── modules/                      # Target checks (Blind SQLi, SSRF, JWT, Forensics)
│   └── scanner.py                    # Multi-threaded python engine entrypoint
└── docker-compose.yml                # Multi-service local cluster compose configuration`,
      routes: [
        {
          category: 'Web Routing Endpoints',
          headers: ['Method', 'Path', 'Controller Action', 'Purpose'],
          rows: [
            ['GET', '/', 'DashboardController@index', 'Displays security posture and stats overview'],
            ['POST', '/scan', 'ScanController@store', 'Creates a scan target and dispatches worker job'],
            ['GET', '/scan/history', 'ScanController@history', 'Lists past scans history with pagination'],
            ['GET', '/scan/{scan}', 'ScanController@show', 'Shows real-time scan output details & findings'],
            ['GET', '/scan/{scan}/status', 'ScanController@status', 'Poll endpoint returning JSON status metadata'],
            ['GET', '/scan/{scan}/report', 'ScanController@report', 'Generates and downloads PDF audit report'],
            ['DELETE', '/scan/{scan}', 'ScanController@destroy', 'Deletes scan records and associated findings']
          ]
        }
      ],
      roles: [
        { role: 'Administrator', code: 'admin', capabilities: 'Monitor scanner health queue, trigger manual targets scan, download audit reports.' }
      ],
      colors: [
        { token: 'bg-primary', hex: '#0A0B0F', usage: 'Deep dark main dashboard background' },
        { token: 'accent-primary', hex: '#6366F1', usage: 'Primary action buttons, brand glow outlines' },
        { token: 'severity-critical', hex: '#EF4444', usage: 'Critical SQLi / JWT none-alg vulnerability highlight' },
        { token: 'severity-high', hex: '#F97316', usage: 'High risk XSS or open redirect vulnerabilities highlight' },
        { token: 'severity-medium', hex: '#EAB308', usage: 'Medium risk missing CSP / clickjacking headers highlight' },
        { token: 'success', hex: '#10B981', usage: 'Clean website security health score indicator' }
      ],
      instructions: [
        {
          title: 'Docker Development Launch',
          code: `# Build and spin up all containers in background
docker compose up --build -d

# Run database migrations within the app container
docker compose exec app php artisan migrate`
        },
        {
          title: 'Local Non-Docker Setup',
          code: `# Install composer packages
composer install

# Install node dependencies and compile assets
npm install && npm run build

# Run database migrations & seeders
php artisan migrate

# Start artisan server and queue listener
php artisan serve
php artisan queue:work`
        },
        {
          title: 'Verify Project',
          steps: [
            { name: 'Run PHPUnit test suite', cmd: 'php -d extension=pdo_sqlite -d extension=sqlite3 .\\vendor\\bin\\phpunit' }
          ]
        }
      ]
    }
  },
  {
    slug: 'spedycheck',
    title: 'SpedyCheck - Child Development Screening App',
    description: 'A mobile application focused on screening child development. It allows parents to perform self-screenings and obtain relevant information through news and articles.',
    image: '/projects/spedycheck.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiFirebase key="firebase" />, <SiSupabase key="supabase" />, <SiGetx key="getx" />,
    ],
    link: '/projects/spedycheck',
    github: ''
  },
  {
    slug: 'getcrew',
    title: 'GetCrew - Event Professional Finder Platform',
    description: 'A marketplace platform connecting event organizers with professionals like MCs and photographers. The application facilitates efficient searching, booking, and job detail management.',
    image: '/projects/getcrew.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiLaravel key="laravel" />, <SiMysql key="mysql" />, <SiGetx key="getx" />,
    ],
    link: '/projects/getcrew',
  },
  {
    slug: 'bidan-delima',
    title: 'Bidan Delima - Patient Schedule Application',
    description: 'A mobile application for TPMB TMM Djamini (Bidan Delima) in Surabaya, designed to help midwives manage and view daily patient visit schedules. The app features a schedule, midwife contacts, and a feedback form.',
    image: '/projects/bidan.webp',
    category: 'Mobile',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />, <SiFirebase key="firebase" />,
    ],
    link: '/projects/bidan-delima',
    github: 'https://github.com/tetraxion/bidan_delima'
  },
  {
    slug: 'Pandu-object-detection',
    title: 'Disability-Friendly Toilet Detection System',
    description: 'This dummy project is built with Roboflow and Flask to practice neural networks and object detection, simulating the detection of accessibility features like toilets and grab bars.',
    image: '/projects/pandu.webp',
    category: 'AI',
    tech: [
      <SiPython key="python" />, <SiFlask key="flask" />, <SiRoboflow key="roboflow" />,
    ],
    link: '/projects/Pandu-object-detection',
    github: 'https://github.com/dikawp/flask-roboflow',
    details: {
      techStack: [
        { layer: 'Framework', tool: 'Flask (Python)' },
        { layer: 'Neural Network Model', tool: 'Ultralytics YOLOv8 (yolov8n.pt)' },
        { layer: 'Image Handling', tool: 'OpenCV & Pillow' },
        { layer: 'Dataset Provider', tool: 'Roboflow API' },
        { layer: 'Deployment container', tool: 'Docker' }
      ],
      structure: `flask-roboflow/
├── models/
│   ├── yolov8n_toilet-disable/     # Bounding box weights for toilet grab bars
│   └── yolov8n_prop-disable/       # Bounding box weights for accessibility ramps
├── static/
│   ├── uploads/                    # User original uploaded photos
│   └── results/                    # YOLOv8 annotated predictions outputs
├── templates/
│   └── index.html                  # HTML visual predict interface dashboard
├── app.py                          # Flask routing endpoints and scoring logic
└── requirements.txt                # Python package listing requirements`,
      routes: [
        {
          category: 'Flask Router Routes',
          headers: ['Path', 'HTTP Method', 'Description'],
          rows: [
            ['/', 'GET', 'Renders the visual HTML predictive web page interface'],
            ['/predict', 'POST', 'Processes image uploads: passes payload to YOLOv8 model, calculates accessibility score'],
            ['/clear_history', 'POST', 'Clears predicted and uploaded image files from static folders'],
          ]
        }
      ],
      colors: [
        { token: 'yolo-yellow', hex: '#FFFF00', usage: 'YOLOv8 bounding box predictions annotation border' },
        { token: 'score-green', hex: '#22C55E', usage: 'Visual indicator for accessibility score >= 70%' },
        { token: 'score-red', hex: '#EF4444', usage: 'Visual indicator for accessibility score < 70%' },
        { token: 'flask-gray', hex: '#4B5563', usage: 'Primary layout borders' }
      ],
      instructions: [
        {
          title: 'Prerequisites',
          description: 'Python 3.7+ installed and active pip package manager.'
        },
        {
          title: 'Setup & Installation',
          code: `# Clone repository
git clone https://github.com/dikawp/flask-roboflow.git
cd flask-roboflow

# Create and activate virtual environment
python -m venv venv
venv\\Scripts\\activate

# Install dependency models packages
pip install -r requirements.txt`
        },
        {
          title: 'Execution Command',
          steps: [
            { name: 'Run development server', cmd: 'flask run --debug' }
          ]
        }
      ]
    }
  },
  {
    slug: 'MerieLocationApp',
    title: 'Merie Location Website',
    description: 'A wedding dress marketplace web application for buying and renting bridal gowns with product catalog, booking system, and customer management features.',
    image: '/projects/marielocation.webp',
    category: 'Web',
    tech: [
      <SiLaravel key="laravel" />, <SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key="js" />, <SiBootstrap key="bootstrap" />, <SiMysql key="mysql" />,
    ],
    link: '/projects/MerieLocationApp',
    github: 'https://github.com/tetraxion/MarieLocation.git'
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website built entirely with Flutter for Web to showcase my projects, skills, and professional background in a consistent and modern interface.',
    image: '/projects/portoFlutter.webp',
    category: 'Web',
    tech: [
      <SiFlutter key="flutter" />, <SiDart key="dart" />,
    ],
    link: '/projects/personal-portfolio',
    github: 'https://github.com/tetraxion/Web_Flutter_Portofolio'
  },
  {
    slug: 'kai-website-clone',
    title: 'KAI Website Clone - Fullstack Booking System',
    description: 'A full-stack clone of the official Kereta Api Indonesia (KAI) website, built with PHP and MySQL. This project aims to replicate the booking functionality, from the server-side logic and database management to the front-end display.',
    image: '/projects/cloneKAI.webp',
    category: 'Web',
    tech: [
      <SiPhp key="php" />, <SiMysql key="mysql" />, <SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key="js" />,
    ],
    link: '/projects/kai-website-clone',
    github: 'https://github.com/tetraxion/KAI_PHP'
  },
  {
    slug: 'nushoptara',
    title: 'NuShoptara.co - E-commerce for Indonesian Crafts',
    description: 'An e-commerce website dedicated to promoting and selling authentic Indonesian crafts. Built with fundamental web technologies to create a clean and accessible user experience.',
    image: '/projects/nushoptara.webp',
    category: 'Web',
    tech: [
      <SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key="js" />,
    ],
    link: '/projects/nushoptara',
    github: 'https://github.com/tetraxion/Nushoptara_html'
  },
];
