import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	format: ["esm", "cjs"],
	entry: ["src/index.ts", "src/createFetchClient.ts", "src/utils.ts", "src/typeof.ts"],
	target: "es2022",
	clean: true, // clean up dist folder,
	skipNodeModulesBundle: true, // skip building deps for node_modules, simply use them as is
	dts: true,
	minify: !options.watch,
	bundle: false,
	treeshake: true,
	tsconfig: "tsconfig.json",
	sourcemap: !options.watch,
}));
