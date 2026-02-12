ECE Engineering Formulas — Local Preview

How to preview

Open the `index.html` file in your browser. From PowerShell run:

```powershell
Start-Process 'C:\Users\Mozzarella\Downloads\Website\index.html'
```

Notes
- The site uses MathJax from CDN to typeset math; an internet connection is required.
- Search and category filters are available. Click a formula card to mark it "viewed" (persisted in localStorage).
- Toggle dark mode using the top-right button; the choice persists.

If you want adjustments (darker theme, typography changes, or removing raw dataset entries), tell me which preference and I'll update the files.

Changes in this update
- Full ECE dataset (49 formulas) added to `script.js` with all `example` properties removed.
- Accessibility improvements: keyboard focus for formula cards (tab + Enter/Space), visible focus outlines, skip link, and ARIA roles for navigation and categories.
- Dark/professional variant added: enable by adding `dark-pro` class to the `<body>` element (or I can wire a UI toggle to switch to it).

If you'd like, I can:
- Wire the UI toggle to switch to the `dark-pro` mode automatically.
- Run a contrast check and adjust colors to meet WCAG levels.
- Expand the dataset format to a separate JSON file for maintainability.
