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
        <path d="m 12 12.097656 c -0.003906 0.261719 -0.113281 0.515625 -0.300781 0.703125 l -3 2.917969 c -0.390625 0.375 -1.007813 0.375 -1.394531 0 l -3 -2.917969 c -0.398438 -0.386719 -0.40625 -1.019531 -0.019532 -1.414062 c 0.382813 -0.398438 1.015625 -0.40625 1.414063 -0.019531 l 1.300781 1.265624 v -7.550781 c 0 -0.550781 0.449219 -1 1 -1 s 1 0.449219 1 1 v 7.550781 l 1.304688 -1.265624 c 0.394531 -0.386719 1.027343 -0.378907 1.414062 0.015624 c 0.183594 0.191407 0.285156 0.449219 0.28125 0.714844 z m 0 0" fill-rule="evenodd"/>
        <path d="m 15 1 h -14 v 2 h 14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrowPointingAwayFromLineDownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowPointingAwayFromLineDownSymbolic;
