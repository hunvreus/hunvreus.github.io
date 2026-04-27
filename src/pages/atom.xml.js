import { site } from "../lib/site.js";
import { allPosts } from "../lib/posts.js";

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteUrls(html) {
  return html
    .replaceAll('href="/', `href="${site.url}/`)
    .replaceAll('src="/', `src="${site.url}/`);
}

export async function GET() {
  const updated = new Date().toISOString();
  const entries = await Promise.all(
    allPosts()
      .slice(0, 10)
      .map(async (post) => {
        const content = absoluteUrls(await post.compiledContent());

        return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${site.url}${post.url}"/>
    <updated>${post.date.toISOString()}</updated>
    <id>${site.url}${post.url}</id>
    <content type="html">${escapeXml(content)}</content>
  </entry>`;
      }),
  );

  return new Response(`<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Ronan Berder</title>
  <link href="${site.url}/atom.xml" rel="self"/>
  <link href="${site.url}/"/>
  <updated>${updated}</updated>
  <id>${site.url}/</id>
  <author>
    <name>${escapeXml(site.author)}</name>
    <email>${escapeXml(site.email)}</email>
  </author>
${entries.join("\n")}
</feed>
`, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
