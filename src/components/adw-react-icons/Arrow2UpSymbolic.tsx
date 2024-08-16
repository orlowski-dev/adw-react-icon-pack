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
        <path d="m 14.292969 8.707031 l -7 -7 h 1.414062 l -7 7 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.3906252 -0.390625 -0.3906252 -1.023437 0 -1.414062 l 7 -7 c 0.390625 -0.3906252 1.023437 -0.3906252 1.414062 0 l 7 7 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023437 0.390625 -1.414062 0 z m 0 0"/>
        <path d="m 9 1 v 14 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -14 c 0 -0.550781 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrow2UpSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow2UpSymbolic;
