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
        project("stambat-saas"),
        project("web-design-template"),
        project("tafweej"),
        project("msar"),
        project("elm-arkan"),
        project("vanora"),
        project("cor-coffee-house"),
        project("floppy-gym-tracker"),
        project("lms-dashboard"),
        service("full-stack"),
        service("ui-ux"),
        service("brand"),
        service("notion"),
      ]),
    },
  },
});
