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
      <g fill="#474747"><path d="M9 6c-1.09 0-2 .91-2 2v3c0 1.09.91 2 2 2h5c1.09 0 2-.91 2-2V8c0-1.09-.91-2-2-2zm0 2h5v3H9z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M11.5 15C9 15 9 14.5 9 14.5c0-.5.5-.5.5-.5h4c.5 0 .5.5.5.5s0 .5-2.5.5zM3 1v1h5V1zM2 3c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1V6h4.775A2.98 2.98 0 019 5h1V4c0-.554-.446-1-1-1H3zm1 4v3h3V8c0-.353.07-.686.182-1z"/></g>
    </svg>
  );
};

const AdwPreferencessystemdevicessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencessystemdevicessymbolic;
