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
        <path d="m 11.015625 1 c -0.257813 -0.003906 -0.515625 0.089844 -0.710937 0.28125 c -0.398438 0.386719 -0.40625 1.019531 -0.019532 1.417969 l 1.265625 1.300781 h -4.550781 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4.550781 l -1.265625 1.300781 c -0.386718 0.398438 -0.378906 1.03125 0.019532 1.417969 c 0.394531 0.382812 1.027343 0.375 1.414062 -0.019531 l 2.917969 -3 c 0.375 -0.390625 0.375 -1.007813 0 -1.398438 l -2.917969 -3 c -0.195312 -0.195312 -0.449219 -0.296875 -0.703125 -0.300781 z m -6.027344 6 c -0.257812 0.003906 -0.511719 0.105469 -0.703125 0.300781 l -2.917968 3 c -0.378907 0.390625 -0.378907 1.007813 0 1.398438 l 2.917968 3 c 0.382813 0.394531 1.015625 0.402343 1.414063 0.019531 c 0.394531 -0.386719 0.402343 -1.019531 0.019531 -1.417969 l -1.269531 -1.300781 h 4.550781 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -4.550781 l 1.269531 -1.300781 c 0.382812 -0.398438 0.375 -1.03125 -0.019531 -1.417969 c -0.199219 -0.191406 -0.457031 -0.285156 -0.710938 -0.28125 z m 0 0" fill-opacity="0.35" fill-rule="evenodd"/>
        <path d="m 11 11 h 1.375 l 1.125 1.09375 l 1.09375 -1.09375 h 1.40625 v 1.46875 l -1.09375 1.0625 l 1.09375 1.0625 v 1.40625 h -1.4375 l -1.0625 -1.0625 l -1.0625 1.0625 h -1.4375 v -1.40625 l 1.0625 -1.0625 l -1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwHorizontalarrowsdisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHorizontalarrowsdisabledsymbolic;
