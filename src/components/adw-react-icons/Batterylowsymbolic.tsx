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
        <path d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015625 0.710938 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 2.042969 c -0.8125 -0.511719 -1.5 -1.191406 -2.015625 -2 h -0.027344 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.117188 0 0.230469 0.019531 0.332031 0.058594 c 0.949219 0.121094 1.863281 0.453125 2.667969 0.96875 v -0.027344 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.738281 -0.367188 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 0 0"/>
        <path d="m 10.5 5 c -3.027344 0 -5.5 2.472656 -5.5 5.5 c 0 3.023438 2.472656 5.5 5.5 5.5 c 3.023438 0 5.5 -2.476562 5.5 -5.5 c 0 -3.027344 -2.476562 -5.5 -5.5 -5.5 z m 0 2 c 1.945312 0 3.5 1.554688 3.5 3.5 s -1.554688 3.5 -3.5 3.5 s -3.5 -1.554688 -3.5 -3.5 s 1.554688 -3.5 3.5 -3.5 z m 0 0"/>
        <path d="m 10.5 8.027344 c -0.132812 0 -0.261719 0.050781 -0.355469 0.144531 c -0.09375 0.097656 -0.148437 0.222656 -0.148437 0.355469 v 1.949218 v 0.011719 v 0.011719 c 0.003906 0.011719 0.003906 0.023438 0.003906 0.03125 c 0.015625 0.265625 0.234375 0.472656 0.5 0.46875 h 2 c 0.132812 0.003906 0.261719 -0.050781 0.355469 -0.144531 s 0.148437 -0.222657 0.144531 -0.355469 c 0.003906 -0.132812 -0.050781 -0.261719 -0.144531 -0.355469 s -0.222657 -0.148437 -0.355469 -0.148437 h -1.5 v -1.46875 c 0.003906 -0.132813 -0.050781 -0.257813 -0.144531 -0.355469 c -0.09375 -0.09375 -0.222657 -0.144531 -0.355469 -0.144531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBatterylowsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatterylowsymbolic;
