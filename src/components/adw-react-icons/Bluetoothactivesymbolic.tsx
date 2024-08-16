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
      <path d="m 7.585938 0.0898438 c -0.355469 0.1640622 -0.585938 0.5195312 -0.585938 0.9101562 v 5.296875 l -2.34375 -2.046875 c -0.414062 -0.363281 -1.042969 -0.324219 -1.40625 0.089844 c -0.363281 0.417968 -0.324219 1.046875 0.09375 1.410156 l 2.566406 2.25 l -2.566406 2.25 c -0.417969 0.363281 -0.457031 0.992188 -0.09375 1.40625 c 0.363281 0.417969 0.992188 0.457031 1.40625 0.09375 l 2.34375 -2.046875 v 5.296875 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.359374 0.160156 0.777343 0.101563 1.070312 -0.160156 l 4 -3.5 c 0.21875 -0.1875 0.34375 -0.460938 0.34375 -0.75 s -0.125 -0.5625 -0.34375 -0.75 l -3.140625 -2.75 l 3.140625 -2.75 c 0.21875 -0.1875 0.34375 -0.460938 0.34375 -0.75 s -0.125 -0.5625 -0.34375 -0.75 l -4 -3.5 c -0.292969 -0.2617188 -0.710938 -0.3242188 -1.070312 -0.1601562 z m 1.414062 3.1132812 l 1.484375 1.296875 l -1.484375 1.296875 z m 0 7 l 1.484375 1.296875 l -1.484375 1.296875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwBluetoothactivesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothactivesymbolic;
