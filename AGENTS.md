# AGENTS.md - 4Life Page Project

## Project Overview

This is a **Next.js 14** application with **TypeScript** and **Tailwind CSS**. It uses the App Router architecture and serves as a product catalog for 4Life immune protection products.

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run export` | Export to static HTML |
| `npm run lint` | Run ESLint with Next.js config |

### Running Tests

**No test framework is currently configured** for this project. To add tests, consider installing Jest, React Testing Library, or Cypress.

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── [routes]/     # Additional pages (arg, quienes-somos, etc.)
├── components/       # React components (Home, Product, Banner, etc.)
├── context/          # React Context providers (PaisContext, SideBarContext, AppProviders)
└── lib/              # Utilities and API clients (Client4life.ts, Enums.ts)
```

---

## Code Style Guidelines

### File Naming

- Use **kebab-case** for files: `Client4life.ts`, `PaisContext.tsx`
- Use **PascalCase** for components: `Home.tsx`, `Product.tsx`

### TypeScript

- Enable `strict` mode (already enabled in tsconfig.json)
- Always specify return types for functions when not obvious
- Use explicit interfaces for API responses (see `Product4life` in `Client4life.ts`)

### Imports

- Use path alias `@/` for internal imports: `import { usePaisContext } from '@/context/PaisContext'`
- Use relative imports for same-level components: `import Product from "../components/Product"`
- Group imports logically (React, external libs, internal components)

### React Patterns

- Use `"use client"` directive at the top of client components
- Use functional components with hooks
- Use early returns for loading/error states
- Use meaningful state names: `isLoading`, `products`, `getCurrentPais`

### Tailwind CSS

- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Prefer utility classes over custom CSS
- Use semantic class names (e.g., `text-blue-800`, `bg-white`)
- Custom sizes defined in `tailwind.config.ts` include `dynamic` font size

### Component Structure

```tsx
"use client"  // If client component

import { useState, useEffect } from "react"
import { usePaisContext } from "@/context/PaisContext"

interface Props {
  title: string
}

export default function ComponentName({ title }: Props) {
  const { getCurrentPais } = usePaisContext()
  const [state, setState] = useState<string>("")

  useEffect(() => {
    // logic
  }, [dependencies])

  if (loading) return <div>Loading...</div>

  return (
    <div className="...">
      {/* content */}
    </div>
  )
}
```

### Error Handling

- Handle async errors with try/catch in API calls
- Return fallback UI on API failures
- Handle 401 responses with token refresh (see `Client4life.ts`)

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Home`, `Product` |
| Functions | camelCase | `GetProducts`, `GetToken` |
| Variables | camelCase | `products`, `getCurrentPais` |
| Interfaces | PascalCase | `Product4life`, `Props` |
| Enums | PascalCase | `Paises` |

### API Client Notes

- The API client (`Client4life.ts`) contains hardcoded credentials - do not commit sensitive values to version control
- Use environment variables for secrets in production

---

## ESLint Configuration

The project extends Next.js core web vitals config:

```json
{
  "extends": "next/core-web-vitals"
}
```

Run `npm run lint` to check for issues.

---

## Git Workflow

- Main branch: `main`
- CI/CD: GitHub Actions workflow deploys on push to `main` (see `.github/workflows/deploy.yml`)
- Development: Create feature branches and use pull requests

---

## Adding New Pages

1. Create page file in `src/app/[route-name]/page.tsx`
2. Add metadata export for SEO:

```tsx
export const metadata = {
  title: "Page Title",
  description: "Page description"
}
```

---

## Dependencies

- **next**: 14.0.0
- **react**: ^18
- **react-dom**: ^18
- **typescript**: ^5
- **tailwindcss**: ^3
- **eslint**: ^8
- **axios**: ^1.8.4
- **react-icons**: ^5.3.0