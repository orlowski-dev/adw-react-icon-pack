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
        <path d="m 7.300781 11.714844 c 0.398438 0.386718 1.03125 0.378906 1.414063 -0.019532 l 2.917968 -3 c 0.378907 -0.386718 0.378907 -1.003906 0 -1.394531 l -2.917968 -3 c -0.382813 -0.394531 -1.015625 -0.402343 -1.414063 -0.019531 c -0.394531 0.386719 -0.402343 1.019531 -0.015625 1.417969 l 2.238282 2.300781 l -2.242188 2.300781 c -0.382812 0.398438 -0.375 1.03125 0.019531 1.414063 z m 0 0" fill-rule="evenodd"/>
        <path d="m 10 7 h -9 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 9 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrow1RightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow1RightSymbolic;
