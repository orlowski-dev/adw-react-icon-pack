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
        <path d="m 4 0 c -2.199219 0 -4 1.800781 -4 4 v 8 c 0 2.199219 1.800781 4 4 4 h 8 c 2.199219 0 4 -1.800781 4 -4 v -8 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 2 h 8 c 1.125 0 2 0.875 2 2 v 8 c 0 1.125 -0.875 2 -2 2 h -8 c -1.125 0 -2 -0.875 -2 -2 v -8 c 0 -1.125 0.875 -2 2 -2 z m 0 0"/>
        <path d="m 4 4 c 0.550781 0 1 0.449219 1 1 v 6 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -6 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 10.5 3.796875 c -1.375 0 -2.5 1.125 -2.5 2.5 v 3.390625 c 0 1.378906 1.125 2.5 2.5 2.5 s 2.5 -1.121094 2.5 -2.5 v -3.390625 c 0 -1.375 -1.125 -2.5 -2.5 -2.5 z m 0 1.90625 c 0.492188 0 0.875 0.386719 0.875 0.878906 v 2.730469 c 0 0.492188 -0.382812 0.875 -0.875 0.875 s -0.875 -0.382812 -0.875 -0.875 v -2.730469 c 0 -0.492187 0.382812 -0.878906 0.875 -0.878906 z m 0 0"/>
        <path d="m 6 6 h 1 v 1 h -1 z m 0 0"/>
        <path d="m 6 9 h 1 v 1 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScoreSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScoreSymbolic;
