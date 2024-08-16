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
      <g fill="currentColor">
        <path d="m 1.53125 0.46875 l -1.058594 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
        <path d="m 3.71875 1.003906 s -1.265625 -0.011718 -1.265625 1.492188 v 0.445312 l 8.324219 8.324219 l 3.570312 -2.039063 c 0.433594 -0.242187 0.65625 -0.734374 0.65625 -1.226562 s -0.222656 -0.984375 -0.65625 -1.222656 l -9.796875 -5.597656 c -0.210937 -0.121094 -0.453125 -0.175782 -0.699219 -0.175782 z m -1.265625 4.058594 v 8.433594 c 0 1.5 1.265625 1.5 1.265625 1.5 h 0.132812 c 0.246094 0 0.488282 -0.054688 0.699219 -0.171875 l 4.875 -2.785157 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPlayLargeDiabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlayLargeDiabledSymbolic;
