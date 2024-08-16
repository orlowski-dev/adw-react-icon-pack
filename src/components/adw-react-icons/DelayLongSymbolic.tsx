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
        <path d="m 8 0 c -3.359375 0 -6.367188 2.105469 -7.519531 5.261719 c -1.148438 3.160156 -0.195313 6.707031 2.375 8.867187 c 2.574219 2.160156 6.234375 2.480469 9.144531 0.796875 l -1 -1.730469 c -2.1875 1.261719 -4.921875 1.023438 -6.859375 -0.601562 c -1.933594 -1.621094 -2.644531 -4.273438 -1.78125 -6.644531 c 0.867187 -2.375 3.113281 -3.949219 5.640625 -3.949219 z m 0 0"/>
        <path d="m 10.070312 0.273438 l -0.519531 1.933593 c 1.019531 0.269531 1.945313 0.804688 2.691407 1.550781 l 1.414062 -1.414062 c -0.992188 -0.992188 -2.230469 -1.707031 -3.585938 -2.070312 z m 0 0"/>
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 0.265625 0.105469 0.519531 0.292969 0.707031 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.707031 -1.707031 v -1.585938 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 14.925781 4 l -1.730469 1 c 0.527344 0.914062 0.804688 1.945312 0.804688 3 h 2 c 0 -1.402344 -0.371094 -2.785156 -1.074219 -4 z m 0 0"/>
        <path d="m 13.792969 9.550781 c -0.269531 1.019531 -0.804688 1.945313 -1.550781 2.691407 l 1.414062 1.414062 c 0.992188 -0.992188 1.707031 -2.230469 2.070312 -3.585938 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelayLongSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelayLongSymbolic;
