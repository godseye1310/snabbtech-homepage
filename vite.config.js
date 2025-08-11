import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/snabbtech-homepage/",
	build: {
		rollupOptions: {
			input: {
				main: resolve("index.html"),
				about: resolve("about.html"),
				services: resolve("services.html"),
				// industry: resolve("industry.html"),
				// portfolio: resolve("portfolio.html"),
				// partnership: resolve("partnership.html"),
				// blog: resolve("blog.html"),
			},
		},
	},
});
