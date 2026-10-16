// Everything you'd want to edit on the site lives here.

export const SITE = {
  NAME: "Noelia Miranda",
  TITLE: "Noelia Miranda",
  DESCRIPTION: "Software engineer from Córdoba, Argentina. Backend, notes and a bit of me.",
  EMAIL: "naylenmiranda@gmail.com",
  NOTES_ON_HOMEPAGE: 3,
};

export const NOTES = {
  TITLE: "Notes",
  DESCRIPTION: "Short notes on things I run into while building software.",
};

// The first link is drawn as the "default" button.
export const SOCIALS = [
  { NAME: "LinkedIn", HREF: "https://www.linkedin.com/in/noelia-a-miranda/" },
  { NAME: "GitHub", HREF: "https://github.com/namiranda" },
  { NAME: "Email", HREF: `mailto:${SITE.EMAIL}` },
];

export const NOW = [
  { LABEL: "working on", TEXT: "Backend for returns at Mercado Envíos" },
  { LABEL: "learning", TEXT: "How to hand the boring parts of my job to AI (and which parts not to)" },
  { LABEL: "reading", TEXT: "Nothing — deep in a reading slump. Recommendations welcome." },
  { LABEL: "away from keys", TEXT: "Finishing Silksong and counting down to the Ocarina of Time remake." },
];

export const EXPERIENCE = [
  {
    WHEN: "2025 — now",
    ROLE: "Software Engineer · Mercado Libre",
    WHAT: "Building backend services in Go for Mercado Envíos' reverse logistics, and finding ways to make our day-to-day work simpler with AI.",
  },
  {
    WHEN: "2021 — 2025",
    ROLE: "Software Engineer · redbee Studios",
    WHAT: "Built and maintained the transactional core of Payway's payment gateway.",
  },
];
