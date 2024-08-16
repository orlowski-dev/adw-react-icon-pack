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
        <path d="m 7.988281 4 c -0.265625 0.003906 -0.519531 0.113281 -0.707031 0.300781 l -2.917969 3 c -0.375 0.390625 -0.375 1.007813 0 1.398438 l 2.917969 3 c 0.386719 0.394531 1.019531 0.402343 1.417969 0.015625 c 0.394531 -0.382813 0.402343 -1.015625 0.015625 -1.414063 l -1.265625 -1.300781 h 7.550781 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -7.550781 l 1.269531 -1.300781 c 0.382812 -0.398438 0.375 -1.03125 -0.019531 -1.417969 c -0.191407 -0.183594 -0.449219 -0.285156 -0.710938 -0.28125 z m 0 0" fill-rule="evenodd"/>
        <path d="m 1 1 v 14 h 2 v -14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrowpointingatlineleftsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowpointingatlineleftsymbolic;
