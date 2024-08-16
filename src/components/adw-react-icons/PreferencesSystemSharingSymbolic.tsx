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
      <g color="#000" fill="#474747"><path d="M5.969 7.969A2.969 2.969 0 013 10.937 2.969 2.969 0 01.031 7.97 2.969 2.969 0 013.001 5a2.969 2.969 0 012.968 2.969zm9.969 5a2.969 2.969 0 01-2.97 2.969A2.969 2.969 0 0110 12.967 2.969 2.969 0 0112.969 10a2.969 2.969 0 012.969 2.969zm0-10a2.969 2.969 0 01-2.97 2.969A2.969 2.969 0 0110 2.967 2.969 2.969 0 0112.969 0a2.969 2.969 0 012.969 2.969z" style="marker:none" overflow="visible"/><path d="M12.613 2.146L.748 7.924l11.854 5.969.9-1.788-8.248-4.15 8.234-4.012z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" font-weight="400" font-family="sans-serif" overflow="visible"/></g>
    </svg>
  );
};

const AdwPreferencesSystemSharingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesSystemSharingSymbolic;
