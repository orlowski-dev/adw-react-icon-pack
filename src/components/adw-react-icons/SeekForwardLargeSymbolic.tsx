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
        <path d="m 2.003906 4 c 0.179688 0 0.355469 0.046875 0.511719 0.140625 l 5 3 c 0.648437 0.386719 0.648437 1.328125 0 1.71875 l -5 3 c -0.15625 0.089844 -0.332031 0.140625 -0.511719 0.140625 c -1 0 -1 -1 -1 -1 v -6 s -0.003906 -1 1 -1 z m 0 0"/>
        <path d="m 9.003906 4 c 0.179688 0 0.355469 0.046875 0.511719 0.140625 l 5 3 c 0.648437 0.386719 0.648437 1.328125 0 1.71875 l -5 3 c -0.15625 0.089844 -0.332031 0.140625 -0.511719 0.140625 c -1 0 -1 -1 -1 -1 v -6 s -0.003906 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSeekForwardLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSeekForwardLargeSymbolic;
