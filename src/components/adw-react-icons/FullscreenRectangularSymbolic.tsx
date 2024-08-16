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
        <path d="m 2 1 c -1.089844 0 -2 0.910156 -2 2 v 3 h 2 v -3 h 4 v -2 z m 0 0"/>
        <path d="m 14 15 c 1.089844 0 2 -0.910156 2 -2 v -3 h -2 v 3 h -4 v 2 z m 0 0"/>
        <path d="m 14 1 c 1.089844 0 2 0.910156 2 2 v 3 h -2 v -3 h -4 v -2 z m 0 0"/>
        <path d="m 2 15 c -1.089844 0 -2 -0.910156 -2 -2 v -3 h 2 v 3 h 4 v 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFullscreenRectangularSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFullscreenRectangularSymbolic;
