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
        <path d="m 11.507812 3.078125 l -8.429687 8.429687 c 0.765625 0.039063 1.375 0.648438 1.414063 1.414063 l 8.429687 -8.429687 c -0.765625 -0.039063 -1.375 -0.648438 -1.414063 -1.414063 z m 0 0"/>
        <path d="m 3 11 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
        <path d="m 13 1 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDrawLineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawLineSymbolic;
