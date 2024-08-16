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
        <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0 1.941406 c 3.359375 0 6.058594 2.699219 6.058594 6.058594 s -2.699219 6.058594 -6.058594 6.058594 s -6.058594 -2.699219 -6.058594 -6.058594 s 2.699219 -6.058594 6.058594 -6.058594 z m 0 0"/>
        <path d="m 13 8 c 0 2.761719 -2.238281 5 -5 5 v -5 z m 0 0"/>
        <path d="m 3 8 c 0 -2.761719 2.238281 -5 5 -5 v 5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTestSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTestSymbolic;
