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
        <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 3 c 0.5625 0 1 0.4375 1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -1.644531 -1.355469 -3 -3 -3 h -3 c -0.5625 0 -1 -0.4375 -1 -1 v -7 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 0.5625 0 1 0.4375 1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/>
        <path d="m 7 4 v 10 h 2 v -10 z m 0 0"/>
        <path d="m 10 1 c -1.644531 0 -3 1.355469 -3 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 0.5625 0 1 0.4375 1 1 v 7 c 0 0.5625 -0.4375 1 -1 1 h -3 c -1.644531 0 -3 1.355469 -3 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.5625 0.4375 -1 1 -1 h 3 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/>
        <path d="m 3 4 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 3 6 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 3 8 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 10 4 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 10 6 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 10 8 h 2 v 1 h -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwOpenbooksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwOpenbooksymbolic;
