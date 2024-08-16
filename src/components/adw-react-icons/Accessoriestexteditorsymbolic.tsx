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
      <g color="#000" font-weight="400" fill="#474747"><path d="M5.5 6.007a.5.5 0 100 1h6a.5.5 0 100-1zm0 2a.5.5 0 100 1h5a.5.5 0 100-1zm0 2a.5.5 0 100 1h6a.5.5 0 100-1zm0 2a.5.5 0 100 1h3a.5.5 0 100-1z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" font-family="sans-serif" overflow="visible"/><path d="M4 1.007c-1.09 0-2 .91-2 2v11c0 1.09.91 2 2 2h9c1.09 0 2-.91 2-2v-11c0-1.09-.91-2-2-2v13H4v-13z" style="line-height:normal;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" font-family="Sans" overflow="visible"/><path d="M5.492 0A.5.5 0 005 .506v3a.5.5 0 101 0v-3A.5.5 0 005.492 0zm2 0A.5.5 0 007 .506v3a.5.5 0 101 0v-3A.5.5 0 007.492 0zm2 0A.5.5 0 009 .506v3a.5.5 0 101 0v-3A.5.5 0 009.492 0zm2 0A.5.5 0 0011 .506v3a.5.5 0 101 0v-3A.5.5 0 0011.492 0z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" font-family="sans-serif" overflow="visible"/></g>
    </svg>
  );
};

const AdwAccessoriestexteditorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAccessoriestexteditorsymbolic;
