import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { NOTES, SITE } from "../consts";
import { getNotes } from "../lib/notes";

export async function GET(context: APIContext) {
  const notes = await getNotes();

  return rss({
    title: `${SITE.NAME} · ${NOTES.TITLE}`,
    description: NOTES.DESCRIPTION,
    site: context.site!,
    items: notes.map(note => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      categories: note.data.tags,
      link: `/notes/${note.id}/`,
    })),
  });
}
