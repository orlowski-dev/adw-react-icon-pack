import { join, resolve } from "path";

export const baseDir = resolve();

export const config = {
  sourceDir: join(baseDir, "src", "icons"),
  componentTemplatePath: join(baseDir, "src", "componentTemplate"),
  componentNamePrefix: "Adw",
  outputDir: join(baseDir, "src", "components", "adw-react-icon"),
  outputFileExt: "tsx",
  usePrettier: false,
  prettierOpts: { parser: "babel-ts" },
};
