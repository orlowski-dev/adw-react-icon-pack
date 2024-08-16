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
        <path d="m 1.042969 0 c -0.8125 0 -1.285157 0.917969 -0.8125 1.582031 l 4.769531 6.738281 v 6.636719 c 0 0.742188 0.78125 1.226563 1.449219 0.894531 l 4 -2 c 0.335937 -0.171874 0.550781 -0.515624 0.550781 -0.894531 v -4.636719 l 4.8125 -6.738281 c 0.476562 -0.664062 0 -1.582031 -0.8125 -1.582031 z m 1.902343 2 h 10.109376 l -3.867188 5.417969 c -0.121094 0.167969 -0.1875 0.375 -0.1875 0.582031 v 4.339844 l -2 1 v -5.339844 c 0 -0.207031 -0.066406 -0.414062 -0.1875 -0.582031 z m 0 0"/>
        <path d="m 3.859375 5 l 2.140625 3 v 7 l 4 -2 v -5 l 2.144531 -3 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwFunnelOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFunnelOutlineSymbolic;
