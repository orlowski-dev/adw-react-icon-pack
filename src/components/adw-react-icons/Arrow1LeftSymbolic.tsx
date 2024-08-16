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
        <path d="m 8.699219 11.71875 c -0.398438 0.382812 -1.03125 0.375 -1.414063 -0.019531 l -2.917968 -3 c -0.378907 -0.390625 -0.378907 -1.007813 0 -1.394531 l 2.917968 -3 c 0.382813 -0.398438 1.015625 -0.40625 1.414063 -0.019532 c 0.394531 0.382813 0.402343 1.015625 0.019531 1.414063 l -2.242188 2.300781 l 2.242188 2.304688 c 0.382812 0.394531 0.375 1.027343 -0.019531 1.414062 z m 0 0" fill-rule="evenodd"/>
        <path d="m 6 7 h 9 c 0.550781 0 1 0.449219 1 1 c 0 0.554688 -0.449219 1 -1 1 h -9 c -0.550781 0 -1 -0.445312 -1 -1 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrow1LeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow1LeftSymbolic;
