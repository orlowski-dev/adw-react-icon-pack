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
      <path d="m 4 6.734375 c -0.699219 0 -1.265625 0.566406 -1.265625 1.265625 s 0.566406 1.265625 1.265625 1.265625 s 1.265625 -0.566406 1.265625 -1.265625 s -0.566406 -1.265625 -1.265625 -1.265625 z m 4 0 c -0.699219 0 -1.265625 0.566406 -1.265625 1.265625 s 0.566406 1.265625 1.265625 1.265625 s 1.265625 -0.566406 1.265625 -1.265625 s -0.566406 -1.265625 -1.265625 -1.265625 z m 4 0 c -0.699219 0 -1.265625 0.566406 -1.265625 1.265625 s 0.566406 1.265625 1.265625 1.265625 s 1.265625 -0.566406 1.265625 -1.265625 s -0.566406 -1.265625 -1.265625 -1.265625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMoreSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoreSmallSymbolic;
