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
        <path d="m 8 1 c -2.941406 0 -5.574219 1.84375 -6.582031 4.605469 c -1.003907 2.761719 -0.171875 5.867187 2.078125 7.757812 c 2.253906 1.890625 5.457031 2.167969 8.003906 0.699219 l -1 -1.730469 c -1.824219 1.054688 -4.101562 0.855469 -5.714844 -0.5 c -1.613281 -1.355469 -2.207031 -3.5625 -1.488281 -5.542969 c 0.722656 -1.980468 2.597656 -3.289062 4.703125 -3.289062 z m 0 0"/>
        <path d="m 9.808594 1.238281 l -0.515625 1.929688 c 0.847656 0.230469 1.621093 0.675781 2.242187 1.296875 l 1.414063 -1.414063 c -0.871094 -0.871093 -1.953125 -1.496093 -3.140625 -1.8125 z m 0 0"/>
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 0.265625 0.105469 0.519531 0.292969 0.707031 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.707031 -1.707031 v -1.585938 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 14.0625 4.5 l -1.734375 1 c 0.441406 0.761719 0.671875 1.621094 0.671875 2.5 h 2 c 0 -1.230469 -0.324219 -2.4375 -0.9375 -3.5 z m 0 0"/>
        <path d="m 12.828125 9.292969 c -0.226563 0.851562 -0.671875 1.625 -1.292969 2.246093 l 1.414063 1.410157 c 0.867187 -0.867188 1.496093 -1.949219 1.8125 -3.136719 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelayLongSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelayLongSmallSymbolic;
