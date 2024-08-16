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
        <path d="m 0 4.992188 c 0 -1.644532 1.355469 -3 3 -3 h 8 c 1.644531 0 3 1.355468 3 3 v 2 h -2 v -2 c 0 -0.5625 -0.4375 -1 -1 -1 h -8 c -0.5625 0 -1 0.4375 -1 1 v 5 c 0 0.5625 0.4375 1 1 1 h 3 v 2 h -3 c -1.644531 0 -3 -1.355469 -3 -3 z m 0 0" fill-opacity="0.35"/>
        <path d="m 9 7.992188 c -1.089844 0 -2 0.910156 -2 2 v 3 c 0 1.089843 0.910156 2 2 2 h 5 c 1.089844 0 2 -0.910157 2 -2 v -3 c 0 -1.089844 -0.910156 -2 -2 -2 z m 0 2 h 5 v 3 h -5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWindowShrinkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWindowShrinkSymbolic;
