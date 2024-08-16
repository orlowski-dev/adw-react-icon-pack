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
        <path d="m 2 8 c 0 -3.308594 2.691406 -6 6 -6 s 6 2.691406 6 6 s -2.691406 6 -6 6 s -6 -2.691406 -6 -6 z m 14 0 c 0 -4.421875 -3.578125 -8 -8 -8 s -8 3.578125 -8 8 s 3.578125 8 8 8 s 8 -3.578125 8 -8 z m 0 0"/>
        <path d="m 7 10 v -4 l -1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -4 c -0.550781 0 -1 0.449219 -1 1 v 4 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 z m 0 0"/>
        <path d="m 6.292969 7.707031 l 3.242187 3.242188 c 0.390625 0.390625 1.023438 0.390625 1.414063 0 s 0.390625 -1.023438 0 -1.414063 l -3.242188 -3.242187 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 s -0.390625 1.023437 0 1.414062 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrow3TopLeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow3TopLeftSymbolic;
