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
        <path d="m 12.5 15 h -8 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 8 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 0"/>
        <path d="m 11 9 h -5 v 7 h 5 z m 0 0"/>
        <path d="m 0 8 c 0 2.144531 1.144531 4.125 3 5.195312 c 1.855469 1.074219 4.144531 1.074219 6 0 c 1.855469 -1.070312 3 -3.050781 3 -5.195312"/>
        <path d="m 8 5 h -7 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 7 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 9 6 h -1 v 1 h 1 z m 0 0"/>
        <path d="m 14.800781 0 h -3.601562 c -0.660157 0 -1.199219 0.539062 -1.199219 1.199219 v 5.601562 c 0 0.660157 0.539062 1.199219 1.199219 1.199219 h 3.601562 c 0.660157 0 1.199219 -0.539062 1.199219 -1.199219 v -5.601562 c 0 -0.660157 -0.539062 -1.199219 -1.199219 -1.199219 z m 0 0"/>
        <path d="m 11 7 h -1 v 1 h 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwToilets2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwToilets2Symbolic;
