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
        <path d="m 9.5 1.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 7 4 c -0.550781 0 -1 0.449219 -1 1 v 4 c 0 0.265625 0.105469 0.519531 0.292969 0.707031 l 0.445312 0.449219 l -2.59375 4.328125 c -0.285156 0.476563 -0.132812 1.089844 0.34375 1.375 c 0.472657 0.28125 1.085938 0.128906 1.367188 -0.34375 l 2.34375 -3.902344 l 0.925781 0.929688 l 0.925781 2.773437 c 0.082031 0.25 0.265625 0.460938 0.5 0.578125 c 0.238281 0.121094 0.515625 0.140625 0.765625 0.054688 c 0.25 -0.082031 0.460938 -0.265625 0.578125 -0.5 c 0.121094 -0.238281 0.140625 -0.515625 0.054688 -0.765625 l -1 -3 c -0.050781 -0.148438 -0.132813 -0.28125 -0.242188 -0.390625 l -1.707031 -1.707031 v -4.585938 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 6 4 c -0.101562 0 -0.207031 0.019531 -0.300781 0.0625 c 0 0 -2.113281 0.847656 -2.199219 2.90625 v 0.03125 v 2.25 c 0 0.414062 0.335938 0.75 0.75 0.75 s 0.75 -0.335938 0.75 -0.75 v -2.21875 c 0.039062 -0.894531 1.050781 -1.449219 1.207031 -1.53125 h 2.332031 l 1.042969 2.085938 c 0.097657 0.195312 0.273438 0.339843 0.488281 0.394531 l 2 0.5 c 0.191407 0.046875 0.394532 0.015625 0.566407 -0.085938 c 0.171875 -0.101562 0.292969 -0.269531 0.34375 -0.460937 c 0.046875 -0.195313 0.015625 -0.398438 -0.085938 -0.570313 c -0.101562 -0.171875 -0.269531 -0.292969 -0.464843 -0.34375 l -1.664063 -0.414062 l -1.097656 -2.191407 c -0.125 -0.253906 -0.382813 -0.414062 -0.667969 -0.414062 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWalking2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWalking2Symbolic;
