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
      <g fill="#474747"><path d="M3 8h10v7.059c0 .492-.472.937-.996.937H4c-.539 0-1-.43-1-1z" style="marker:none" color="#bebebe" overflow="visible"/><path d="M6.793 2.969a1 1 0 00-.752.379L3.225 6.807a1 1 0 00-.225.63v1a1 1 0 102 0v-.644L7.592 4.61a1 1 0 00-.799-1.642zm2.213 3.004a1 1 0 00-.144 1.988l2.17.379v.16a1 1 0 102 0v-1a1 1 0 00-.828-.984L9.205 5.99a1 1 0 00-.199-.017z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"/></g>
    </svg>
  );
};

const AdwSystemsoftwareinstallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemsoftwareinstallsymbolic;
