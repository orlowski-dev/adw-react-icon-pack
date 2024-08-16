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
        <g fill-rule="evenodd">
            <path d="m 5.945312 4 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 c 1.644532 0 3 -1.355469 3 -3 s -1.355468 -3 -3 -3 z m 0 2 c 0.566407 0 1 0.4375 1 1 s -0.433593 1 -1 1 c -0.5625 0 -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
            <path d="m 13 0 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 s 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 2 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
            <path d="m 3 10 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 s 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 2 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
            <path d="m 13 10 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 s 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 2 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
        </g>
        <path d="m 12 5 v 6 h 2 v -6 z m 0 0"/>
        <path d="m 5 12 v 2 h 6 v -2 z m 0 0"/>
        <path d="m 4.097656 8.5 l -1 2.0625 l 1.800782 0.875 l 1 -2.0625 z m 0 0"/>
        <path d="m 11.054688 3.101562 l -4.085938 2 l 0.878906 1.796876 l 4.085938 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTransformsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTransformsymbolic;
