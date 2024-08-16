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
      <g fill="#474747"><path d="M3.025 0l.034.002a2.086 2.086 0 00-.159 0h-.02l-.024.002A1.98 1.98 0 001 2.045v11.914A1.981 1.981 0 003.041 16h9.918A1.98 1.98 0 0015 13.96V5a1.991 1.991 0 00-.617-1.422L11.426.62A1.99 1.99 0 0010.004 0h-.008zm-.017 2c-.002-.002.005 0 .002 0h6.965c-.01 0 .014.011.007.004l.008.008 2.998 3.002.008.006c-.007-.007.004.019.004.01v8.959c-.001-.08-.093.01-.012.012H3.012c.081-.001-.01-.092-.012-.012V2.011c.001.055.027.005.008-.01z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M8 4.877c-2.24 0-4.06 1.82-4.06 4.06A4.063 4.063 0 008 12.998c2.24 0 4.06-1.82 4.06-4.06A4.063 4.063 0 008 4.877zm0 1a3.043 3.043 0 013.06 3.06A3.043 3.043 0 018 11.999a3.043 3.043 0 01-3.06-3.06A3.043 3.043 0 018 5.877z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M8 6.938c-1.1 0-2 .9-2 2 0 1.099.9 2 2 2s2-.901 2-2c0-1.1-.9-2-2-2zm0 1c.563 0 1 .437 1 1 0 .562-.437 1-1 1s-1-.438-1-1c0-.563.437-1 1-1z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#bebebe" font-weight="400" font-family="sans-serif" overflow="visible"/><path d="M6.331 5.6a2.991 2.991 0 00-1.669 1.684l1.908.954a1.31 1.31 0 01.699-.731zm3.338 0L8.73 7.507c.322.136.571.405.7.731l1.907-.954A2.991 2.991 0 009.668 5.6zm-3.1 4.069l-1.907.953c.309.757.91 1.348 1.67 1.653l.953-1.907a1.318 1.318 0 01-.715-.7zm2.861 0a1.316 1.316 0 01-.715.699l.954 1.907a3.003 3.003 0 001.669-1.653z"/></g>
    </svg>
  );
};

const AdwHelpcontentssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHelpcontentssymbolic;
