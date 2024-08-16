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
      <path d="m 11.015625 1 c -0.257813 -0.003906 -0.515625 0.089844 -0.710937 0.28125 c -0.398438 0.386719 -0.40625 1.019531 -0.019532 1.417969 l 1.265625 1.300781 h -4.550781 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4.550781 l -1.265625 1.300781 c -0.359375 0.367188 -0.378906 0.941407 -0.0625 1.328125 c 0.65625 -0.386718 1.402344 -0.601562 2.164063 -0.621094 l 2.25 -2.308593 c 0.375 -0.390625 0.375 -1.007813 0 -1.398438 l -2.917969 -3 c -0.195312 -0.195312 -0.449219 -0.296875 -0.703125 -0.300781 z m -6.027344 6 c -0.257812 0.003906 -0.511719 0.105469 -0.703125 0.300781 l -2.917968 3 c -0.378907 0.390625 -0.378907 1.007813 0 1.398438 l 2.917968 3 c 0.382813 0.394531 1.015625 0.402343 1.414063 0.015625 c 0.394531 -0.382813 0.402343 -1.015625 0.019531 -1.414063 l -1.269531 -1.300781 h 3.585937 c 0.078125 -0.714844 0.328125 -1.402344 0.730469 -2 h -4.316406 l 1.269531 -1.300781 c 0.382812 -0.398438 0.375 -1.03125 -0.019531 -1.417969 c -0.199219 -0.191406 -0.457031 -0.285156 -0.710938 -0.28125 z m 0 0" fill="currentColor" fill-opacity="0.35" fill-rule="evenodd"/>
    <path d="m 12.5 9 c -1.933594 0 -3.5 1.566406 -3.5 3.5 s 1.566406 3.5 3.5 3.5 s 3.5 -1.566406 3.5 -3.5 s -1.566406 -3.5 -3.5 -3.5 z m -2.5 2.96875 h 5 v 1.03125 h -5 z m 0 0" fill="#e01b24"/>
    </svg>
  );
};

const AdwHorizontalArrowsOneWaySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHorizontalArrowsOneWaySymbolic;
