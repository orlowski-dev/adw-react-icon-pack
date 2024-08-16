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
      <g fill="#2e3436">
        <path d="m 1.800781 3.019531 c -0.257812 0.050781 -0.484375 0.207031 -0.632812 0.425781 c -0.304688 0.460938 -0.183594 1.082032 0.277343 1.386719 l 5.167969 3.445313 c 0.835938 0.558594 1.9375 0.558594 2.773438 0 l 5.167969 -3.445313 c 0.460937 -0.304687 0.582031 -0.925781 0.277343 -1.386719 c -0.304687 -0.460937 -0.925781 -0.582031 -1.386719 -0.277343 l -5.167968 3.445312 c -0.171875 0.113281 -0.382813 0.113281 -0.554688 0 l -5.167968 -3.445312 c -0.222657 -0.148438 -0.492188 -0.199219 -0.753907 -0.148438 z m 0 0"/>
        <path d="m 3 2 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 6 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -6 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailUnreadSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailUnreadSymbolic;
