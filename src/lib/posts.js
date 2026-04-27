const postModules = import.meta.glob("../posts/*.md", { eager: true });

function dateFromId(id) {
  const match = id.match(/^(\d{4})-(\d{2})-(\d{1,2})-(.+)$/);

  if (!match) {
    throw new Error(`Invalid post filename: ${id}`);
  }

  const [, year, month, day] = match;
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
}

function slugFromId(id) {
  const match = id.match(/^\d{4}-\d{2}-\d{1,2}-(.+)$/);
  return match?.[1] ?? id;
}

function permalink(date, slug) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `/${year}/${month}/${day}/${slug}/`;
}

export function allPosts() {
  return Object.entries(postModules)
    .map(([path, module]) => {
      const id = path.split("/").pop().replace(/\.md$/, "");
      const date = module.frontmatter.date
        ? new Date(module.frontmatter.date)
        : dateFromId(id);
      const slug = slugFromId(id);

      return {
        id,
        slug,
        date,
        url: permalink(date, slug),
        title: module.frontmatter.title ?? slug,
        comments: module.frontmatter.comments ?? false,
        published: module.frontmatter.published !== false,
        Content: module.Content,
        compiledContent: module.compiledContent,
        frontmatter: module.frontmatter,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
