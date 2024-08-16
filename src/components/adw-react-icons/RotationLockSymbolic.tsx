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
        <path d="m 8.59375 1 c 0.613281 0.007812 1.234375 0.089844 1.847656 0.257812 c 3.273438 0.875 5.558594 3.851563 5.558594 7.242188 s -2.285156 6.367188 -5.558594 7.242188 c -3.273437 0.878906 -6.742187 -0.554688 -8.4375 -3.492188 c -0.277344 -0.476562 -0.109375 -1.089844 0.367188 -1.363281 c 0.476562 -0.277344 1.089844 -0.113281 1.367187 0.363281 c 1.246094 2.160156 3.777344 3.207031 6.1875 2.5625 c 2.40625 -0.644531 4.074219 -2.816406 4.074219 -5.3125 s -1.667969 -4.667969 -4.074219 -5.3125 c -2.410156 -0.644531 -4.941406 0.402344 -6.1875 2.5625 c -0.058593 0.085938 -0.125 0.164062 -0.203125 0.230469 l 0.019532 0.011719 l 0.007812 0.007812 h 0.4375 c 0.550781 0 1 0.449219 1 1 v 1 h -5 v -5 h 1 c 0.550781 0 1 0.449219 1 1 v 0.6875 l 0.015625 0.011719 l 0.011719 0.011719 c 1.277344 -2.179688 3.53125 -3.519532 5.953125 -3.691407 c 0.203125 -0.015625 0.40625 -0.019531 0.613281 -0.015625 z m 0 0"/>
        <path d="m 6 8 h 5.003906 c 0.539063 0 0.996094 0.550781 0.996094 1 v 3 h -7 v -2.984375 c 0 -0.511719 0.523438 -1.015625 1 -1.015625 z m 0 0"/>
        <path d="m 8.5 5 c -1.375 0 -2.5 1.148438 -2.5 2.519531 v 0.960938 c 0 1.371093 1.125 2.519531 2.5 2.519531 s 2.5 -1.148438 2.5 -2.519531 v -0.960938 c 0 -1.371093 -1.125 -2.519531 -2.5 -2.519531 z m 0 2 c 0.289062 0 0.5 0.207031 0.5 0.519531 v 0.960938 c 0 0.3125 -0.210938 0.519531 -0.5 0.519531 s -0.5 -0.207031 -0.5 -0.519531 v -0.960938 c 0 -0.3125 0.210938 -0.519531 0.5 -0.519531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRotationLockSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRotationLockSymbolic;
