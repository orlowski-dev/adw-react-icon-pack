"use client";

import { createElement, type HTMLAttributes, useId } from "react";

interface Props {
  title?: string;
  size?: number;
  wrapper?: "div" | "span";
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | HTMLAttributes<HTMLSpanElement>;
}

const SvgTemplate = ({ title, size }: Props) => {
  const id = useId();
  const sizeEm = size ? `${size / 16}em` : "1.5em";

  return (
    <svg
      height={sizeEm}
      viewBox="0 0 16 16"
      width={sizeEm}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={title ? id : undefined}
    >
      {title ? <title id={id}>{title}</title> : undefined}
      <g fill="#474747"><path d="M9.57 1.184c-.567.078-1.251.35-2.015.753-1.541-.844-2.741-.896-3.748-.638-1.07.274-1.938.722-3.291.681L0 1.965v10.81h.5c1.322 0 2.48-.601 3.555-.867 1.075-.265 1.992-.296 3.144.738l.338.305.336-.308c1.119-1.033 2.01-1.004 3.074-.74 1.065.263 2.224.864 3.55.872l.503.004V1.982L14.482 2c-1.516.055-2.27-.394-3.25-.684a3.84 3.84 0 00-1.662-.132zm.11.96c.478-.07.854.01 1.267.131.726.215 1.679.602 3.053.664v8.707c-.875-.127-1.778-.459-2.812-.714-1.12-.277-2.408-.163-3.655.8-1.278-.967-2.586-1.074-3.717-.795-1.043.258-1.946.59-2.816.711v-8.73c1.274-.073 2.247-.444 3.055-.65.924-.237 1.727-.287 3.242.623l.252.152.254-.147C8.62 2.43 9.2 2.214 9.68 2.145z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M7 2.397h1V12H7z"/><path d="M0 2.5V16h15V2.518h-2V14H2V2.5z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M.938 14.75v-2.188l4.219-1.13 2.343.597 2.387-.671 3.742 1.003v2.451z" style="marker:none" color="#000" overflow="visible" opacity=".3"/></g>
    </svg>
  );
};

const AdwAccessoriesdictionarysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAccessoriesdictionarysymbolic;
