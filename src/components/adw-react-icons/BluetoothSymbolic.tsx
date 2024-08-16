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
      <path d="m 7.585938 0.0898438 c -0.359376 0.1601562 -0.585938 0.5195312 -0.585938 0.9101562 v 5.296875 l -2.34375 -2.050781 c -0.414062 -0.363282 -1.046875 -0.320313 -1.410156 0.09375 c -0.363282 0.417968 -0.320313 1.046875 0.09375 1.410156 l 2.570312 2.25 l -2.570312 2.246094 c -0.414063 0.367187 -0.457032 0.996094 -0.09375 1.410156 c 0.363281 0.417969 0.996094 0.457031 1.410156 0.09375 l 2.34375 -2.046875 v 5.296875 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.355468 0.160156 0.777343 0.097656 1.070312 -0.160156 l 4 -3.5 c 0.21875 -0.1875 0.339844 -0.460938 0.339844 -0.75 s -0.121094 -0.5625 -0.339844 -0.753906 l -3.140625 -2.746094 l 3.140625 -2.75 c 0.21875 -0.1875 0.339844 -0.460938 0.339844 -0.75 s -0.121094 -0.5625 -0.339844 -0.753906 l -4 -3.5 c -0.292969 -0.2578128 -0.714844 -0.3203128 -1.070312 -0.1562502 z m 1.414062 3.1132812 l 1.480469 1.296875 l -1.480469 1.296875 z m 0 7 l 1.480469 1.296875 l -1.480469 1.296875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBluetoothSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothSymbolic;
