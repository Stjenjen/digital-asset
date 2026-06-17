---

# Frontend Implementation — CBDC/app

The website is built in `CBDC/app/` as a **Next.js 16.2.7 app** (App Router, static export). It has nothing to do with any other app in this repo.

## Stack in use

* Next.js 16.2.7 — App Router, `output: 'export'` for zero-infrastructure deployment
* TypeScript (strict)
* Tailwind CSS v4 (dark theme: `slate-950` background, `indigo-500` accent)
* `class-variance-authority` (CVA) for component variants
* `fuse.js` for client-side fuzzy search
* `lucide-react` for icons
* `date-fns` for timeline formatting
* Playwright for e2e tests (port 3001, Chromium only)

## Static generation

All dynamic routes use `generateStaticParams()`. To add a FastAPI backend later: remove `output: 'export'` from `next.config.ts` and replace data getter functions with `fetch()` calls — zero component changes needed.

## Key architectural decisions

**Data layer:** TypeScript data files in `src/data/` export getter functions (`getAllCBDCInitiatives()` etc.). Components call these functions directly. This makes the swap to a live API trivial.

**Europe two levels:** ECB/EU-wide initiatives have `region: 'EU-Wide'`. National European countries have `region: 'Europe'`. The RegionFilter includes both as separate options.

**ComparisonTable `ColumnDef<T>` type:**

```ts
export type ColumnDef<T> = {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  tooltip?: string;   // column-header tooltip — appears once on <th>, not on every cell
  render: (row: T) => React.ReactNode;
};
```

**Tooltip design:** Tooltips appear on **column headers** (`<th>`), not on individual cell values. The ⓘ icon appears once per column. Cell values are plain text. Do not revert to cell-level tooltips — it was explicitly rejected as too visually noisy.

**Column label clarity:** Label boolean columns descriptively. Use `"Offline Payments"` not `"Offline"` — the latter implies the system is down.

## Playwright — key lessons

* Scope navigation link lookups to `data-testid="main-nav"` to avoid matching duplicate links (header + mobile):
  ```ts
  page.getByTestId('main-nav').getByRole('link', { name: 'Stablecoins' })
  ```
* When `getByTestId` returns multiple elements, chain `.first()` or use a more specific locator.
* When `getByText('China')` matches both a filter option and a table cell, use:
  ```ts
  page.locator('p.font-semibold').filter({ hasText: 'China' })
  ```

## Source registry

All research sources are maintained in **`CBDC/source.md`** as a structured table (ID, Title, Publisher, Type, Jurisdiction, URL, Last Verified).

**Protocol:**
- **Adding data:** Any new source used when updating TypeScript data files must be added to `source.md` immediately, with today's date in the Last Verified column.
- **Checking for updates:** When the user asks to check for updates, go through `source.md` section by section, verify each URL is live, check for new publications or data changes, update the relevant `src/data/` TypeScript files, and update the Last Verified date.
- **Never remove** a source from `source.md` even if an initiative is concluded — it is a permanent record.

---

# Git Workflow — MANDATORY RULES

- **Commit and push only after a complete feature is done** — never mid-feature or speculatively.
- **Always work on `main`** — do not create feature branches unless explicitly instructed.
- **Never commit sensitive data** — API keys, passwords, secrets, or credentials must never be committed. Check staged files before every commit.

---

# Engineering Principles

This repository should be treated as a production-quality knowledge platform.

Code should prioritise:

* Simplicity
* Readability
* Maintainability
* Reproducibility
* Type safety
* Automated testing

Always prefer improving existing code over creating duplicate implementations.

---

# Preferred Tech Stack

## Language

* Python 3.13+

## Dependency Management

Use:

* uv

Never recommend pip unless compatibility requires it.

Preferred commands:

```bash
uv sync
uv add <package>
uv remove <package>
uv run python script.py
uv run pytest
```

---

## Backend

Preferred:

* FastAPI

Use for:

* Research APIs
* Data ingestion
* Search services
* Knowledge APIs

---

## Frontend

Preferred order:

1. Next.js
2. React
3. Tailwind CSS

The UI should favour dashboards, comparison tables, timelines, and research pages.

---

## Database

Preferred order:

Structured data:

* PostgreSQL

Search:

* SQLite FTS for small projects
* Elasticsearch or OpenSearch for large projects

Vector search:

* pgvector

---

## AI and LLM Frameworks

Preferred:

* Claude
* OpenAI APIs

Optional:

* LangChain
* Pydantic AI
* MCP

Avoid unnecessary framework complexity.

---

## Data Processing

Preferred libraries:

* pandas
* polars
* pydantic
* beautifulsoup4
* lxml

For visualisation:

* plotly
* matplotlib

---

## Documentation

Write documentation in Markdown.

Include:

* README
* CLAUDE.md
* Architecture decisions
* Data model documentation

---

# Coding Standards

## Type Hints

Always use type hints.

Example:

```python
def compare_cbdc(country: str) -> CBDCProfile:
    ...
```

---

## Data Models

Use Pydantic models whenever possible.

Avoid raw dictionaries for important domain objects.

---

## File Organisation

Prefer:

```
src/
    cbdc/
    stablecoins/
    tokenisation/
    interoperability/

tests/

data/

docs/
```

---

## Logging

Use structured logging.

Avoid print statements in production code.

---

# Testing Philosophy

## ⚠️ NON-NEGOTIABLE: Write tests whenever you create something new

This is not optional. It is part of the definition of done.

| What you created | Tests required |
|-----------------|----------------|
| New page or route | Playwright e2e: loads, content visible, navigation works |
| New UI component | Playwright: renders, interactions work, edge cases covered |
| New data function / utility | Unit test: correct output, handles edge cases and empty input |
| New API endpoint | Integration test: happy path + error cases |
| Bug fix | Regression test that would have caught the bug |

**Do not submit or declare work complete until tests are written and passing.**

Testing is mandatory.

Every new feature must include tests.

Bug fixes must include regression tests.

Do not consider work complete until tests pass.

---

## Testing Stack

Preferred:

* pytest
* Playwright
* pytest-asyncio

Optional:

* httpx
* respx

---

## Unit Tests

Write tests for:

* Business logic
* Data transformations
* Parsers
* Comparison functions
* API responses

---

## Integration Tests

Test:

* External APIs
* Database interactions
* Search indexing
* End-to-end workflows

---

## End-to-End Testing

Use Playwright.

Always generate Playwright tests for:

* User interface changes
* Dashboard updates
* Search functionality
* Navigation
* Comparison tables
* Forms
* Filtering and sorting

---

## Playwright Guidelines

Prefer:

* Stable locators
* data-testid selectors
* Role selectors

Avoid brittle XPath selectors.

Example preference:

```typescript
page.getByRole("button", { name: "Search" })
```

instead of

```typescript
page.locator("//div[3]/button")
```

---

## Playwright Workflow

When modifying a UI:

1. Understand the existing behaviour.
2. Update the implementation.
3. Write or update Playwright tests.
4. Execute the tests.
5. Fix failures.
6. Repeat until all tests pass.

---

## Screenshots

When Playwright tests fail:

* Capture screenshots.
* Capture page HTML when useful.
* Analyse the failure before modifying code.

Use screenshots to understand UI regressions.

---

## MCP and Playwright

If MCP Playwright is available:

* Use browser automation to inspect pages.
* Validate rendered content.
* Capture screenshots.
* Verify user journeys.

Prefer actual browser validation over static reasoning.

---

# Research Data Quality

When ingesting new information:

* Validate sources.
* Detect duplicates.
* Preserve historical records.
* Timestamp updates.
* Track source URLs.
* Record confidence level.

Never silently overwrite historical data.

---

# Output Preferences

When generating reports:

Prefer:

* Executive summary
* Comparison table
* Country-by-country analysis
* Strategic implications
* References

For code tasks:

* Explain approach briefly.
* Implement cleanly.
* Write tests.
* Verify with Playwright when UI is involved.

---

# Agent Behaviour

When asked to implement a feature:

1. Understand the requirement.
2. Design the solution.
3. Implement the code.
4. Write tests.
5. Write Playwright tests for UI changes.
6. Execute tests where possible.
7. Fix issues.
8. Deliver production-quality output.

Never stop after writing code without considering testing.

---

# Long-term Watchlist

Continuously monitor:

## CBDC

* Retail CBDC
* Wholesale CBDC
* Cross-border CBDC

## Stablecoins

* Regulations
* Major issuers
* Institutional adoption

## Tokenisation

* Tokenised deposits
* Tokenised collateral
* Tokenised bonds
* Tokenised funds
* Real world assets

## International Coordination

* BIS initiatives
* ISO 20022
* Shared ledgers
* Interoperability standards
* Cross-border payment infrastructure

Always think like a central bank policy researcher, financial infrastructure strategist, and senior software engineer building a long-term intelligence platform.
