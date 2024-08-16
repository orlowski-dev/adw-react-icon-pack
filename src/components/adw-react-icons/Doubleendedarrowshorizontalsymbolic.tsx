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
      <path d="m 3.988281 4 c -0.265625 0.003906 -0.519531 0.113281 -0.703125 0.300781 l -2.917968 3 c -0.3789068 0.390625 -0.3789068 1.007813 0 1.398438 l 2.917968 3 c 0.382813 0.394531 1.015625 0.402343 1.414063 0.015625 c 0.394531 -0.382813 0.402343 -1.015625 0.019531 -1.414063 l -1.269531 -1.300781 h 9.183593 l -1.265624 1.300781 c -0.386719 0.398438 -0.378907 1.03125 0.019531 1.417969 c 0.394531 0.382812 1.027343 0.375 1.414062 -0.019531 l 2.917969 -3 c 0.375 -0.390625 0.375 -1.007813 0 -1.394531 l -2.917969 -3 c -0.1875 -0.191407 -0.441406 -0.300782 -0.703125 -0.300782 c -0.265625 -0.007812 -0.523437 0.09375 -0.710937 0.28125 c -0.398438 0.382813 -0.40625 1.015625 -0.019531 1.414063 l 1.265624 1.300781 h -9.183593 l 1.269531 -1.300781 c 0.382812 -0.398438 0.375 -1.03125 -0.019531 -1.417969 c -0.191407 -0.183594 -0.449219 -0.285156 -0.710938 -0.28125 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwDoubleendedarrowshorizontalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDoubleendedarrowshorizontalsymbolic;
