import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { ComponentTemplate, SVG } from "./classes";
import { config } from "./settings";

export const getTemplateContent = (): string => {
  try {
    return readFileSync(config.componentTemplatePath, "utf8");
  } catch (err) {
    console.error(err);
  }
};

export const toCamelCase = (str: string, firstUp?: boolean): string => {
  let tempStr = "";
  let nextUp = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-") {
      if (tempStr.length === 0 && firstUp) {
        tempStr = str[i].toUpperCase();
        nextUp = false;
        continue;
      }

      tempStr += nextUp ? str[i].toUpperCase() : str[i];
      nextUp = false;
      continue;
    }

    if (str[i + 1] !== "-" && tempStr.length !== 0) {
      nextUp = true;
    }
  }

  return tempStr;
};

export const saveFile = ({
  fileName,
  fileExt,
  fileContent,
}: {
  fileName: string;
  fileExt: string;
  fileContent: string;
}) => {
  try {
    const filePath = join(config.outputDir, `${fileName}.${fileExt}`);
    // create output dir if not exist
    if (!existsSync(config.outputDir)) {
      mkdirSync(config.outputDir);
    }

    writeFileSync(filePath, fileContent);
    console.log("saved", filePath);
  } catch (err) {
    console.log(err);
  }
};

export const convert = ({
  filePath,
  componentTemplate,
}: {
  filePath: string;
  componentTemplate: ComponentTemplate;
}) => {
  try {
    console.log(`converting ${filePath}`);
    const fileContent = readFileSync(filePath, "utf8");
    const svg = new SVG(fileContent);
    svg.removeUnwantedTags();
    svg.replaceAttrValue("#222222=currentColor");
    componentTemplate.replaceComponentName();
    componentTemplate.injectSvgContent(svg.getContent());
    componentTemplate.save();
  } catch (err) {
    console.error(err);
  }
};
