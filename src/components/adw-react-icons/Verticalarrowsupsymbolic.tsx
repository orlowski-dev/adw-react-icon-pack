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
      <g fill="currentColor" fill-rule="evenodd">
        <path d="m 1 4.988281 c 0.003906 -0.257812 0.105469 -0.511719 0.304688 -0.703125 l 3 -2.921875 c 0.386718 -0.375 1.003906 -0.375 1.394531 0 l 3 2.921875 c 0.394531 0.382813 0.402343 1.015625 0.015625 1.414063 c -0.382813 0.394531 -1.015625 0.402343 -1.414063 0.015625 l -1.300781 -1.265625 v 4.550781 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -4.550781 l -1.300781 1.269531 c -0.398438 0.382812 -1.03125 0.375 -1.414063 -0.019531 c -0.195312 -0.199219 -0.289062 -0.457031 -0.285156 -0.710938 z m 0 0" fill-opacity="0.35"/>
        <path d="m 7 11.015625 c 0.003906 0.253906 0.105469 0.507813 0.304688 0.703125 l 3 2.917969 c 0.386718 0.375 1.003906 0.375 1.394531 0 l 3 -2.917969 c 0.394531 -0.386719 0.402343 -1.019531 0.015625 -1.417969 c -0.382813 -0.394531 -1.015625 -0.402343 -1.414063 -0.015625 l -1.300781 1.265625 v -4.550781 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 4.550781 l -1.300781 -1.265625 c -0.398438 -0.386718 -1.03125 -0.378906 -1.414063 0.015625 c -0.195312 0.199219 -0.289062 0.457031 -0.285156 0.710938 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwVerticalarrowsupsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVerticalarrowsupsymbolic;
