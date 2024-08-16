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
        <path d="m 11.714844 8.699219 c 0.386718 -0.398438 0.378906 -1.03125 -0.019532 -1.414063 l -3 -2.917968 c -0.386718 -0.378907 -1.003906 -0.378907 -1.394531 0 l -3 2.917968 c -0.394531 0.382813 -0.402343 1.015625 -0.019531 1.414063 c 0.386719 0.394531 1.019531 0.402343 1.414062 0.015625 l 2.304688 -2.238282 l 2.300781 2.242188 c 0.398438 0.382812 1.03125 0.375 1.414063 -0.019531 z m 0 0" fill-rule="evenodd"/>
        <path d="m 7 6 v 9 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -9 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrow1UpSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow1UpSymbolic;
