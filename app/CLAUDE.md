@AGENTS.md

---

# CBDC Research Intelligence Platform — App Notes

## Stack

- Next.js 16.2.7, App Router, `output: 'export'` (fully static, zero infrastructure)
- TypeScript (strict)
- Tailwind CSS v4 — dark theme: `slate-950` bg, `indigo-500` accent
- `class-variance-authority` (CVA) for component variants
- `fuse.js` for client-side fuzzy search
- `lucide-react` for icons
- Playwright for e2e tests (Chromium only, port 3001)

## Key design decisions

### Tooltip placement — column headers only

Tooltips (ⓘ) appear **once on column headers**, not on every cell value. This was an explicit UX decision — cell-level tooltips repeat on every row and are too visually noisy. Do not revert.

The `ColumnDef<T>` type in `src/components/tables/ComparisonTable.tsx` has an optional `tooltip` field:

```ts
export type ColumnDef<T> = {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  tooltip?: string;   // renders ⓘ on <th> label, not on each cell
  render: (row: T) => React.ReactNode;
};
```

When `col.tooltip` is set, the `<th>` renders `<Tooltip content={col.tooltip}>{col.label}</Tooltip>`. Cell `render` functions return plain elements with no Tooltip wrapping.

### Interoperability page — inline row expansion

The `/interoperability` page uses a **custom inline table** (not `<ComparisonTable>`) so it can expand rows in-place. Clicking a row inserts a second `<tr>` immediately below it with the full project detail (description, key findings, outcome, timeline, sources). Only one row is open at a time — `expandedId` state in `page.tsx`. The generic `ComparisonTable` component was intentionally NOT extended for this pattern to keep it simple.

Do **not** reintroduce the old "Project Details" accordion section below the table — it was removed as duplicate.

### Column label clarity

Label boolean columns descriptively. Use `"Offline Payments"` not `"Offline"` — the bare word implies the system is down.

### Europe — two levels

ECB and EU-wide initiatives use `region: 'EU-Wide'`. National European countries use `region: 'Europe'`. Both appear as separate filter options in `RegionFilter`.

### Data layer

Getter functions (`getAllCBDCInitiatives()`, etc.) in `src/data/` are the only place components touch data. Swapping to a FastAPI backend means changing those functions only — no component changes needed.

## ⚠️ Git Workflow — MANDATORY RULES

- **Commit and push only after a complete feature is done** — never mid-feature or speculatively.
- **Always work on `main`** — do not create feature branches unless explicitly instructed.
- **Never commit sensitive data** — API keys, passwords, secrets, or credentials must never be committed. Check staged files before every commit.

---

## ⚠️ Testing — MANDATORY RULE

**Every time you create something new, you MUST write tests. No exceptions.**

This applies to:
- **New page** → add a Playwright e2e spec in `tests/e2e/` covering: page loads, key content visible, links work, interactive elements function correctly
- **New component** → add tests for all interactive states and edge cases
- **New data getter / utility function** → add unit-level tests verifying correct output
- **Bug fix** → add a regression test that would have caught the bug before merging
- **New route or nav link** → add a navigation test confirming the link reaches the correct page

Tests live in `tests/e2e/`. Run them with:
```bash
npx playwright test
```

Do **not** mark a task as complete until the tests are written and passing. Writing tests is part of the definition of done, not an optional afterthought.

### What to test per page
| Page | Minimum tests required |
|------|------------------------|
| New tracker page | loads, table has rows, filter works, search works |
| New detail/slug page | loads for at least one real slug, key fields visible |
| New static page | loads, heading visible, all sections present, nav link works |
| New interactive component | renders, user interaction produces expected result, edge cases (empty state, single item) |

---

## Test coverage — current state

All pages now have Playwright e2e specs in `tests/e2e/`:

| Spec file | Pages covered |
|-----------|---------------|
| `navigation.spec.ts` | `/` (homepage), `/cbdc`, `/cbdc/[jurisdiction]`, `/jurisdictions/[slug]` |
| `jurisdiction-page.spec.ts` | `/jurisdictions`, `/jurisdictions/singapore`, `/cbdc/china`, `/cbdc/ecb`, `/compare`, `/tokenisation/project-guardian` |
| `comparison-table.spec.ts` | `/cbdc` — table filters, search, sort, status badges |
| `cbdc-world-map.spec.ts` | `/cbdc` — map renders, SVG present, legend visible, tooltip on hover, click navigation, region filter dims countries, type filter dims countries |
| `explainer-page.spec.ts` | `/explainer` — title, sidebar TOC, comparison table, section links, tracker links |
| `glossary-page.spec.ts` | `/glossary` — title, 5 category sections, term/definition counts, anchor IDs |
| `interoperability-page.spec.ts` | `/interoperability` — table, type filters, search, inline row expansion (click row → detail expands in-place), collapse, single-open behaviour |
| `stablecoins-page.spec.ts` | `/stablecoins`, `/stablecoins/[jurisdiction]` — region filter, search, status badges, detail page |
| `tokenisation-page.spec.ts` | `/tokenisation`, `/tokenisation/[slug]` — search, empty state, row links, status badges, clear search |

## Playwright — lessons learnt

- Scope nav lookups to `data-testid="main-nav"` to avoid matching duplicate links (header + mobile menu):
  ```ts
  page.getByTestId('main-nav').getByRole('link', { name: 'Stablecoins' })
  ```
- When a locator matches multiple elements, use `.first()` or a tighter selector.
- When `getByText('China')` matches both a filter chip and a table cell:
  ```ts
  page.locator('p.font-semibold').filter({ hasText: 'China' })
  ```
- `getByRole('columnheader', { name: 'Regulator' })` also matches `'Regulatory Status'` — use `{ exact: true }` when column names share a prefix substring.
- `getByRole('navigation')` does not match `<nav>` inside an `<aside>` with `hidden lg:block` — use `page.locator('aside').filter({ hasText: '...' })` instead. Also reload after `setViewportSize` so CSS visibility recalculates.
- Sidebar TOC tests need a large viewport set **before** page load (or reload after resize) so `hidden lg:block` classes apply correctly.
- SVG `<path>` opacity is set as an attribute (`opacity="0.2"`), not a CSS class — use `locator('path[opacity="0.2"]')` to count dimmed countries in map tests.
- Coordinate-based hover tests (mouse.move to an SVG path) are fragile if the map projection shifts — use a large, centrally located country (China) to maximise hit reliability.

## Source registry

All research sources live in **`CBDC/source.md`** (one level up from this app). It is a structured table with ID, Title, Publisher, Type, Jurisdiction, URL, and Last Verified date.

- Always add new sources to `source.md` before or immediately after updating data files.
- When asked to check for updates, work through `source.md` and update TypeScript data files accordingly.
