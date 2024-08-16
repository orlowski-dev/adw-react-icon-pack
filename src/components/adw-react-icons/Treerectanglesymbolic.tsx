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
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 9 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -9 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 10.46875 7 c -0.132812 0 -0.261719 0.050781 -0.355469 0.144531 l -2.46875 2.5 c -0.191406 0.195313 -0.191406 0.515625 0 0.710938 c 0.195313 0.191406 0.515625 0.191406 0.710938 0 l 2.46875 -2.5 c 0.191406 -0.195313 0.191406 -0.515625 0 -0.710938 c -0.09375 -0.09375 -0.222657 -0.144531 -0.355469 -0.144531 z m 0 0"/>
        <path d="m 4 0 c -2.199219 0 -4 1.800781 -4 4 v 5 c 0 2.199219 1.800781 4 4 4 h 8 c 2.199219 0 4 -1.800781 4 -4 v -5 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 2 h 8 c 1.125 0 2 0.875 2 2 v 5 c 0 1.125 -0.875 2 -2 2 h -8 c -1.125 0 -2 -0.875 -2 -2 v -5 c 0 -1.125 0.875 -2 2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTreerectanglesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTreerectanglesymbolic;
