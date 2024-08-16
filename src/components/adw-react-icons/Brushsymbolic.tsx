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
        <path d="m 6.78125 6.9375 c 0.066406 0.257812 0.230469 0.476562 0.460938 0.613281 c 0.476562 0.277344 1.089843 0.121094 1.371093 -0.355469 l 3.3125 -5.625 c 0.277344 -0.476562 0.121094 -1.089843 -0.355469 -1.371093 c -0.476562 -0.277344 -1.089843 -0.121094 -1.371093 0.355469 l -3.3125 5.625 c -0.132813 0.226562 -0.171875 0.5 -0.105469 0.757812 z m 0 0"/>
        <path d="m 5.21875 5.09375 l 4.949219 3.054688 c 0.601562 0.3125 0.816406 1.113281 0.164062 1.597656 l -0.625 0.214844 l -6.015625 -3.519532 l 0.015625 -0.910156 c 0.289063 -0.585938 0.753907 -0.816406 1.511719 -0.4375 z m 0 0"/>
        <path d="m 3.054688 7.488281 l 5.988281 3.476563 l -1.042969 1.539062 c -0.222656 0.246094 -0.132812 0.574219 0.085938 0.707032 l 0.953124 0.820312 h -5.371093 c -2.191407 0 -3.195313 -2.066406 -2.144531 -3.890625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBrushsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrushsymbolic;
