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
      <path d="m 11.917969 1 v 6.5 l -6.210938 -6.207031 c -0.390625 -0.390625 -1.027343 -0.390625 -1.414062 0 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 5.292969 5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 6.210938 -6.210937 v 6.503906 h 2 v -14 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwLastLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLastLargeSymbolic;
