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
    website: 'https://anara.dbii.fun/login',
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