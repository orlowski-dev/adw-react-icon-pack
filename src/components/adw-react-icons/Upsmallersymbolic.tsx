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
      <path d="m 4.28125 10.617188 c -0.382812 -0.398438 -0.375 -1.03125 0.019531 -1.414063 l 3 -2.917969 c 0.390625 -0.378906 1.007813 -0.378906 1.394531 0 l 3 2.917969 c 0.398438 0.382813 0.40625 1.015625 0.019532 1.414063 c -0.382813 0.394531 -1.015625 0.402343 -1.414063 0.019531 l -2.300781 -2.242188 l -2.300781 2.242188 c -0.398438 0.382812 -1.03125 0.375 -1.417969 -0.019531 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwUpsmallersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUpsmallersymbolic;
