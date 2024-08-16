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
      <g fill="currentColor" fill-opacity="0.35" fill-rule="evenodd">
        <path d="m 3.949219 7 c -0.257813 0.003906 -0.511719 0.105469 -0.703125 0.300781 l -2.917969 3 c -0.3789062 0.390625 -0.3789062 1.007813 0 1.398438 l 2.917969 3 c 0.386718 0.394531 1.019531 0.402343 1.414062 0.015625 c 0.394532 -0.382813 0.40625 -1.015625 0.019532 -1.414063 l -1.265626 -1.300781 h 6.550782 c 1.332031 0 1.332031 -2 0 -2 h -6.550782 l 1.265626 -1.300781 c 0.386718 -0.398438 0.375 -1.03125 -0.019532 -1.417969 c -0.199218 -0.191406 -0.453125 -0.285156 -0.710937 -0.28125 z m 0 0"/>
        <path d="m 11.976562 1 c 0.257813 0.003906 0.511719 0.105469 0.703126 0.300781 l 2.917968 3 c 0.378906 0.390625 0.378906 1.007813 0 1.398438 l -2.917968 3 c -0.386719 0.394531 -1.019532 0.402343 -1.414063 0.015625 c -0.394531 -0.382813 -0.40625 -1.015625 -0.019531 -1.414063 l 1.269531 -1.300781 h -6.550781 c -1.335938 0 -1.335938 -2 0 -2 h 6.550781 l -1.269531 -1.300781 c -0.386719 -0.398438 -0.375 -1.03125 0.019531 -1.417969 c 0.199219 -0.191406 0.453125 -0.285156 0.710937 -0.28125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwHorizontalArrowsLongNoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHorizontalArrowsLongNoneSymbolic;
