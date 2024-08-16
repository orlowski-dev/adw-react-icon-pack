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
        <path d="m 9.5 2 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 z m 0 0"/>
        <path d="m 4.285156 13 c 0 0.703125 -0.582031 1.285156 -1.285156 1.285156 s -1.285156 -0.582031 -1.285156 -1.285156 s 0.582031 -1.285156 1.285156 -1.285156 s 1.285156 0.582031 1.285156 1.285156 z m -4.285156 0 c 0 1.675781 1.324219 3 3 3 s 3 -1.324219 3 -3 s -1.324219 -3 -3 -3 s -3 1.324219 -3 3 z m 0 0"/>
        <path d="m 8.992188 13.007812 v -3.003906 c 0 -0.359375 -0.1875 -0.6875 -0.5 -0.867187 l -2.558594 -1.476563 l 0.363281 1.363282 l 1.671875 -2.890626 l -1.367188 0.363282 l 0.910157 0.527344 l -0.40625 -0.4375 c 0.773437 1.621093 1.96875 1.933593 1.96875 1.933593 s 0.578125 0.242188 1.9375 0.429688 c 0.546875 0.074219 1.050781 -0.304688 1.128906 -0.851563 c 0.074219 -0.550781 -0.308594 -1.054687 -0.855469 -1.128906 c -1.179687 -0.164062 -1.601562 -0.355469 -1.601562 -0.355469 s -0.425782 -0.164062 -0.769532 -0.886719 c -0.089843 -0.183593 -0.226562 -0.335937 -0.402343 -0.4375 l -0.910157 -0.523437 c -0.476562 -0.277344 -1.089843 -0.113281 -1.363281 0.367187 l -1.671875 2.890626 c -0.277344 0.480468 -0.113281 1.089843 0.367188 1.367187 l 2.558594 1.480469 l -0.5 -0.867188 v 3.003906 c 0 0.550782 0.449218 1 1 1 c 0.554687 0 1 -0.449218 1 -1 z m 0 0"/>
        <path d="m 14.285156 13 c 0 0.703125 -0.582031 1.285156 -1.285156 1.285156 s -1.285156 -0.582031 -1.285156 -1.285156 s 0.582031 -1.285156 1.285156 -1.285156 s 1.285156 0.582031 1.285156 1.285156 z m -4.285156 0 c 0 1.675781 1.324219 3 3 3 s 3 -1.324219 3 -3 s -1.324219 -3 -3 -3 s -3 1.324219 -3 3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCyclingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCyclingSymbolic;
