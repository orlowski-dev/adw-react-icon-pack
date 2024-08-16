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
      <g fill="#2e3436" fill-rule="evenodd"><path d="M2 1v14h2V1z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M3 1a1 1 0 00-1 1v6a1 1 0 001 1h3.383l.722 1.447A1 1 0 008 11h5a1 1 0 001-1V4a1 1 0 00-1-1H9.617l-.722-1.447A1 1 0 008 1zm1 2h3.383l.722 1.447A1 1 0 009 5h3v4H8.617l-.722-1.447A1 1 0 007 7H4z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M3 8h4l1 2h5V4H9L8 2H3z"/></g>
    </svg>
  );
};

const AdwPreferencesDesktopLocaleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesDesktopLocaleSymbolic;
