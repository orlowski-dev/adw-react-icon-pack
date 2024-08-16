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
      <path d="m 7.957031 0 c -0.128906 0.0078125 -0.253906 0.0390625 -0.371093 0.0898438 c -0.355469 0.1640622 -0.585938 0.5195312 -0.585938 0.9101562 v 5.296875 l -2.34375 -2.046875 c -0.414062 -0.363281 -1.042969 -0.324219 -1.40625 0.089844 c -0.363281 0.417968 -0.324219 1.046875 0.089844 1.410156 l 2.570312 2.25 l -2.570312 2.246094 c -0.414063 0.367187 -0.453125 0.996094 -0.089844 1.410156 c 0.363281 0.417969 0.992188 0.457031 1.40625 0.09375 l 2.34375 -2.046875 v 5.296875 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.359374 0.160156 0.777343 0.101563 1.070312 -0.160156 l 0.386719 -0.335938 c -0.132813 -0.640624 0.046875 -1.335937 0.539062 -1.828124 l 0.417969 -0.417969 v -0.335938 l -0.417969 -0.417969 c -0.023437 -0.023437 -0.042969 -0.046874 -0.0625 -0.070312 l -0.519531 0.453125 v -2.59375 l 0.125 0.109375 c 0.09375 -0.265625 0.246094 -0.515625 0.457031 -0.726562 c 0.300781 -0.300782 0.691407 -0.496094 1.105469 -0.5625 l -1.167969 -1.023438 l 3.136719 -2.75 c 0.21875 -0.1875 0.34375 -0.460938 0.34375 -0.75 s -0.125 -0.5625 -0.34375 -0.75 l -4 -3.5 c -0.191406 -0.171875 -0.445312 -0.2578125 -0.699219 -0.25 z m 1.042969 3.203125 l 1.480469 1.296875 l -1.480469 1.296875 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 11 10 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 1.292969 -1.292969 l 1.292969 1.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 l -1.292969 1.292969 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwBluetoothdisconnectedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothdisconnectedsymbolic;
