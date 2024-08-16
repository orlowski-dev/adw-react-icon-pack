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
        <path d="m 5 12 v 1 h 0.007812 c -0.003906 0.265625 0.101563 0.519531 0.285157 0.707031 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 2 -2 c 0.183594 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 z m 0 0"/>
        <path d="m 4 -0.0078125 v 2.0000005 h 6 c 0.429688 0 1 0.613281 1 1 v 1 h -5 c -0.917969 0 -1.734375 0.378906 -2.25 0.964843 c -0.515625 0.582031 -0.742188 1.324219 -0.738281 2.042969 c 0.007812 0.722656 0.246093 1.449219 0.757812 2.027344 c 0.515625 0.578125 1.320313 0.964844 2.230469 0.964844 h 7 v -7 c 0 -1.636719 -1.320312 -3.0000005 -3 -3.0000005 z m 2 6.0000005 h 5 v 2 h -5 c -0.398438 0 -0.578125 -0.117188 -0.730469 -0.289063 c -0.152343 -0.171875 -0.253906 -0.441406 -0.257812 -0.722656 c 0 -0.277344 0.09375 -0.539063 0.238281 -0.703125 c 0.148438 -0.167969 0.328125 -0.285156 0.75 -0.285156 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwInsertTextSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInsertTextSymbolic;
