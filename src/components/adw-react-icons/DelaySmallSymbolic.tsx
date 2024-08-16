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
        <path d="m 8.003906 5 c -0.554687 0 -1 0.449219 -1 1 v 3 c 0 0.554688 0.445313 1 1 1 h 2 c 0.550782 0 1 -0.445312 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -1 v -2 c 0 -0.550781 -0.449218 -1 -1 -1 z m 0 0"/>
        <path d="m 8.003906 1 c -3.621094 0 -6.660156 2.785156 -6.976562 6.390625 c -0.3125 3.609375 2.191406 6.875 5.757812 7.503906 c 3.566406 0.628907 7.039063 -1.585937 7.976563 -5.082031 l -1.929688 -0.519531 c -0.671875 2.515625 -3.136719 4.082031 -5.699219 3.632812 c -2.5625 -0.453125 -4.339843 -2.769531 -4.113281 -5.363281 c 0.226563 -2.589844 2.382813 -4.5625 4.984375 -4.5625 z m 0 0"/>
        <path d="m 9.8125 1.238281 l -0.515625 1.933594 c 0.847656 0.226563 1.621094 0.671875 2.242187 1.292969 l 1.414063 -1.414063 c -0.871094 -0.867187 -1.953125 -1.496093 -3.140625 -1.8125 z m 0 0"/>
        <path d="m 14.0625 4.5 l -1.730469 1 c 0.4375 0.761719 0.671875 1.625 0.671875 2.5 h 1.996094 c 0 -1.226562 -0.320312 -2.4375 -0.9375 -3.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelaySmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelaySmallSymbolic;
