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
      <path d="m 14.414062 14.421875 c -0.78125 0.78125 -2.046874 0.78125 -2.828124 0 s -0.78125 -2.046875 0 -2.828125 s 2.046874 -0.78125 2.828124 0 s 0.78125 2.046875 0 2.828125 z m -3.464843 -3.472656 c -0.289063 0.289062 -0.726563 0.371093 -1.101563 0.210937 c -5.011718 -2.148437 -8.605468 -4.300781 -8.605468 -4.300781 c -0.871094 -0.523437 -0.5 -1.859375 0.515624 -1.859375 h 3.242188 v -3.242188 c 0 -1.015624 1.335938 -1.386718 1.859375 -0.515624 c 0 0 2.152344 3.59375 4.300781 8.605468 c 0.160156 0.375 0.078125 0.8125 -0.210937 1.101563 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNavigatesoutheastsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNavigatesoutheastsymbolic;
