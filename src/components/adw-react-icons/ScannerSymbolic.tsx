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
        <path d="m 3 0 c -0.578125 0 -1.058594 0.199219 -1.46875 0.5625 c -0.203125 0.183594 -0.390625 0.417969 -0.5 0.75 s -0.113281 0.773438 0.0625 1.125 l 1 2 c 0.089844 0.175781 0.203125 0.425781 0.375 0.6875 c 0.242188 -0.074219 0.496094 -0.125 0.75 -0.125 h 9.5625 c 0.257812 0 0.511719 0.050781 0.75 0.125 c 0.171875 -0.261719 0.289062 -0.511719 0.375 -0.6875 l 1 -2 c 0.175781 -0.351562 0.171875 -0.792969 0.0625 -1.125 s -0.296875 -0.566406 -0.5 -0.75 c -0.410156 -0.363281 -0.890625 -0.5625 -1.46875 -0.5625 z m 0.125 2 h 9.75 l -0.78125 1.5625 c -0.117188 0.238281 -0.175781 0.371094 -0.21875 0.4375 h -7.75 c -0.042969 -0.066406 -0.101562 -0.199219 -0.21875 -0.4375 z m 0 0"/>
        <path d="m 4 6 c -0.488281 0 -0.933594 0.144531 -1.3125 0.4375 c -0.375 0.292969 -0.6875 0.78125 -0.6875 1.34375 v 8.21875 h 12 v -8.21875 c 0 -0.5625 -0.308594 -1.050781 -0.6875 -1.34375 c -0.375 -0.292969 -0.824219 -0.4375 -1.3125 -0.4375 z m 0 1 h 8 v 6 h -8 z m 7 7 h 1 v 1 h -1 z m 0 0"/>
        <path d="m 3 4 h 10 v -2 h -10 z m 0 0" fill-opacity="0.5"/>
        <path d="m 5 8.03125 h 6 v 0.96875 l -6 1 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwScannerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScannerSymbolic;
