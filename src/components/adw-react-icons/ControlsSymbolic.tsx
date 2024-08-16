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
        <path d="m 4.550781 1 c -1.9375 0 -3.5 1.5625 -3.5 3.5 s 1.5625 3.5 3.5 3.5 h 7 c 1.941407 0 3.5 -1.5625 3.5 -3.5 s -1.558593 -3.5 -3.5 -3.5 z m 7 2 c 0.832031 0 1.5 0.667969 1.5 1.5 s -0.667969 1.5 -1.5 1.5 s -1.5 -0.667969 -1.5 -1.5 s 0.667969 -1.5 1.5 -1.5 z m 0 0"/>
        <path d="m 4.550781 9 c -1.9375 0 -3.5 1.5625 -3.5 3.5 s 1.5625 3.5 3.5 3.5 h 7 c 1.941407 0 3.5 -1.5625 3.5 -3.5 s -1.558593 -3.5 -3.5 -3.5 z m 0 2 c 0.832031 0 1.5 0.667969 1.5 1.5 s -0.667969 1.5 -1.5 1.5 s -1.5 -0.667969 -1.5 -1.5 s 0.667969 -1.5 1.5 -1.5 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwControlsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwControlsSymbolic;
