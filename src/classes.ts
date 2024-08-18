import { config } from "./settings";
import { generateRandomString, saveFile, toCamelCase } from "./utils";

interface IndexFileArr {
  exportName: string;
  fileName: string;
}

export class SVG {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  // remove xml and svg tags
  public removeUnwantedTags() {
    if (this.content.startsWith("<?xml")) {
      this.content = this.content.substring(this.content.indexOf("?>") + 2);
    }

    this.content = this.content
      .substring(this.content.indexOf(">") + 1, this.content.indexOf("</svg>"))
      .trim();
  }

  // replace attribue value
  // eg #fff=currentColor
  public replaceAttrValue(value: string) {
    const [oldValue, newValue] = value.split("=");
    this.content = this.content.replace(RegExp(`${oldValue}`, "g"), newValue);
  }

  public replaceFillsValue() {
    this.content = this.content.replace(
      RegExp('fill="[^"]*"', "g"),
      'fill="currentColor"',
    );
  }

  public replaceKebabCaseAttrs() {
    const words = this.content.split(" ");
    words.forEach((word) => {
      if (word.trim().match(/\w+-\w+/)) {
        const [attrName, attrValue] = word.split("=");
        this.content = this.content.replace(
          RegExp(`${word}`, "g"),
          `${toCamelCase(attrName)}=${attrValue}`,
        );
      }
    });
  }

  public addMissingFillAttr() {
    const lines = this.content.split("\n");
    let isGroupPresent = false;

    // check if group tag is present
    // if group has fill attr, skip checking groups children
    lines.forEach((line, index) => {
      line = line.trim();
      if (!isGroupPresent && line.startsWith("<g")) {
        isGroupPresent = true;
        if (line.includes("fill")) return;

        // add fill attr to the group tag
        line = [line.slice(0, line.length - 1), 'fill="currentColor">'].join(
          " ",
        );
        lines[index] = line;
        return;
      }

      if (isGroupPresent && line.startsWith("</g>")) {
        isGroupPresent = false;
        return;
      }

      if (!isGroupPresent && line.startsWith("<path")) {
        if (line.includes("fill")) return;

        line = [line.slice(0, line.length - 2), 'fill="currentColor"/>'].join(
          " ",
        );

        lines[index] = line;
        return;
      }
    });

    this.content = lines.join("\n");
  }
}

export class ComponentTemplate {
  private content: string;
  public name: string;
  private componentName: string;
  private fileName: string;

  constructor(content: string) {
    this.content = content;
    this.replaceID();
  }

  public getContent(): string {
    return this.content;
  }

  public getComponentName(): string {
    return this.componentName;
  }

  private replaceID() {
    this.content = this.content.replace("%{id}", generateRandomString(16));
  }

  public replaceComponentName() {
    if (!this.name) {
      throw Error("Component name is unset!");
    }

    this.fileName = toCamelCase(this.name, true);
    this.componentName = config.componentNamePrefix + this.fileName;

    this.content = this.content.replace(
      RegExp("%{componentName}", "g"),
      this.componentName,
    );
  }

  public injectSvgContent(svgContent: string) {
    this.content = this.content.replace(RegExp("%{svgContent}"), svgContent);
  }

  public save(): string {
    saveFile({
      fileName: this.fileName,
      fileExt: config.outputFileExt,
      fileContent: this.content,
    });

    return this.fileName;
  }
}

export class IndexFile {
  private arr: IndexFileArr[] = [];

  public addItem({ exportName, fileName }: IndexFileArr) {
    this.arr.push({ exportName, fileName });
  }

  public getItems(): IndexFileArr[] {
    return this.arr;
  }

  public save() {
    try {
      let stringToSave = "";
      this.arr.map((item) => {
        stringToSave += `export { default as ${item.exportName} } from "./${item.fileName}"\n`;
      });
      saveFile({
        fileName: "index",
        fileExt: "ts",
        fileContent: stringToSave,
      });
    } catch (err) {
      console.error(err);
    }
  }
}
