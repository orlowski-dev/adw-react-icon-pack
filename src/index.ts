import { readdirSync, statSync } from "fs";
import { join } from "path";
import { config } from "./settings";
import { convert, getTemplateContent } from "./utils";
import { ComponentTemplate } from "./classes";

const run = () => {
  const componentTemplate = new ComponentTemplate(getTemplateContent());

  try {
    const files = readdirSync(config.sourceDir);
    files.forEach((file) => {
      const filePath = join(config.sourceDir, file);
      const fileStat = statSync(filePath);
      const [fileName, fileExt] = file.split(".");

      if (!fileStat.isFile() || fileExt !== "svg") return;

      const componentTemplateClone = structuredClone(componentTemplate);
      Object.setPrototypeOf(
        componentTemplateClone,
        ComponentTemplate.prototype,
      );
      componentTemplateClone.name = fileName;

      convert({
        filePath,
        componentTemplate: componentTemplateClone,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

run();
