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
        <path d="m 9 7 c -0.554688 0 -1 0.253906 -1 0.5625 v 0.875 c 0 0.308594 0.445312 0.5625 1 0.5625 h -2 c -0.550781 0 -1.101562 0.53125 -0.96875 1.15625 l 0.96875 4.6875 c 0.132812 0.625 0.449219 1.15625 1 1.15625 h 6 c 0.550781 0 0.867188 -0.53125 1 -1.15625 l 1 -4.6875 c 0.132812 -0.625 -0.449219 -1.15625 -1 -1.15625 h -2 c 0.554688 0 1 -0.253906 1 -0.5625 v -0.875 c 0 -0.308594 -0.445312 -0.5625 -1 -0.5625 z m 0 0"/>
        <path d="m 7 0 s -1.292969 0.175781 -2.667969 1 c -3.332031 2 -4.332031 5.480469 -4.332031 7 c -0.34375 4.09375 1.46875 5 1.46875 5 c 0.09375 2 0.53125 3 0.53125 3 c 1 -1 1 -1 1 -1 s -1 -2.5 1 -3 c -0.5 -5 -0.105469 -9 3 -12 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwInkToolSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInkToolSymbolic;
