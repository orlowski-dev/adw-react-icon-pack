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
        <path d="m 0 3.992188 c 0 -1.644532 1.355469 -3 3 -3 h 8 c 1.644531 0 3 1.355468 3 3 v 3 h -2 v -3 c 0 -0.5625 -0.4375 -1 -1 -1 h -8 c -0.5625 0 -1 0.4375 -1 1 v 5 c 0 0.5625 0.4375 1 1 1 h 3 v 2 h -3 c -1.644531 0 -3 -1.355469 -3 -3 z m 0 0"/>
        <path d="m 10 8.992188 c -1.089844 0 -2 0.910156 -2 2 v 2 c 0 1.089843 0.910156 2 2 2 h 4 c 1.089844 0 2 -0.910157 2 -2 v -2 c 0 -1.089844 -0.910156 -2 -2 -2 z m 0 2 h 4 v 2 h -4 z m 0 0" fill-opacity="0.35"/>
        <path d="m 4 7.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 s 0.5 0.222656 0.5 0.5 z m 0 0"/>
        <path d="m 7 4.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 s 0.5 0.222656 0.5 0.5 z m 0 0"/>
        <path d="m 6.5 5 h -3.5 v -1 h 3.5 z m 0 0"/>
        <path d="m 3 7.5 v -3.5 h 1 v 3.5 z m 0 0"/>
        <path d="m 3.648438 4.648438 c 0.195312 -0.195313 0.511718 -0.195313 0.707031 0 l 3.5 3.5 c 0.191406 0.195312 0.191406 0.511718 0 0.707031 c -0.195313 0.191406 -0.511719 0.191406 -0.707031 0 l -3.5 -3.5 c -0.195313 -0.195313 -0.195313 -0.511719 0 -0.707031 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPipoutsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPipoutsymbolic;
