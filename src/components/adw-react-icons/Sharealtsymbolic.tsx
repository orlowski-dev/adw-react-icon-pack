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
        <path d="m 5.96875 7.96875 c 0 1.640625 -1.328125 2.96875 -2.96875 2.96875 s -2.96875 -1.328125 -2.96875 -2.96875 s 1.328125 -2.96875 2.96875 -2.96875 s 2.96875 1.328125 2.96875 2.96875 z m 0 0"/>
        <path d="m 15.9375 12.96875 c 0 1.640625 -1.328125 2.96875 -2.96875 2.96875 s -2.96875 -1.328125 -2.96875 -2.96875 s 1.328125 -2.96875 2.96875 -2.96875 s 2.96875 1.328125 2.96875 2.96875 z m 0 0"/>
        <path d="m 15.9375 2.96875 c 0 1.640625 -1.328125 2.96875 -2.96875 2.96875 s -2.96875 -1.328125 -2.96875 -2.96875 s 1.328125 -2.96875 2.96875 -2.96875 s 2.96875 1.328125 2.96875 2.96875 z m 0 0"/>
        <path d="m 12.613281 2.144531 l -11.863281 5.78125 l 11.851562 5.96875 l 0.898438 -1.789062 l -8.246094 -4.148438 l 8.234375 -4.011719 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSharealtsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSharealtsymbolic;
