# Portfolio Identity Kit

Last updated: 2026-09-20

## 1. Brand Identity

The portfolio presents Robayed Mahmud Rohan as a Full-Stack Developer, using the values below as the single source of truth.

| Item | Value |
| --- | --- |
| Name | Robayed Mahmud Rohan |
| Professional title | Full-Stack Developer |
| Logo | RM monogram (initials) |
| Heading font | Space Grotesk |
| Body font | Inter |
| Brand colors | Deep Blue #2563EB, Near Black #111827, Near White #F8FAFC, Soft Cyan #06B6D4 |

**Portfolio purpose:** a professional portfolio showing web development skills, projects, education, and the ability to build practical software.

## 2. Professional Positioning

Position Robayed as a Full-Stack Developer who builds practical software, and let the work prove it. Every page should support that with evidence, not claims.

The portfolio should make four things easy to find:

- **Skills:** web development skills, stated plainly
- **Projects:** real projects, shown with screenshots of the actual work
- **Education:** background and qualifications
- **Practical ability:** software that works, not just designs

Tone: professional and direct, never flashy. Use the exact title "Full-Stack Developer" wherever a title appears (hero, page title, footer, metadata).

## 3. Typography

Two fonts only: Space Grotesk for headings and Inter for body text.

| Role | Font | Used for |
| --- | --- | --- |
| Primary heading font | Space Grotesk | Page titles, section headings, the name in the header |
| Body font | Inter | Paragraphs, navigation, buttons, labels, captions |

Rules:

- Keep typography readable: comfortable line length and line spacing, no decorative styling.
- Use size and weight differences to create hierarchy, not extra fonts.
- Do not add a third typeface.

Suggested CSS variables (the fallback stacks are an implementation choice, not part of the brand):

```css
:root {
  --font-heading: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
}
```

## 4. Color Palette

Four colors only. The hex values are fixed; the roles below are suggested usage based on contrast.

| Name | Hex | Suggested role |
| --- | --- | --- |
| Deep Blue | #2563EB | Primary: buttons, links, key actions |
| Near Black | #111827 | Body text, headings, dark surfaces |
| Near White | #F8FAFC | Page and section backgrounds |
| Soft Cyan | #06B6D4 | Accent: highlights, borders, small details |

**Accessible pairings** (WCAG contrast ratios calculated from the hex values; 4.5:1 is the minimum for normal text):

| Foreground on background | Ratio | Use |
| --- | --- | --- |
| Near Black on Near White | 16.96:1 | Body text, headings |
| Deep Blue on Near White | 4.94:1 | Links, button outlines, normal and large text |
| Near White on Deep Blue | 4.94:1 | Text inside primary buttons |
| Soft Cyan on Near Black | 7.31:1 | Accent text or icons on dark surfaces |

**Pairings to avoid:**

- Soft Cyan on Near White (2.32:1): fails contrast, so never use it for text or essential icons on light backgrounds. Decorative use only.
- Near Black on Deep Blue (3.43:1): too low for normal text.
- Soft Cyan on Deep Blue (2.13:1): too low for any text.

## 5. Logo and Favicon

The logo is an RM monogram: the initials of Robayed Mahmud Rohan, kept simple and suited to a developer portfolio.

- Use the two letters R and M only, with no extra symbols, icons or effects.
- Draw colors from the four-color palette only.
- The favicon uses the same RM initials where appropriate, so it must stay legible at very small sizes.
- Final logo artwork is not specified in this kit; decide the exact lettering when it is designed.

## 6. Visual Style

The look is professional rather than flashy. Five words define it:

- **Clean:** uncluttered pages, one clear purpose per section
- **Modern:** current, simple layouts
- **Professional:** credible and polished
- **Minimal:** only what helps a visitor understand the work
- **Developer-focused:** built to show technical ability

Motion and effects: no excessive animations or visual effects. Any motion that remains should be subtle and never get in the way of reading or navigating.

## 7. Image Guidelines

Use real screenshots of Robayed's actual projects as the primary imagery.

| Do | Don't |
| --- | --- |
| Use real screenshots of actual projects | Use AI-generated portfolio images |
| Show the work as it really is | Use generic stock images, unless absolutely necessary |

If a stock image is ever unavoidable, treat it as a last resort and replace it with a real screenshot as soon as one exists.

## 8. UI/UX Guidelines

Six principles guide every page. Check new sections against this table.

| Principle | In practice |
| --- | --- |
| Strong visual hierarchy | The name, title and main heading read first; headings, subheadings and body text are clearly distinct in size and weight. |
| Generous spacing | Leave ample whitespace between sections and around content so each item can be read on its own. |
| Readable typography | Space Grotesk for headings, Inter for body; comfortable line length and line spacing. |
| Clear CTAs | Each section has one obvious next action, styled in Deep Blue with a plain, specific label. |
| Responsive design | Layouts work on phone, tablet and desktop, with no horizontal scrolling. |
| Accessible contrast | Text meets WCAG 4.5:1 using only the approved pairings in section 4. |

## 9. Things to Avoid

- Excessive animations or visual effects
- Flashy design; the portfolio should look professional, not showy
- AI-generated portfolio images
- Generic stock images, unless absolutely necessary
- Fonts other than Space Grotesk and Inter
- Colors outside the four-color palette
- Soft Cyan for text on light backgrounds, or any pairing that fails accessible contrast
- Clutter that weakens visual hierarchy or crowds the spacing
- Branding details not defined in this kit; add them here first if they become needed
