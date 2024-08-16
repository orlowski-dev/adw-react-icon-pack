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
        <path d="m 8 1 c -0.207031 0 -0.390625 0.125 -0.46875 0.320312 l -1.726562 4.488282 l -4.484376 1.722656 c -0.425781 0.167969 -0.425781 0.769531 0 0.9375 l 4.484376 1.722656 l 1.726562 4.488282 c 0.167969 0.425781 0.769531 0.425781 0.9375 0 l 1.726562 -4.488282 l 4.484376 -1.722656 c 0.425781 -0.167969 0.425781 -0.769531 0 -0.9375 l -4.484376 -1.722656 l -1.726562 -4.488282 c -0.074219 -0.191406 -0.261719 -0.320312 -0.46875 -0.320312 z m 0 6 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 3.480469 3 c -0.363281 0.011719 -0.589844 0.398438 -0.429688 0.722656 l 0.871094 1.738282 l 1.109375 -0.429688 l 0.429688 -1.109375 l -1.738282 -0.871094 c -0.074218 -0.035156 -0.15625 -0.054687 -0.242187 -0.050781 z m 9.039062 0 c -0.085937 -0.003906 -0.167969 0.015625 -0.242187 0.050781 l -1.738282 0.871094 l 0.429688 1.109375 l 1.109375 0.429688 l 0.871094 -1.738282 c 0.160156 -0.324218 -0.066407 -0.710937 -0.429688 -0.722656 z m -8.597656 7.539062 l -0.871094 1.738282 c -0.210937 0.429687 0.242188 0.882812 0.671875 0.671875 l 1.738282 -0.871094 l -0.429688 -1.109375 z m 8.15625 0 l -1.109375 0.429688 l -0.429688 1.109375 l 1.738282 0.871094 c 0.429687 0.210937 0.882812 -0.242188 0.671875 -0.671875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwExplore2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExplore2Symbolic;
