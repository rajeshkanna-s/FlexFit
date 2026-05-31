# Requirements Document

## Introduction

The FlexFit marketing site is consumed almost entirely (≈95%) on small phones, yet several pages were authored with desktop-first grids and dense multi-column layouts. The goal of this feature is to make every page render correctly on small phones (≈360px–430px viewport width) while preserving the current visual design. This is a layout-correction effort, not a visual redesign or a mobile-interaction overhaul.

Scope is deliberately constrained to layout problems: eliminating horizontal overflow, stacking dense grids into readable single or paired columns, ensuring readable typography and spacing, guaranteeing consistent minimum tap-target sizes, and keeping embedded content (Google Maps iframes, exercise media tiles) within the viewport. Work is CSS-focused, primarily within and refining the existing `420px` and `767px` breakpoints in `src/styles/`, with only minimal JSX class adjustments where a class hook is missing. The existing colors, fonts, card styles, shadows, and brand look are retained.

The following are explicitly OUT of scope: visual/brand refresh, changes to desktop or tablet (≥768px) layouts beyond what is needed to fix the mobile cascade, video playback behavior on ExercisePage (autoplay, lazy-loading, intersection observers, tap-to-play), and any change to application logic, routing, or data.

## Glossary

- **Site**: The FlexFit React + Vite + TypeScript single-page application served via React Router.
- **Page**: Any top-level route view in `src/pages/` (HomePage, AboutPage, ProgramsPage, MembershipPage, GalleryPage, ExercisePage, ContactPage, JoinPage, PrivacyPage, TermsPage).
- **Small_Phone_Range**: The target viewport width range of 360px to 430px inclusive (CSS px), portrait orientation.
- **Horizontal_Overflow**: Content whose rendered width exceeds the viewport width, causing the page or document body to scroll sideways.
- **Tap_Target**: An interactive element (button, link, form control, navigation item, icon action) that a user activates by touch.
- **Min_Tap_Size**: The minimum rendered interactive size of 44 CSS px in both width and height for any Tap_Target.
- **Dense_Grid**: A multi-column CSS grid that is too narrow to be legible on a Small_Phone, specifically: `legacy-plan-grid`, `plan-compare-grid`, `plan-compare-controls`, `plan-compare-meta`, `plan-compare-columns`, `gallery-grid`, `impact-strip`, `program-path`, and `exercise-grid`.
- **Stylesheet_Set**: The custom CSS files in `src/styles/` (`global.css`, `variables.css`, `components.css`).
- **Existing_Breakpoint**: The currently defined responsive breakpoints at `max-width: 991px`, `max-width: 767px`, and `max-width: 420px`.
- **Branch_Map_Grid**: The `branch-map-grid` container on ContactPage that holds Google Maps `<iframe>` embeds.
- **Form_View**: A page containing user input controls, specifically JoinPage and ContactPage.
- **Visual_Design**: The current set of brand colors, typography, card backgrounds, borders, radii, and shadows defined in the Stylesheet_Set.

## Requirements

### Requirement 1: No horizontal overflow on any page

**User Story:** As a mobile visitor, I want every page to fit within my phone screen width, so that I never have to scroll sideways to read content.

#### Acceptance Criteria

1. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL render that Page without Horizontal_Overflow.
2. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL constrain every Dense_Grid, embedded media element, and text block to a rendered width no greater than the viewport width.
3. IF a content element would otherwise exceed the viewport width within the Small_Phone_Range, THEN THE Site SHALL wrap, scale, or reflow that element to remain within the viewport width.

### Requirement 2: Dense grids stack into readable layouts

**User Story:** As a mobile visitor, I want multi-column sections to stack into readable columns, so that cards and text are not cramped or truncated.

#### Acceptance Criteria

1. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL render each Dense_Grid as a single column.
2. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL preserve readable spacing between stacked Dense_Grid items using the gap and padding tokens defined in the Stylesheet_Set.
3. WHEN a Dense_Grid is stacked within the Small_Phone_Range, THE Site SHALL keep each item's text content fully visible without truncation or overlap.

### Requirement 3: Hero and offer card stacking

**User Story:** As a mobile visitor, I want hero sections and offer cards to stack vertically, so that headlines, pricing, and calls to action remain legible and ordered.

#### Acceptance Criteria

1. WHILE the HomePage hero is viewed within the Small_Phone_Range, THE Site SHALL stack the hero headline, hero statistics, and hero offer card vertically in source order.
2. WHILE a hero offer card or hero info card is viewed within the Small_Phone_Range, THE Site SHALL render that card at full container width without Horizontal_Overflow.
3. WHILE the HomePage hero is viewed within the Small_Phone_Range, THE Site SHALL keep hero headline text and pricing text within the viewport width without character clipping.

### Requirement 4: Consistent minimum tap-target sizing

**User Story:** As a mobile visitor, I want buttons and links to be large enough to tap accurately, so that I can navigate and act without mis-taps.

#### Acceptance Criteria

1. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL render every Tap_Target at no less than the Min_Tap_Size in both width and height.
2. THE Site SHALL apply the Min_Tap_Size to navigation links, primary and secondary buttons, form controls, gallery filter tabs, exercise filter controls, and footer social actions.
3. WHILE two or more Tap_Targets are adjacent within the Small_Phone_Range, THE Site SHALL provide spacing sufficient to prevent overlapping touch areas.

### Requirement 5: ContactPage map embeds fit the viewport

**User Story:** As a mobile visitor, I want branch location maps to fit my screen, so that I can view each branch map without sideways scrolling.

#### Acceptance Criteria

1. WHILE the ContactPage is viewed within the Small_Phone_Range, THE Site SHALL render the Branch_Map_Grid as a single column.
2. WHILE the ContactPage is viewed within the Small_Phone_Range, THE Site SHALL constrain each Google Maps iframe to the container width without Horizontal_Overflow.
3. WHILE a Google Maps iframe is rendered within the Small_Phone_Range, THE Site SHALL maintain a usable map height of at least 200 CSS px.

### Requirement 6: Readable typography and spacing at small widths

**User Story:** As a mobile visitor, I want text and spacing sized for small screens, so that I can read content comfortably without zooming.

#### Acceptance Criteria

1. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL render body text at no less than 14 CSS px effective font size.
2. WHILE a heading is viewed within the Small_Phone_Range, THE Site SHALL size the heading to remain within the viewport width without character clipping.
3. WHILE a Page is viewed within the Small_Phone_Range, THE Site SHALL apply section and card padding that prevents text from touching the viewport edges.

### Requirement 7: Forms usable on phones

**User Story:** As a mobile visitor, I want forms to be easy to complete on my phone, so that I can join or contact the gym without friction.

#### Acceptance Criteria

1. WHILE a Form_View is viewed within the Small_Phone_Range, THE Site SHALL render each form field and its label at full container width in a single column.
2. WHILE a form control is viewed within the Small_Phone_Range, THE Site SHALL render that control at no less than the Min_Tap_Size in height and without Horizontal_Overflow.
3. WHILE a Form_View submit action is viewed within the Small_Phone_Range, THE Site SHALL render the submit button within the viewport width and at no less than the Min_Tap_Size.

### Requirement 8: Navbar and menu behavior on phones

**User Story:** As a mobile visitor, I want the navigation menu to work correctly on my phone, so that I can reach any page reliably.

#### Acceptance Criteria

1. WHILE the navbar is viewed within the Small_Phone_Range, THE Site SHALL render the brand logo and the menu toggle within the viewport width without Horizontal_Overflow.
2. WHEN the menu toggle is activated within the Small_Phone_Range, THE Site SHALL display navigation links stacked vertically at full width.
3. WHILE a navigation link is displayed within the Small_Phone_Range, THE Site SHALL render that link at no less than the Min_Tap_Size.

### Requirement 9: Preserve current visual design

**User Story:** As a site owner, I want the mobile fixes to keep our existing look, so that the brand presentation stays consistent.

#### Acceptance Criteria

1. WHEN layout corrections are applied, THE Site SHALL retain the Visual_Design colors, fonts, card styles, borders, radii, and shadows defined in the Stylesheet_Set.
2. WHEN layout corrections are applied, THE Site SHALL confine changes to the Stylesheet_Set and minimal JSX class additions, without altering page content, routing, or application logic.
3. WHILE a Page is viewed at viewport widths of 768 CSS px and above, THE Site SHALL preserve the existing desktop and tablet layout except where a shared rule is required to correct the Small_Phone_Range cascade.
