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
      <g color="#000" fill="#474747"><path d="M8 1C5.797 1 4 2.797 4 5c0 2.203 1.797 4 4 4 2.203 0 4-1.797 4-4 0-2.203-1.797-4-4-4zm0 1.066A2.926 2.926 0 0110.934 5 2.926 2.926 0 018 7.934 2.926 2.926 0 015.067 5 2.926 2.926 0 018 2.066z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M4 8c-2.203 0-4 1.797-4 4 0 2.203 1.797 4 4 4 2.203 0 4-1.797 4-4 0-2.203-1.797-4-4-4zm0 1.066A2.926 2.926 0 016.934 12 2.926 2.926 0 014 14.934 2.926 2.926 0 011.067 12 2.926 2.926 0 014 9.066z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M15.998 12A4 4 0 0112 16a4 4 0 01-4-4 4 4 0 014-4 4 4 0 013.998 4z" style="marker:none" overflow="visible"/><path d="M7.467 12A3.467 3.467 0 014 15.467 3.467 3.467 0 01.534 12 3.467 3.467 0 014 8.533 3.467 3.467 0 017.467 12z" style="marker:none" overflow="visible" opacity=".5"/></g>
    </svg>
  );
};

const AdwPreferencescolorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencescolorsymbolic;
