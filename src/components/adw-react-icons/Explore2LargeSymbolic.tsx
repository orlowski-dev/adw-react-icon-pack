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
        <path d="m 2.714844 2.171875 c -0.371094 0.023437 -0.664063 0.421875 -0.488282 0.808594 l 1.023438 2.304687 l 1.46875 -0.566406 l 0.566406 -1.46875 l -2.304687 -1.027344 c -0.089844 -0.039062 -0.179688 -0.054687 -0.265625 -0.046875 z m 10.558594 0.003906 c -0.085938 -0.003906 -0.171876 0.011719 -0.25 0.050781 l -2.308594 1.023438 l 0.566406 1.46875 l 1.472656 0.566406 l 1.023438 -2.304687 c 0.09375 -0.214844 0.046875 -0.46875 -0.117188 -0.632813 c -0.105468 -0.105468 -0.246094 -0.167968 -0.386718 -0.171875 z m -0.523438 8.539063 l -1.46875 0.566406 l -0.566406 1.46875 l 2.308594 1.027344 c 0.476562 0.210937 0.964843 -0.28125 0.753906 -0.757813 z m -9.5 0 l -1.023438 2.304687 c -0.214843 0.476563 0.277344 0.96875 0.753907 0.757813 l 2.304687 -1.023438 l -0.566406 -1.472656 z m 0 0"/>
        <path d="m 8.003906 0 c -0.238281 0 -0.453125 0.144531 -0.535156 0.367188 l -1.972656 5.128906 l -5.128906 1.972656 c -0.488282 0.1875 -0.488282 0.875 0 1.0625 l 5.128906 1.972656 l 1.972656 5.128906 c 0.1875 0.488282 0.875 0.488282 1.066406 0 l 1.972656 -5.128906 l 5.125 -1.972656 c 0.488282 -0.1875 0.488282 -0.875 0 -1.0625 l -5.125 -1.972656 l -1.972656 -5.128906 c -0.085937 -0.21875 -0.296875 -0.367188 -0.53125 -0.367188 z m -0.003906 7 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwExplore2LargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExplore2LargeSymbolic;
