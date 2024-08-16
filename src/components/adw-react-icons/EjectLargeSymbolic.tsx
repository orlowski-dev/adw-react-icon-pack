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
      <path d="m 9.417969 1.585938 l 4 4 c 0.371093 0.375 0.574219 0.886718 0.582031 1.148437 l 0.003906 1.265625 c 0 1 -1 1 -1 1 h -10 s -1 0 -1 -1 v -1 h 0.003906 c -0.003906 -0.53125 0.207032 -1.039062 0.582032 -1.414062 l 4 -4 c 0.375 -0.375 0.8125 -0.617188 1.414062 -0.585938 c 0.601563 0.03125 1.09375 0.265625 1.414063 0.585938 z m 3.585937 9.414062 c 0.554688 0 1 0.445312 1 1 v 1 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554687 0 -1 -0.445312 -1 -1 v -1 c 0 -0.554688 0.445313 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEjectLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEjectLargeSymbolic;
