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
      <path d="m 11.714844 8.011719 c -0.960938 0.066406 -1.863282 0.480469 -2.542969 1.160156 c -1.5625 1.5625 -1.5625 4.09375 0 5.65625 s 4.09375 1.5625 5.65625 0 s 1.5625 -4.09375 0 -5.65625 c -0.820313 -0.820313 -1.957031 -1.246094 -3.113281 -1.160156 z m -1.128906 1.570312 c 0.253906 0 0.511718 0.101563 0.707031 0.296875 l 0.707031 0.707032 l 0.707031 -0.707032 c 0.390625 -0.390625 1.023438 -0.390625 1.414063 0 s 0.390625 1.023438 0 1.414063 l -0.707032 0.707031 l 0.707032 0.707031 c 0.390625 0.390625 0.390625 1.023438 0 1.414063 s -1.023438 0.390625 -1.414063 0 l -0.707031 -0.707032 l -0.707031 0.707032 c -0.390625 0.390625 -1.023438 0.390625 -1.414063 0 s -0.390625 -1.023438 0 -1.414063 l 0.707032 -0.707031 l -0.707032 -0.707031 c -0.390625 -0.390625 -0.390625 -1.023438 0 -1.414063 c 0.195313 -0.195312 0.453125 -0.296875 0.707032 -0.296875 z m 0 0" class="error" fill="#e01b24"/>
    <path d="m 7 0 c -0.554688 0 -1 0.445312 -1 1 h -2 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2 c -0.570312 0 -1 -0.429688 -1 -1 v -9 c 0 -0.570312 0.429688 -1 1 -1 h 1 v 1 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -1 h 1 c 0.570312 0 1 0.429688 1 1 v 2 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -2 c 0 -1.644531 -1.355469 -3 -3 -3 h -2 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill="#2e3436" fill-opacity="0.35"/>
    </svg>
  );
};

const AdwTaskpastduesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTaskpastduesymbolic;
