import { getCollection } from "astro:content";

export async function getNotes() {
  return (await getCollection("notes"))
    .filter(note => !note.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, style: "short" | "long" = "short") {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: style === "long" ? "numeric" : undefined,
    year: "numeric",
    timeZone: "UTC",
  }).format(date).toLowerCase();
}
