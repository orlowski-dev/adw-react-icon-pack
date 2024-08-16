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
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 2 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 8 1 c -3.855469 0 -7.003906 3.144531 -7.003906 7 h 2 c 0 -2.773438 2.230468 -5 5.003906 -5 z m 0 0"/>
        <path d="m 9.808594 1.238281 l -0.515625 1.929688 c 0.847656 0.226562 1.621093 0.675781 2.242187 1.292969 l 1.414063 -1.410157 c -0.867188 -0.871093 -1.953125 -1.496093 -3.140625 -1.8125 z m 0 0"/>
        <path d="m 14.0625 4.5 l -1.730469 1 c 0.4375 0.761719 0.667969 1.621094 0.667969 2.5 h 2 c 0 -1.230469 -0.324219 -2.4375 -0.9375 -3.5 z m 0 0"/>
        <path d="m 12.828125 9.292969 c -0.226563 0.851562 -0.671875 1.625 -1.292969 2.246093 l 1.414063 1.410157 c 0.871093 -0.867188 1.496093 -1.949219 1.8125 -3.136719 z m 0 0"/>
        <path d="m 10.5 12.332031 c -0.378906 0.21875 -0.785156 0.386719 -1.207031 0.5 l 0.515625 1.929688 c 0.59375 -0.15625 1.160156 -0.390625 1.691406 -0.699219 z m 0 0"/>
        <path d="m 6.703125 12.832031 l -0.515625 1.929688 c 0.589844 0.160156 1.199219 0.238281 1.8125 0.238281 v -2 c -0.4375 0 -0.871094 -0.054688 -1.296875 -0.167969 z m 0 0"/>
        <path d="m 3.167969 9.292969 l -1.933594 0.519531 c 0.160156 0.589844 0.394531 1.160156 0.699219 1.6875 l 1.734375 -1 c -0.21875 -0.375 -0.386719 -0.78125 -0.5 -1.207031 z m 0 0"/>
        <path d="m 4.460938 11.539062 l -1.414063 1.410157 c 0.433594 0.433593 0.921875 0.808593 1.449219 1.113281 l 1 -1.730469 c -0.375 -0.21875 -0.722656 -0.484375 -1.035156 -0.792969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelayExtremeSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelayExtremeSmallSymbolic;
