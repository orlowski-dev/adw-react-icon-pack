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
      <path d="m 5.039062 3 c -1.109374 0 -2 0.890625 -2 2 v 6 c 0 1.109375 0.890626 2 2 2 h 5.953126 c 1.109374 0 2 -0.890625 2 -2 v -6 c 0 -1.109375 -0.890626 -2 -2 -2 z m 2.980469 1 c 0.542969 0 0.980469 0.4375 0.980469 0.984375 v 3.035156 c 0 0.542969 -0.4375 0.980469 -0.980469 0.980469 c -0.546875 0 -0.984375 -0.4375 -0.984375 -0.980469 v -3.035156 c 0 -0.546875 0.4375 -0.984375 0.984375 -0.984375 z m -0.019531 5.734375 c 0.699219 0 1.265625 0.566406 1.265625 1.265625 s -0.566406 1.265625 -1.265625 1.265625 s -1.265625 -0.566406 -1.265625 -1.265625 s 0.566406 -1.265625 1.265625 -1.265625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwImportantSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImportantSmallSymbolic;
