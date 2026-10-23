## Design Context

### Users
Primary audience is engineering peers and open-source maintainers evaluating technical depth.
Secondary audience is interview decision-makers reviewing systems and full-stack capability.

### Brand Personality
Minimal, trustworthy, pragmatic.
The interface should feel precise, calm, and engineering-first.

### Aesthetic Direction
Hand-drawn notebook look from the Sketch theme (`src/sketch.css`, copied from `~/design/sketch-theme/`; its `DESIGN.md` is the reference).
Dotted paper, wobbly 2px ink borders, small tilts, Itim/Mali handwriting with monospace code. Light and dark themes.
No emoji: icons are SVG (`react-icons`) and hand-drawn SVG strokes (`src/components/Sketch.jsx`).
Marker colors keep one meaning each (green = good/live, red = scribble underline); tech logos stay in ink, not brand colors.
No gradients, no box-shadows.

### Design Principles
- Prioritize legibility and information hierarchy over decoration.
- Keep interactions quiet, fast, and purposeful.
- Use consistent spacing and tokenized styling for visual discipline.
- Reflect low-level engineering credibility through concise copy and technical clarity.
- Optimize for mobile-first readability and accessibility.

### Delivery Constraints
- Quality bar: MVP (fast and solid)
- Shipping target: immediate
