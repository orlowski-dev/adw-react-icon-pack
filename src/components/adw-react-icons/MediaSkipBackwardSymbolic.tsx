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
      <g fill="#2e3436">
        <path d="m 15 3 v 10 c 0 1 -1.085938 1 -1.085938 1 h -0.113281 c -0.210937 0 -0.417969 -0.046875 -0.601562 -0.148438 l -8.398438 -4.800781 c -0.375 -0.207031 -0.5625 -0.628906 -0.5625 -1.050781 s 0.1875 -0.84375 0.5625 -1.050781 l 8.398438 -4.800781 c 0.183593 -0.101563 0.390625 -0.148438 0.601562 -0.148438 h 0.113281 s 1.085938 0 1.085938 1 z m 0 0"/>
        <path d="m 1.5 2 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 11 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -11 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMediaSkipBackwardSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediaSkipBackwardSymbolic;
