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
        <path d="m 8.015625 0 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 c -1.101563 0 -2 -0.894531 -2 -2 s 0.898437 -2 2 -2 z m 0 0"/>
        <path d="m 3 7 h 2 v 8 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -0.550781 0.449219 -1 1 -1 s 1 0.449219 1 1 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -8 h 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -10 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBodysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBodysymbolic;
