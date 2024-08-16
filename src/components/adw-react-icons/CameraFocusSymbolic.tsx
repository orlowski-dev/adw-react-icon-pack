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
        <path d="m 8 5 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 s 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 2 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
        <path d="m 3 1 s -0.457031 -0.015625 -0.949219 0.230469 c -0.488281 0.246093 -1.050781 0.9375 -1.050781 1.769531 v 3 h 2 v -3 h 3 v -2 z m 0 0"/>
        <path d="m 10 1 v 2 h 3 v 3 h 2 v -3 c 0 -0.832031 -0.5625 -1.523438 -1.050781 -1.769531 c -0.492188 -0.246094 -0.949219 -0.230469 -0.949219 -0.230469 z m 0 0"/>
        <path d="m 1 10 v 3 c 0 0.832031 0.5625 1.523438 1.050781 1.769531 c 0.492188 0.246094 0.949219 0.230469 0.949219 0.230469 h 3 v -2 h -3 v -3 z m 0 0"/>
        <path d="m 13 10 v 3 h -3 v 2 h 3 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameraFocusSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraFocusSymbolic;
