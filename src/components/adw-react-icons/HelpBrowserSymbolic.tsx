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
      <g fill="#474747"><path d="M8 0C3.585 0 0 3.585 0 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c3.341 0 6 2.659 6 6s-2.659 6-6 6-6-2.659-6-6 2.659-6 6-6z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M7.338 5A2.344 2.344 0 005 7.338v1.324A2.344 2.344 0 007.338 11h1.324A2.344 2.344 0 0011 8.662V7.338A2.344 2.344 0 008.662 5zm0 1h1.324C9.412 6 10 6.588 10 7.338v1.324C10 9.412 9.412 10 8.662 10H7.338C6.588 10 6 9.412 6 8.662V7.338C6 6.588 6.588 6 7.338 6z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M4.719 1.438A5.881 5.881 0 001.437 4.75l3.75 1.875c.252-.64.743-1.17 1.375-1.438zm6.562 0l-1.844 3.75a2.574 2.574 0 011.376 1.437l3.75-1.875a5.881 5.881 0 00-3.282-3.313zm-6.094 8l-3.75 1.874a5.904 5.904 0 003.282 3.25l1.875-3.75a2.59 2.59 0 01-1.407-1.374zm5.625 0a2.59 2.59 0 01-1.406 1.374l1.875 3.75a5.904 5.904 0 003.281-3.25z"/></g>
    </svg>
  );
};

const AdwHelpBrowserSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHelpBrowserSymbolic;
