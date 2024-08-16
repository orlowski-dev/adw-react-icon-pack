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
        <path d="m 11.15625 1 c -0.078125 0.015625 -0.160156 0.070312 -0.21875 0.125 l -4.28125 4 l 4.03125 4.34375 l 4.15625 -3.875 c 0.238281 -0.222656 0.179688 -0.683594 -0.125 -1.03125 l -2.78125 -3.21875 c -0.226562 -0.261719 -0.542969 -0.390625 -0.78125 -0.34375 z m 0 0"/>
        <path d="m 5.5 6.21875 l -2.34375 2.1875 c -0.238281 0.222656 -0.210938 0.683594 0.09375 1.03125 l 2.8125 3.21875 c 0.304688 0.347656 0.730469 0.441406 0.96875 0.21875 l 2.46875 -2.3125 z m 0 0"/>
        <path d="m 8.699219 14 c -0.386719 0 -0.699219 0.222656 -0.699219 0.5 s 0.3125 0.5 0.699219 0.5 h 6.300781 v -1 z m 0 0"/>
        <path d="m 3.300781 14 c 0.386719 0 0.699219 0.222656 0.699219 0.5 s -0.3125 0.5 -0.699219 0.5 c -2.101562 0 -2 0 -2.300781 0 v -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEraserSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEraserSymbolic;
