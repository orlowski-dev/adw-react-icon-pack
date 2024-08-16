import { config } from "./settings";
import { saveFile, toCamelCase } from "./utils";

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
}

export class ComponentTemplate {
  private content: string;
  public name: string;
  private componentName: string;

  constructor(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  public replaceComponentName() {
    if (!this.name) {
      throw Error("Component name is unset!");
    }

    this.componentName = toCamelCase(this.name, true);

    this.content = this.content.replace(
      RegExp("%{componentName}", "g"),
      config.componentNamePrefix + this.componentName,
    );
  }

  public injectSvgContent(svgContent: string) {
    this.content = this.content.replace(RegExp("%{svgContent}"), svgContent);
  }

  public save() {
    saveFile({
      fileName: this.componentName,
      fileExt: "tsx",
      fileContent: this.content,
    });
  }
}
