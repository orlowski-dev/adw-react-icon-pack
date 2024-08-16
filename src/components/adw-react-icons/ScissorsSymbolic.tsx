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
        <path d="m 3.9375 3 c -0.90625 0.382812 -1.203125 1.21875 -0.679688 1.882812 l 3.789063 5.035157 l -1.496094 1.640625 l 1.210938 1.441406 l 1.378906 -1.71875 l 1.355469 1.71875 l 1.199218 -1.382812 l -1.460937 -1.699219 l 3.789063 -5.035157 c 0.523437 -0.664062 0.230468 -1.5 -0.679688 -1.882812 l -4.203125 5.535156 z m 0 0"/>
        <path d="m 7 1 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m -8 2 v 1 h 1 v -1 z m 0 2 v 1 h 1 v -1 z m 5 5 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 4 10 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScissorsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScissorsSymbolic;
