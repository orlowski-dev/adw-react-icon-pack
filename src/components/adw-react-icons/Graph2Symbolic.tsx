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
        <path d="m 2 3 v 11 h 11 v -2 h -9 v -9 z m 0 0"/>
        <path d="m 3 -0.0234375 l -3 3.9999995 h 6 z m 0 0"/>
        <path d="m 16 12.976562 l -4 3 v -6 z m 0 0"/>
        <path d="m 14.515625 1.144531 c -0.226563 -0.140625 -0.5 -0.179687 -0.757813 -0.113281 c -0.257812 0.0625 -0.480468 0.226562 -0.617187 0.457031 l -2.707031 4.511719 h -3.96875 l -4.296875 6.445312 c -0.304688 0.460938 -0.183594 1.082032 0.277343 1.386719 c 0.460938 0.304688 1.082032 0.183594 1.386719 -0.277343 l 3.703125 -5.554688 h 4.03125 l 3.289063 -5.488281 c 0.285156 -0.472657 0.132812 -1.085938 -0.339844 -1.367188 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGraph2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGraph2Symbolic;
