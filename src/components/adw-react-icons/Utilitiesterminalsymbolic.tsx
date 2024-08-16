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
      <g color="#bebebe" fill="#474747"><path d="M2.2 0C.993 0 0 1.007 0 2.209v10.582C0 13.993.994 15 2.2 15h11.6c1.206 0 2.2-1.007 2.2-2.209V2.209C16 1.007 15.006 0 13.8 0zm0 2h11.6c.124 0 .2.071.2.209v10.582c0 .138-.076.209-.2.209H2.2c-.124 0-.2-.071-.2-.209V2.209C2 2.071 2.076 2 2.2 2z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M4.494 5.895a.6.6 0 00-.418 1.029L5.652 8.5l-1.576 1.576a.6.6 0 10.848.848l2-2a.6.6 0 000-.848l-2-2a.6.6 0 00-.43-.181z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M8 10h3v1H8z" style="marker:none" overflow="visible"/></g>
    </svg>
  );
};

const AdwUtilitiesterminalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUtilitiesterminalsymbolic;
