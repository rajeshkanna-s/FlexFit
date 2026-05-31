# Implementation Plan: Mobile Responsive UX

## Overview

This plan corrects the FlexFit mobile layout across the Small_Phone_Range (360px–430px) while preserving the existing Visual_Design. Work is confined to the Stylesheet_Set (`src/styles/variables.css`, `src/styles/global.css`, `src/styles/components.css`) with only additive JSX class hooks if a stable selector is genuinely missing (the design audit expects none).

Implementation proceeds defensively and incrementally: foundation tokens first, then per-area layout fixes (overflow + dense grids → hero/forms → tap targets/navbar → maps → typography), each immediately followed by its width-parameterized property checks. Because nearly every layout rule lives in `components.css`, those tasks are sequenced so they never edit the same file in parallel. Correctness is verified with a headless-browser (Playwright/Chromium) harness sampling ≥100 viewport widths per invariant, plus a desktop-regression baseline. The app build (`npm run build` → `tsc && vite build`) must pass after every change.

Property tests are tagged with **Feature: mobile-responsive-ux, Property {number}: {property_text}** and are marked optional (`*`) — the core CSS work only requires the build to pass.

## Tasks

- [x] 1. Foundation: layout tokens, base floor, and test harness
  - [x] 1.1 Add additive layout tokens to variables.css
    - In `src/styles/variables.css`, add to `:root`: `--tap-min: 44px`, `--font-body-min: 0.875rem`, `--map-min-height: 220px`
    - Values only — do NOT modify any existing color, brand-yellow, font-family, border, radius, or shadow token
    - _Requirements: 4.1, 5.3, 6.1, 9.1_

  - [x] 1.2 Confirm body-copy base floor in global.css
    - In `src/styles/global.css`, confirm base `body { font-size: 16px }` and that no element-default rule drops effective body copy below the `--font-body-min` 14px reference
    - Do not alter element default colors or font families
    - _Requirements: 6.1, 9.1_

  - [ ]* 1.3 Set up headless-browser layout test harness
    - Add Playwright/Chromium as an opt-in dev dependency in `package.json` (do not change the app build); add a config and a `tests/layout/` folder with a shared helper that loads each route at a generated viewport width in 360–430px and exposes DOM-measurement utilities (bounding rects, computed styles, document scroll width)
    - Add a width-sampling generator yielding ≥100 widths across the Small_Phone_Range and a route list for all pages (HomePage, AboutPage, ProgramsPage, MembershipPage, GalleryPage, ExercisePage, ContactPage, JoinPage, PrivacyPage, TermsPage)
    - _Requirements: 9.2_

- [x] 2. Eliminate horizontal overflow and stack dense grids
  - [x] 2.1 Add overflow-defense rules in components.css
    - In the `@media (max-width: 767px)` block: add `min-width: 0` to `.legacy-plan-card, .plan-compare-card, .exercise-card, .challenge-branch-card`; add `overflow-wrap: anywhere` to `.hero-offer-price, .price, .legacy-plan-price, .addon-price, .challenge-branch-price`
    - Retain the existing `html, body { overflow-x: hidden }` and `* { box-sizing: border-box }` guards as the terminal defense
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 2.2 Ensure complete Dense_Grid single-column coverage in components.css
    - In the `@media (max-width: 767px)` block: set `grid-template-columns: 1fr` for every Dense_Grid member — `.legacy-plan-grid, .plan-compare-grid, .plan-compare-controls, .plan-compare-meta, .plan-compare-columns, .gallery-grid, .impact-strip, .program-path, .exercise-grid`
    - Preserve existing `gap` tokens for readable spacing; verify no later/more-specific rule re-widens any member, and that `impact-strip`/`program-path` hairline dividers still render as stacked rows
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ]* 2.3 Write property test for no horizontal overflow
    - **Feature: mobile-responsive-ux, Property 1: No horizontal overflow per page** — for all routes and all widths in 360–430px, document scroll width does not exceed viewport width
    - **Validates: Requirements 1.1, 1.3, 3.3, 6.2, 8.1**

  - [ ]* 2.4 Write property test for constrained elements fitting the viewport
    - **Feature: mobile-responsive-ux, Property 2: Constrained elements fit within the viewport** — every Dense_Grid, embedded media (incl. hero offer/info cards and map iframes), and text block has bounding width ≤ viewport width across the range
    - **Validates: Requirements 1.2, 3.2, 5.2**

- [x] 3. Stack hero/offer cards and form fields full width
  - [x] 3.1 Stack hero and offer/info cards in components.css
    - In the `@media (max-width: 767px)` block: add `min-width: 0; max-width: 100%` to `.hero-offer-card, .hero-info-card`; add `min-width: 0` to `.branch-price-row` and `overflow-wrap: anywhere` to `.branch-price-row span`
    - Rely on Bootstrap below-`lg` source-order column stacking; keep existing clamp() headline sizing and reduced card padding
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 3.2 Constrain form fields to full-width single column in components.css
    - In the `@media (max-width: 767px)` block: add `max-width: 100%` to `.form-control, .form-select, .contact-card textarea`; confirm `.form-control, .form-select { min-height: 48px }` and the `.contact-card .btn-ff { width: 100% }` rule remain in effect for JoinPage and ContactPage
    - Rely on Bootstrap `col-md-6` stacking to single column below `md`; no JSX change expected
    - _Requirements: 7.1, 7.2, 7.3_

  - [ ]* 3.3 Write property test for form fields stacking full width
    - **Feature: mobile-responsive-ux, Property 9: Form fields stack full width in a single column** — on JoinPage and ContactPage, each field and its label render at full container width in one column across the range
    - **Validates: Requirements 7.1**

  - [ ]* 3.4 Write example test for hero source-order stacking
    - On HomePage at a sampled small-phone width, assert the hero headline, hero statistics, and `.hero-offer-card` render stacked vertically in source order (Requirement 3.1, non-property)
    - _Requirements: 3.1_

- [x] 4. Normalize tap-target sizing and navbar behavior
  - [x] 4.1 Apply minimum tap-target sizing in components.css
    - In the `@media (max-width: 767px)` block: add `min-height: 44px; display: inline-flex; align-items: center` to `.nav-link-ff, .btn-join-nav`; add `min-height: 44px` to `.gallery-tabs button, .plan-option`
    - Confirm existing minimums for `.btn-ff` (46px), `.form-control/.form-select` (48px), exercise filters (50px), and `.footer-socials .btn-ff` (44/48px) are not shrunk; rely on existing `gap` to keep adjacent targets from overlapping
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 4.2 Fix navbar brand shrink and stacked links in components.css
    - In the shared/`@media (max-width: 991px)` block: add `min-width: 0` to `.navbar-brand` and `flex: 0 1 auto; min-width: 0; max-width: 100%` to `.navbar-brand-wordmark` so the logo + wordmark + toggler fit without overflow
    - Confirm the `≤991px` collapse stacks `.navbar-nav` full width (`align-items: stretch`) and that stacked `.nav-link-ff` rows keep the 44px floor from 4.1
    - _Requirements: 8.1, 8.2, 8.3_

  - [ ]* 4.3 Write property test for tap-target minimum size
    - **Feature: mobile-responsive-ux, Property 3: Tap targets meet the minimum size** — every Tap_Target (nav links, primary/secondary buttons, form controls, submit button, gallery tabs, exercise filters, footer social actions) renders ≥ 44px in both dimensions across all routes and widths
    - **Validates: Requirements 4.1, 4.2, 7.2, 7.3, 8.3**

  - [ ]* 4.4 Write property test for adjacent tap targets not overlapping
    - **Feature: mobile-responsive-ux, Property 4: Adjacent tap targets do not overlap** — for any two adjacent Tap_Targets across the range, bounding rectangles do not overlap
    - **Validates: Requirements 4.3**

  - [ ]* 4.5 Write interaction test for navbar menu toggle
    - Open the navbar toggle at a sampled small-phone width and assert navigation links display stacked vertically at full width (Requirement 8.2, non-property)
    - _Requirements: 8.2_

- [x] 5. Checkpoint - overflow, stacking, tap targets, navbar
  - Ensure `npm run build` passes and all written tests pass; ask the user if questions arise.

- [ ] 6. Constrain ContactPage map embeds
  - [-] 6.1 Constrain branch-map-grid iframes in components.css
    - In the `@media (max-width: 767px)` block: confirm `.branch-map-grid { grid-template-columns: 1fr }`; add `.branch-map-grid iframe { display: block; width: 100%; max-width: 100%; min-height: 220px }` (≥ the 200px usable-height floor, referencing `--map-min-height`)
    - Rely on the existing inline `width="100%"`/`height="320"` iframe attributes; no JSX change required
    - _Requirements: 5.1, 5.2, 5.3_

  - [ ]* 6.2 Write property test for single-column dense grids
    - **Feature: mobile-responsive-ux, Property 5: Dense grids render as a single non-overlapping column** — every Dense_Grid (including the Branch_Map_Grid) renders as one column with vertically stacked, non-overlapping items across the range
    - **Validates: Requirements 2.1, 2.3, 5.1**

  - [ ]* 6.3 Write property test for map embed usable height
    - **Feature: mobile-responsive-ux, Property 6: Map embeds keep a usable height** — every ContactPage Google Maps iframe renders ≥ 200 CSS px tall across the range
    - **Validates: Requirements 5.3**

- [ ] 7. Apply readable typography and spacing floors
  - [ ] 7.1 Raise sub-floor body copy and confirm edge padding in components.css
    - In the `@media (max-width: 420px)` block: raise genuine body-copy below 14px (e.g. `.branch-price-row span { font-size: 0.9rem }`); leave decorative chips/labels (`.exercise-tags span`) unchanged; confirm section padding (`60px 0` ≤767px), card padding (`20px`), and the 420px container gutter (`1.25rem`) keep text off the viewport edges
    - Keep `h1`/`h2` clamp() upper bounds and `overflow-wrap: anywhere` so headings stay within the viewport
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ]* 7.2 Write property test for body-text readable floor
    - **Feature: mobile-responsive-ux, Property 7: Body text meets the readable floor** — every body-text element renders at an effective font size ≥ 14 CSS px across the range
    - **Validates: Requirements 6.1**

  - [ ]* 7.3 Write property test for content edge clearance
    - **Feature: mobile-responsive-ux, Property 8: Content stays clear of the viewport edges** — every content text block has positive horizontal padding (left edge > 0, right edge < viewport width) across the range
    - **Validates: Requirements 6.3**

- [ ] 8. Preserve desktop/tablet layout and brand
  - [ ]* 8.1 Write desktop-regression property test against a captured baseline
    - **Feature: mobile-responsive-ux, Property 10: Desktop and tablet layout is preserved** — at sampled widths ≥768px, dense-grid column counts and brand computed styles (color, font-family, border-radius, box-shadow) of representative elements match the pre-change baseline; also snapshot brand computed styles for Req 9.1
    - **Validates: Requirements 9.1, 9.3**

- [ ] 9. Final checkpoint - full verification
  - Ensure `npm run build` (`tsc && vite build`) passes and all written tests pass; confirm changes are confined to the Stylesheet_Set plus any minimal additive JSX class hook (diff review for Req 9.2). Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional (test/harness tasks) and can be skipped for a faster MVP; core CSS tasks must be implemented and only require the build to pass.
- All implementation tasks edit only `src/styles/` files; JSX changes are expected to be none (the design audit found existing selectors sufficient) and any hook must add only a `className`.
- Each task references specific requirement clauses for traceability; each property test names its design property and the requirements it validates.
- Property tests use the shared headless-browser harness from task 1.3 and sample ≥100 viewport widths per invariant across 360–430px.
- Checkpoints (tasks 5 and 9) ensure incremental validation; the final checkpoint also covers the Req 9.2 diff review (a manual confirmation, not a coding step).

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1"] },
    { "id": 2, "tasks": ["2.2"] },
    { "id": 3, "tasks": ["3.1"] },
    { "id": 4, "tasks": ["3.2"] },
    { "id": 5, "tasks": ["4.1"] },
    { "id": 6, "tasks": ["4.2"] },
    { "id": 7, "tasks": ["6.1"] },
    { "id": 8, "tasks": ["7.1"] },
    { "id": 9, "tasks": ["2.3", "2.4", "3.3", "3.4", "4.3", "4.4", "4.5", "6.2", "6.3", "7.2", "7.3", "8.1"] }
  ]
}
```
