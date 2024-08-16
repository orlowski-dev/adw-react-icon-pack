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
      <g fill="#2e3436">
        <path d="m 7 4.003906 c -0.179688 -0.003906 -0.359375 0.046875 -0.515625 0.140625 l -5 3 c -0.648437 0.386719 -0.648437 1.328125 0 1.714844 l 5 3 c 0.15625 0.09375 0.335937 0.140625 0.515625 0.140625 v 0.003906 c 1 -0.003906 1 -1 1 -1 v -6 s 0.003906 -1 -1 -1 z m 0 0"/>
        <path d="m 14 4.003906 c -0.179688 -0.003906 -0.359375 0.046875 -0.515625 0.140625 l -5 3 c -0.648437 0.386719 -0.648437 1.328125 0 1.714844 l 5 3 c 0.15625 0.09375 0.335937 0.140625 0.515625 0.140625 v 0.003906 c 1 -0.003906 1 -1 1 -1 v -6 s 0.003906 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMediaSeekBackwardSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediaSeekBackwardSymbolic;
