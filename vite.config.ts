import { defineConfig } from "vite";

const project = (slug: string): [string, string] => [
  `project-${slug}`,
  `projects/${slug}.html`,
];

const service = (slug: string): [string, string] => [
  `service-${slug}`,
  `services/${slug}.html`,
];

export default defineConfig({
  base: "/Portfolio/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: Object.fromEntries([
        ["main", "index.html"],
        project("evo-team"),
        project("jobline"),
        project("floppy-portfolio"),
        project("web-design-template"),
        project("vanora"),
        project("lms-dashboard"),
        service("full-stack"),
        service("ui-ux"),
        service("brand"),
        service("notion"),
      ]),
    },
  },
});
