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
        <path d="m 4.003906 3.90625 c 0 -0.265625 0.109375 -0.519531 0.300782 -0.703125 l 3 -2.917969 c 0.386718 -0.378906 1.003906 -0.378906 1.394531 0 l 3 2.917969 c 0.394531 0.382813 0.402343 1.015625 0.019531 1.414063 c -0.386719 0.394531 -1.019531 0.402343 -1.414062 0.019531 l -1.304688 -1.269531 v 7.550781 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -7.550781 l -1.300781 1.269531 c -0.398438 0.382812 -1.03125 0.375 -1.414063 -0.019531 c -0.1875 -0.191407 -0.289062 -0.449219 -0.28125 -0.710938 z m 0 0" fill-rule="evenodd"/>
        <path d="m 1 15 h 14 v -2 h -14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrowPointingAwayFromLineUpSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowPointingAwayFromLineUpSymbolic;
