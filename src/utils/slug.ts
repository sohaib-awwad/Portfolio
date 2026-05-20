export function getSlugFromUrl(): string {
  const last = location.pathname.split("/").filter(Boolean).pop() ?? "";
  return last.replace(/\.html$/, "");
}

export function asset(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  const cleaned = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleaned}`;
}

export function projectUrl(slug: string): string {
  return `${import.meta.env.BASE_URL}projects/${slug}.html`;
}

export function serviceUrl(slug: string): string {
  return `${import.meta.env.BASE_URL}services/${slug}.html`;
}

export function homeUrl(hash = ""): string {
  return `${import.meta.env.BASE_URL}${hash}`;
}
