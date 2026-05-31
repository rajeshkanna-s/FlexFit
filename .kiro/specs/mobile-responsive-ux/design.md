# Design Document

## Overview

This design corrects the mobile layout of the FlexFit marketing site so that every page renders correctly within the Small_Phone_Range (360px–430px) while preserving the existing Visual_Design. It is a CSS-focused layout-correction effort confined to the Stylesheet_Set (`src/styles/variables.css`, `src/styles/global.css`, `src/styles/components.css`) plus minimal, additive JSX class hooks where a stable selector is missing.

The site is a React + Vite + TypeScript SPA using Bootstrap 5.3 for its grid plus a custom CSS layer that defines the brand styling and all the bespoke layout containers (hero, dense pricing grids, gallery, exercise library, contact maps). The existing custom CSS already declares three responsive breakpoints — `max-width: 991px`, `max-width: 767px`, and `max-width: 420px`. The mobile defects come from a desktop-first authoring pattern: several multi-column grids only collapse partially (to 2 columns at 767px) or rely on intrinsic content widths that exceed a 360px viewport, producing horizontal overflow and cramped, unreadable cards.

The design does not introduce a redesign, new tokens, new components, or new dependencies. It refines and extends the existing breakpoint rules, adds defensive overflow guards, normalizes tap-target sizing, and adds a small number of class hooks to JSX where the markup currently lacks a targetable selector.

### Goals

- Eliminate Horizontal_Overflow on all pages across the Small_Phone_Range.
- Collapse every Dense_Grid to a single readable column on small phones.
- Guarantee a 44px Min_Tap_Size for all interactive controls.
- Keep ContactPage Google Maps iframes inside the viewport with a usable height.
- Keep typography and spacing readable at small widths.
- Preserve the existing desktop/tablet (≥768px) presentation and the brand look.

### Non-Goals

- No visual/brand refresh (colors, fonts, card styles, radii, shadows are retained verbatim).
- No change to desktop/tablet layouts except where a shared rule is required to fix the small-phone cascade.
- No change to ExercisePage video playback behavior, application logic, routing, or data.

## Architecture

### Layering and cascade strategy

The custom CSS layer sits on top of Bootstrap. The cascade is intentionally ordered so that base (desktop) rules are declared first and mobile overrides follow in `min`/`max-width` media queries later in the file, letting the narrow-viewport rules win without `!important` (except where Bootstrap utility specificity already forces it, e.g. `.nav-link-ff`).

```
variables.css   → design tokens (colors, fonts) — unchanged values, may add layout tokens
global.css      → element defaults, .btn-ff, .form-control, page shell, base media query
components.css  → bespoke containers + the 991 / 767 / 420 breakpoint blocks (primary work area)
```

Breakpoint responsibilities after this change:

| Breakpoint | Role |
| --- | --- |
| base (≥992px) | Desktop layout, unchanged |
| `max-width: 991px` | Tablet/landscape: dense grids drop to 2 columns (unchanged intent) |
| `max-width: 767px` | Phone: dense grids collapse to 1 column, hero stacks, action bar appears |
| `max-width: 420px` | Small phone: final spacing/typography/tap-target tightening |

The Small_Phone_Range (360–430px) straddles the `767px` and `420px` blocks. Both must be internally consistent so that any width in the range is covered: the `767px` block establishes single-column stacking and the `420px` block tunes gutters, font sizes, and minimum sizes. No new breakpoint is introduced; the existing two phone breakpoints are made complete and overflow-safe.

### Global overflow defense (defense in depth)

Three layers guarantee Requirement 1 regardless of any single container's content:

1. **Viewport clamp** — `html, body { overflow-x: hidden; }` already exists and is retained as the last-resort guard.
2. **Box sizing** — `* { box-sizing: border-box; }` already exists; all padding-based widths therefore stay inside declared widths.
3. **Content constraints** — per-element rules (`max-width: 100%`, `min-width: 0` on flex/grid children, `overflow-wrap: anywhere` on text, single-column grids, full-width media) prevent the content from generating overflow in the first place, so the `overflow-x: hidden` clamp never needs to silently crop meaningful content.

`min-width: 0` is the key fix for flex/grid children (Bootstrap columns, `.navbar-brand`, card flex rows): the CSS default `min-width: auto` lets a child refuse to shrink below its content's intrinsic width, which is the root cause of most overflow in dense grids and the navbar brand row.

## Components and Interfaces

Each subsection below maps a requirement area to the concrete CSS containers and the rule changes. All class names referenced already exist in `components.css` unless explicitly noted as a new JSX hook.

### 1. No horizontal overflow (Req 1)

Targets: page root, all Dense_Grids, embedded media, text blocks.

- Retain `overflow-x: hidden` on `html`/`body`.
- Add `min-width: 0` to grid/flex children that currently rely on intrinsic width. The card base rule already sets `min-width: 0` on `.feature-card, .program-card, …`; extend the same to `.legacy-plan-card`, `.plan-compare-card`, `.exercise-card`, `.challenge-branch-card`, and `.branch-price-row` content so long unbroken strings (prices, branch names) cannot push width.
- Ensure long text wraps: headings already use `overflow-wrap: anywhere`; add the same to price/number elements that can render long unbroken tokens.
- Constrain embedded media to container width (see §5 for maps; gallery/exercise media already use `width: 100%` + `object-fit`).

```css
/* components.css — within @media (max-width: 767px) */
.legacy-plan-card,
.plan-compare-card,
.exercise-card,
.challenge-branch-card {
  min-width: 0;
}

.hero-offer-price,
.price,
.legacy-plan-price,
.addon-price,
.challenge-branch-price {
  overflow-wrap: anywhere;
}
```

### 2. Dense grids stack to a single column (Req 2)

Dense_Grid set: `legacy-plan-grid`, `plan-compare-grid`, `plan-compare-controls`, `plan-compare-meta`, `plan-compare-columns`, `gallery-grid`, `impact-strip`, `program-path`, `exercise-grid`.

The existing `@media (max-width: 767px)` block already sets most of these to `grid-template-columns: 1fr`. The work is to (a) confirm every member of the Dense_Grid set is present in that single-column list, (b) preserve spacing using the existing `gap` tokens, and (c) make sure no member is re-widened by a more specific later rule.

```css
/* components.css — @media (max-width: 767px) : full Dense_Grid coverage */
.legacy-plan-grid,
.plan-compare-grid,
.plan-compare-controls,
.plan-compare-meta,
.plan-compare-columns,
.gallery-grid,
.impact-strip,
.program-path,
.exercise-grid {
  grid-template-columns: 1fr;
}
```

`gap` values are inherited from the base rules (e.g. `gallery-grid { gap: 18px }`), satisfying "readable spacing using existing tokens." Item text stays visible because single-column items take full row width and cards already carry `padding` and `overflow-wrap`.

`impact-strip`/`program-path` use a 1px internal gap with a divider background; at single column this renders as stacked rows with hairline separators — visually preserved.

### 3. Hero and offer card stacking (Req 3)

HomePage hero (`HeroSection.tsx`) uses Bootstrap `row > col-lg-8` (headline + stats) and `col-lg-4` (offer card). Below `lg` Bootstrap already stacks the columns in source order (headline block, then `.hero-offer-card`), satisfying vertical source-order stacking. The remaining work:

- `.hero-offer-card` and `.hero-info-card` render at full container width (Bootstrap column is full width below `lg`) — confirm padding reduction (already `padding: 20px` at 767px) and add `min-width: 0` so the inner `.branch-price-list` rows cannot overflow.
- Hero headline uses `clamp()` font sizing (already tuned at 767px) and `overflow-wrap: anywhere` (inherited from `h1`), so pricing/headline text stays within the viewport.

```css
/* components.css — @media (max-width: 767px) */
.hero-offer-card,
.hero-info-card {
  min-width: 0;
  max-width: 100%;
}

.branch-price-row {
  min-width: 0;
}

.branch-price-row span {
  overflow-wrap: anywhere;
}
```

### 4. Minimum tap-target sizing (Req 4)

Min_Tap_Size = 44px in both dimensions. Inventory of tap targets and current state:

| Tap target | Selector | Current | Action |
| --- | --- | --- | --- |
| Primary/secondary buttons | `.btn-ff` | `min-height: 46px` (767) | OK; ensure not shrunk |
| Nav links | `.nav-link-ff` | padding only | add `min-height: 44px`, align center |
| Join CTA in nav | `.btn-join-nav` | padding only | add `min-height: 44px` |
| Form controls | `.form-control, .form-select` | `min-height: 48px` | OK |
| Gallery filter tabs | `.gallery-tabs button` | `padding: 9px 16px` | add `min-height: 44px` |
| Exercise filters | `.exercise-search, .exercise-select-toggle, .exercise-reset` | `min-height: 50px` | OK |
| Footer social actions | `.footer-socials .btn-ff` | `44px` at 420 / `48px` above | OK |
| Plan selector | `.plan-option` | padding only | add `min-height: 44px` |

```css
/* components.css — @media (max-width: 767px) */
.nav-link-ff,
.btn-join-nav {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.gallery-tabs button,
.plan-option {
  min-height: 44px;
}
```

Adjacent-target spacing (Req 4.3): navbar links already stack with `align-items: stretch` and gap at `≤991px`; gallery tabs use `gap: 10px`; conversion/footer actions use `gap`. These existing gaps prevent overlapping touch areas; no overlap-specific change is required beyond confirming the stacked navbar links keep their full-width rows.

### 5. ContactPage map embeds (Req 5)

`ContactPage.tsx` renders `.branch-map-grid` containing `<iframe>` elements with `width="100%"` and `height="320"`.

- `.branch-map-grid` is already in the `@media (max-width: 767px)` single-column list → single column on phones.
- The `width="100%"` attribute plus the parent's full width keeps each iframe at container width; add a CSS guard `max-width: 100%` so the inline attribute cannot exceed the container, and `display: block` to remove inline whitespace.
- Maintain usable height ≥ 200px: the `height="320"` attribute already satisfies this; add a CSS floor so a future style cannot reduce it below the minimum.

```css
/* components.css — @media (max-width: 767px) */
.branch-map-grid { grid-template-columns: 1fr; }

.branch-map-grid iframe {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 220px; /* ≥ 200px usable height */
}
```

No JSX change is required since the iframes already carry `width="100%"`. A `.branch-map-grid iframe` selector is used rather than adding a new class.

### 6. Readable typography and spacing (Req 6)

- Body text floor: `body { font-size: 16px }` is the base; ensure no small-text rule drops effective body copy below 14px. Audit `.page-hero-copy` (0.9rem ≈ 14.4px at 767px — OK), `.branch-price-row span` (0.86rem ≈ 13.76px — **below floor**), `.exercise-tags span` (0.75rem — decorative chip, not body copy). Raise genuine body-copy values that fall below 14px; leave decorative labels/chips as-is since they are not "body text."
- Headings: `h1`/`h2` already use `clamp()` with reduced upper bounds at 767px and `overflow-wrap: anywhere`, keeping them inside the viewport.
- Padding: section padding reduces to `60px 0` (≤767px) and cards to `20px`; the `420px` block tightens the Bootstrap container gutter to `1.25rem`. These keep text off the viewport edges.

```css
/* global.css — base; ensure body-copy floor */
:root { --font-body-min: 0.875rem; } /* 14px reference token */

/* components.css — @media (max-width: 420px) : raise sub-14px body copy */
.branch-price-row span { font-size: 0.9rem; } /* ~14.4px */
```

### 7. Forms usable on phones (Req 7)

Form_Views: JoinPage and ContactPage. Both wrap fields in Bootstrap `row > col-md-6`. Below `md` (768px), Bootstrap already stacks `col-md-6` to full width and single column. Remaining work:

- Confirm labels and `FormInput`/`select`/`textarea` render full width: Bootstrap form controls are `width: 100%` by default; `.form-select`/`.form-control` inherit this.
- Control height ≥ 44px: `.form-control, .form-select { min-height: 48px }` already satisfies this.
- No overflow: add `max-width: 100%` defense and ensure the `.contact-card` padding does not exceed available width (already `padding: 20px` at 767px).
- Submit button within viewport at ≥44px: JoinPage submit is `.btn-ff w-100`; ContactPage submit is `.btn-ff`. The `767px` rule already widens `.contact-card .btn-ff` to `width: 100%`. `.btn-ff` `min-height: 46px` satisfies the tap floor.

```css
/* components.css — @media (max-width: 767px) */
.form-control,
.form-select,
.contact-card textarea {
  max-width: 100%;
}
```

No JSX change required; existing Bootstrap column classes provide the single-column stacking hook.

### 8. Navbar and menu behavior (Req 8)

`Navbar.tsx` uses Bootstrap `navbar-expand-lg` with custom `.navbar-ff`. Below `lg` the collapse + toggler pattern is active.

- Brand + toggler within viewport: `.navbar-brand` needs `min-width: 0` so the wordmark image (`clamp(150px,16vw,190px)`) can shrink rather than overflow alongside the logo and toggler. The `420px` block already reduces logo height and wordmark width; add `min-width: 0` and allow the wordmark to flex-shrink.
- Toggle reveals vertically stacked, full-width links: the `≤991px` block already sets `.navbar-nav { align-items: stretch }` and full-width `.nav-link-ff`. Confirmed; combined with §4 `min-height: 44px`.

```css
/* components.css — @media (max-width: 991px) or shared */
.navbar-brand { min-width: 0; }

.navbar-brand-wordmark {
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
}
```

### 9. Preserve visual design (Req 9)

- All token values in `variables.css` (colors, brand yellows, borders, radii references) remain unchanged. No color, font-family, shadow, or radius declaration is modified; only layout properties (`grid-template-columns`, `min-width`, `min-height`, `max-width`, `overflow-wrap`, font-size floors, padding/gap within existing tokens) are touched.
- Changes are confined to the Stylesheet_Set. The only JSX touches considered are additive `className` hooks; the audit above found existing selectors sufficient for every requirement, so JSX changes are expected to be **none or minimal** (a class hook is added only if a needed selector is genuinely absent).
- Desktop/tablet (≥768px) rules are not altered except where a shared declaration (e.g. `min-width: 0` on a card base rule) is required to fix the phone cascade; such shared rules are layout-neutral at desktop widths because those containers already have ample width.

### JSX class-hook policy

JSX edits are restricted to adding a `className` to an element that has no stable selector and cannot be targeted via an existing class or structural selector. Each such addition must:
- Add only a class attribute (no element, content, attribute, handler, or structural change).
- Reuse an existing token-driven style; introduce no inline styles.
Based on the audit, the existing class set covers all nine requirements, so the design targets zero JSX changes and treats any hook as an exception to be justified per element.

## Data Models

This feature has no runtime data model. The relevant "model" is the set of layout constants and the breakpoint contract, expressed as CSS.

### Layout constants

| Constant | Value | Source |
| --- | --- | --- |
| Small_Phone_Range | 360px – 430px | Requirement target range |
| Min_Tap_Size | 44px | Requirement (`--tap-min` token optional) |
| Body text floor | 14px (0.875rem) | Requirement 6.1 |
| Map min height | 200px (impl 220px) | Requirement 5.3 |
| Phone breakpoint | `max-width: 767px` | Existing |
| Small-phone breakpoint | `max-width: 420px` | Existing |

Optional additive tokens in `variables.css` (values only, no visual change):

```css
:root {
  --tap-min: 44px;
  --font-body-min: 0.875rem;
  --map-min-height: 220px;
}
```

### Breakpoint contract

For any viewport width `w`:
- `w ≥ 992px`: desktop layout (unchanged).
- `768px ≤ w ≤ 991px`: tablet, dense grids at 2 columns.
- `w ≤ 767px`: single-column stacking, action bar visible.
- `w ≤ 420px`: tightened gutters, font floors, tap minimums.

The Small_Phone_Range (360–430px) is fully covered by the union of the `767px` and `420px` blocks.

## Error Handling

CSS has no exceptions, but the design hardens against rendering "failure modes":

- **Overflow fallback:** `overflow-x: hidden` on `html`/`body` is the terminal guard; content constraints (`min-width: 0`, `max-width: 100%`, `overflow-wrap: anywhere`) ensure it never has to crop meaningful content.
- **Long unbreakable strings:** `overflow-wrap: anywhere` on text and price elements prevents single long tokens (URLs, prices, branch names) from forcing horizontal scroll.
- **Missing/oversized media:** `img { max-width: 100% }` is global; iframes get explicit `max-width: 100%`.
- **Specificity regressions:** mobile rules are placed after base rules and grouped within media queries; the few Bootstrap-overriding `!important` declarations (`.nav-link-ff`) are preserved as-is to avoid losing the override.
- **Token integrity:** no token value is changed, so a misapplied layout rule cannot silently alter brand color/shadow/radius.
- **Graceful degradation:** features like `backdrop-filter` and `clamp()` are already in use; unsupported browsers fall back to solid backgrounds and the clamp midpoint without breaking layout.

## Testing Strategy

Because this is a layout/CSS effort, correctness is verified primarily through rendered-DOM measurement in a headless browser across the Small_Phone_Range, plus desktop regression checks. Per the property-based-testing guidance, pure CSS layout is not unit-PBT material, but several invariants are genuinely universal over a generated input (viewport width and the set of DOM elements/routes) and are validated with a width-parameterized harness.

### Verification approach

- **Property-style layout checks (width-parameterized):** Load each route in a headless browser (Playwright/Chromium, dev-dependency, opt-in) at randomized viewport widths sampled across 360–430px (≥100 samples per invariant) and assert DOM-measured invariants: no overflow, single-column stacking, tap-target sizing, body-text floor, map height. Input that varies meaningfully = viewport width × route × element set.
- **Example/interaction checks:** Navbar toggle open → links stacked full width; hero source-order stacking; ContactPage map grid single column.
- **Desktop regression (snapshot):** At ≥768px, assert that key containers' computed brand properties (color, font-family, border-radius, box-shadow) and column counts match a captured baseline, validating that the Visual_Design and desktop layout are preserved.
- **Manual device pass:** Spot-check on a 360px and a 430px device profile to confirm visual fidelity (the non-computable aesthetic aspects).

### Configuration

- Property-style checks run ≥100 generated viewport widths per invariant.
- Each property test references its design property via tag: **Feature: mobile-responsive-ux, Property {number}: {property_text}**.
- If no browser-test harness is present in the project, it is added as an opt-in dev dependency without altering the app build; CSS changes themselves require only `npm run build` (`tsc && vite build`) to pass.


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

The properties below are validated by loading each route in a headless browser at randomized viewport widths sampled across the Small_Phone_Range (360–430px), measuring the rendered DOM, and asserting the invariant. Desktop-preservation is validated at sampled widths ≥768px against a captured baseline.

### Property 1: No horizontal overflow per page

For all routes (pages) and for all viewport widths in the Small_Phone_Range, the rendered document SHALL have no horizontal overflow (document scroll width does not exceed the viewport width).

**Validates: Requirements 1.1, 1.3, 3.3, 6.2, 8.1**

### Property 2: Constrained elements fit within the viewport

For all viewport widths in the Small_Phone_Range, every Dense_Grid, embedded media element (including hero offer/info cards and Google Maps iframes), and text block SHALL render with a bounding width no greater than the viewport width.

**Validates: Requirements 1.2, 3.2, 5.2**

### Property 3: Tap targets meet the minimum size

For all routes and for all viewport widths in the Small_Phone_Range, every Tap_Target (navigation links, primary/secondary buttons, form controls, the form submit button, gallery filter tabs, exercise filter controls, and footer social actions) SHALL render at no less than 44 CSS px in both width and height.

**Validates: Requirements 4.1, 4.2, 7.2, 7.3, 8.3**

### Property 4: Adjacent tap targets do not overlap

For all viewport widths in the Small_Phone_Range and for any two adjacent Tap_Targets, their touch areas (bounding rectangles) SHALL NOT overlap.

**Validates: Requirements 4.3**

### Property 5: Dense grids render as a single non-overlapping column

For all Dense_Grids (including the ContactPage Branch_Map_Grid) and for all viewport widths in the Small_Phone_Range, the grid SHALL render as a single column with its items stacked vertically and with no two items overlapping.

**Validates: Requirements 2.1, 2.3, 5.1**

### Property 6: Map embeds keep a usable height

For all viewport widths in the Small_Phone_Range, every ContactPage Google Maps iframe SHALL render with a height of at least 200 CSS px.

**Validates: Requirements 5.3**

### Property 7: Body text meets the readable floor

For all body-text elements and for all viewport widths in the Small_Phone_Range, the effective rendered font size SHALL be no less than 14 CSS px.

**Validates: Requirements 6.1**

### Property 8: Content stays clear of the viewport edges

For all content text blocks and for all viewport widths in the Small_Phone_Range, the text SHALL render with positive horizontal padding so that its left edge is greater than 0 and its right edge is less than the viewport width.

**Validates: Requirements 6.3**

### Property 9: Form fields stack full width in a single column

For all form fields and their labels on JoinPage and ContactPage and for all viewport widths in the Small_Phone_Range, each field SHALL render at full container width in a single column.

**Validates: Requirements 7.1**

### Property 10: Desktop and tablet layout is preserved

For all viewport widths at or above 768 CSS px, the dense-grid column counts and the brand computed styles (color, font-family, border-radius, box-shadow) of representative elements SHALL match the pre-change baseline, except where a shared rule is required to correct the Small_Phone_Range cascade.

**Validates: Requirements 9.3**

### Non-property criteria (example / regression / review)

The following acceptance criteria are validated by example-based, interaction, snapshot, or diff-review tests rather than universally quantified properties:

- **2.2** readable spacing between stacked items — example: assert non-zero token-based gap.
- **3.1** hero source-order stacking — interaction/example on HomePage.
- **8.2** menu toggle reveals stacked full-width links — interaction test (open menu, assert layout).
- **9.1** preserve brand colors/fonts/cards/borders/radii/shadows — snapshot of computed styles vs. baseline.
- **9.2** confine changes to the Stylesheet_Set + minimal additive JSX class hooks — diff review (no logic/routing/content change).
