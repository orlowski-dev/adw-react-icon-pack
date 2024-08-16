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
        <path d="m 5 0 c -2.199219 0 -4 1.800781 -4 4 v 8 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -8 c 0 -1.125 0.875 -2 2 -2 s 2 0.875 2 2 v 8 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -8 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 0"/>
        <path d="m 8 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 6 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 h -6 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 6 c 1.097656 0 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 0"/>
        <path d="m 6 4 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 11.4375 2.234375 l -1.886719 3 l 0.847657 0.53125 l 1.882812 -3 z m 0 0"/>
        <path d="m 13.582031 2.226562 l -1.980469 3 l 0.835938 0.546876 l 1.980469 -3 z m 0 0"/>
        <path d="m 2.074219 11 c -1.132813 0 -2.074219 0.941406 -2.074219 2.074219 v 0.851562 c 0 1.132813 0.941406 2.074219 2.074219 2.074219 h 5.851562 c 1.132813 0 2.074219 -0.941406 2.074219 -2.074219 v -0.851562 c 0 -1.132813 -0.941406 -2.074219 -2.074219 -2.074219 z m 0 2 h 5.851562 c 0.058594 0 0.074219 0.015625 0.074219 0.074219 v 0.851562 c 0 0.058594 -0.015625 0.074219 -0.074219 0.074219 h -5.851562 c -0.058594 0 -0.074219 -0.015625 -0.074219 -0.074219 v -0.851562 c 0 -0.058594 0.015625 -0.074219 0.074219 -0.074219 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGatesymbolic;
