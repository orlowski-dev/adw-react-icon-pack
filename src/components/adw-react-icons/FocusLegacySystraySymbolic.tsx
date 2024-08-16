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
      <path d="m 7.933594 2 l -7.933594 0.011719 l -0.00390625 11.96875 h 9.96875025 l 0.027344 -9.917969 c 0.003906 -1.125 -0.933594 -2.0625 -2.058594 -2.0625 z m 2.050781 0.03125 s 1.03125 0.484375 1.03125 1.96875 v 10 h 0.984375 v -10 c 0 -1.25 -2.015625 -1.96875 -2.015625 -1.96875 z m 1.984375 0 s 1.03125 0.484375 1.03125 1.96875 v 10 h 1 v -10 c 0 -1.25 -2.03125 -1.96875 -2.03125 -1.96875 z m -8.953125 2.96875 h 1 c 0.308594 0 0.550781 0.089844 0.75 0.28125 l 2.65625 2.71875 l -2.65625 2.71875 c -0.199219 0.191406 -0.441406 0.28125 -0.75 0.28125 h -1 v -1 c 0 -0.257812 0.128906 -0.527344 0.3125 -0.71875 l 1.28125 -1.28125 l -1.28125 -1.28125 c -0.183594 -0.191406 -0.3125 -0.460938 -0.3125 -0.71875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFocusLegacySystraySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFocusLegacySystraySymbolic;
