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

// TODO: replace the [bracketed] placeholders before merging.
export const NOW = [
  { LABEL: "working on", TEXT: "Backend services at Mercado Libre — [what area / team?]" },
  { LABEL: "learning", TEXT: "[e.g. how I'm folding AI tools into my day-to-day]" },
  { LABEL: "reading", TEXT: "[a book you're into]" },
  { LABEL: "away from keys", TEXT: "[a hobby or two]" },
];

export const EXPERIENCE = [
  {
    WHEN: "20XX — now",
    ROLE: "Software Engineer · Mercado Libre",
    WHAT: "[One line on what you build and one concrete thing you're proud of.]",
  },
  {
    WHEN: "20XX — 20XX",
    ROLE: "[Previous role · Company]",
    WHAT: "[Short summary.]",
  },
];
