import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { format } from "prettier";
import { ComponentTemplate, IndexFile, SVG } from "./classes";
import { config } from "./settings";

export const getTemplateContent = (): string => {
  try {
    return readFileSync(config.componentTemplatePath, "utf8");
  } catch (err) {
    console.error(err);
  }
};

export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
};

export const toCamelCase = (str: string, firstUp?: boolean): string => {
  const regex = RegExp("[a-zA-Z0-9]");
  let tempStr = "";
  let nextUp = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      if (tempStr.length === 0 && firstUp) {
        tempStr = str[i].toUpperCase();
        nextUp = false;
        continue;
      }

      tempStr += nextUp ? str[i].toUpperCase() : str[i];
      nextUp = false;
      continue;
    }

    if (str[i + 1] && str[i + 1].match(regex) && tempStr.length !== 0) {
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
      mkdirSync(config.outputDir, { recursive: true });
    }

    if (!config.usePrettier) {
      writeFileSync(filePath, fileContent);
      console.log("saved", filePath);
      return;
    }

    format(fileContent, config.prettierOpts).then((res) => {
      writeFileSync(filePath, res);
      console.log("saved", filePath);
    });
  } catch (err) {
    console.log(err);
  }
};

export const convert = ({
  filePath,
  componentTemplate,
  indexFile,
}: {
  filePath: string;
  componentTemplate: ComponentTemplate;
  indexFile: IndexFile;
}) => {
  try {
    console.log(`converting ${filePath}`);
    const fileContent = readFileSync(filePath, "utf8");
    const svg = new SVG(fileContent);
    svg.removeUnwantedTags();
    svg.replaceFillsValue();
    svg.replaceKebabCaseAttrs();
    svg.addMissingFillAttr();
    componentTemplate.replaceComponentName();
    componentTemplate.injectSvgContent(svg.getContent());
    const savedFileName = componentTemplate.save();
    indexFile.addItem({
      fileName: savedFileName,
      exportName: componentTemplate.getComponentName(),
    });
  } catch (err) {
    console.error(err);
  }
};
