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
        <path d="m 8 7 c -0.546875 0 -1 0.453125 -1 1 s 0.453125 1 1 1 s 1 -0.453125 1 -1 s -0.453125 -1 -1 -1 z m 0 0"/>
        <path d="m 8 0 c -4.390625 0 -8 3.609375 -8 8 s 3.609375 8 8 8 s 8 -3.609375 8 -8 s -3.609375 -8 -8 -8 z m 0 1 c 3.84375 0 7 3.15625 7 7 s -3.15625 7 -7 7 s -7 -3.15625 -7 -7 s 3.15625 -7 7 -7 z m 0 0" fill-opacity="0.1"/>
        <path d="m 8 2 c -3.300781 0 -6 2.699219 -6 6 s 2.699219 6 6 6 s 6 -2.699219 6 -6 s -2.699219 -6 -6 -6 z m 0 2 c 2.222656 0 4 1.777344 4 4 s -1.777344 4 -4 4 s -4 -1.777344 -4 -4 s 1.777344 -4 4 -4 z m 0 0" fill-opacity="0.35"/>
        <path d="m 8 5 c -1.652344 0 -3 1.347656 -3 3 s 1.347656 3 3 3 s 3 -1.347656 3 -3 s -1.347656 -3 -3 -3 z m 0 1 c 1.109375 0 2 0.890625 2 2 s -0.890625 2 -2 2 s -2 -0.890625 -2 -2 s 0.890625 -2 2 -2 z m 0 0" fill-opacity="0.5"/>
    </g>
    </svg>
  );
};

const AdwSonarSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSonarSymbolic;
