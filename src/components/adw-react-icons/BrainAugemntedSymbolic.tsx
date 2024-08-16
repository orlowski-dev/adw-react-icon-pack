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
        <path d="m 5.976562 2 c 0.546876 0 1 0.453125 1 1 v 10 c 0 0.546875 -0.453124 1 -1 1 h -0.976562 c -1.652344 0 -3 -1.347656 -3 -3 v -6 c 0 -1.652344 1.347656 -3 3 -3 z m -5.976562 3 v 6 c 0 2.765625 2.234375 5 5 5 h 0.976562 c 1.660157 0 3 -1.339844 3 -3 v -10 c 0 -1.660156 -1.339843 -3 -3 -3 h -0.976562 c -2.765625 0 -5 2.234375 -5 5 z m 0 0"/>
        <path d="m 1.488281 8.996094 h 1.511719 c 1.101562 0 1.988281 -0.886719 1.988281 -1.984375 v -0.515625 c 0 -0.273438 -0.222656 -0.5 -0.5 -0.5 c -0.273437 0 -0.5 0.226562 -0.5 0.5 v 0.515625 c 0 0.542969 -0.445312 0.984375 -0.988281 0.984375 h -1.511719 c -0.273437 0 -0.5 0.226562 -0.5 0.5 c 0 0.277344 0.226563 0.5 0.5 0.5 z m 0 0"/>
        <path d="m 7.5 9.992188 h -1.511719 c -1.101562 0 -1.988281 0.886718 -1.988281 1.984374 v 0.515626 c 0 0.273437 0.222656 0.5 0.5 0.5 s 0.5 -0.226563 0.5 -0.5 v -0.515626 c 0 -0.539062 0.445312 -0.984374 0.988281 -0.984374 h 1.511719 c 0.277344 0 0.5 -0.226563 0.5 -0.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0"/>
        <path d="m 11.015625 14 h -1.035156 c -0.546875 0 -1 -0.453125 -1 -1 v -10 c 0 -0.546875 0.453125 -1 1 -1 h 1.035156 v -2 h -1.035156 c -1.664063 0 -3 1.339844 -3 3 v 10 c 0 1.660156 1.335937 3 3 3 h 1.035156 z m 0 0"/>
        <path d="m 10 5 h 2.242188 l 2.148437 -2.6875 l -0.78125 -0.625 l -2 2.5 l 0.390625 -0.1875 h -2 z m 0 0"/>
        <path d="m 10 11 h 2 l -0.390625 -0.1875 l 2 2.5 l 0.78125 -0.625 l -2.148437 -2.6875 h -2.242188 z m 0 0"/>
        <path d="m 14.488281 1.976562 c -0.265625 0 -0.488281 -0.21875 -0.488281 -0.488281 c 0 -0.265625 0.222656 -0.488281 0.488281 -0.488281 c 0.269531 0 0.488281 0.222656 0.488281 0.488281 c 0 0.269531 -0.21875 0.488281 -0.488281 0.488281 z m 0 -1.976562 c -0.824219 0 -1.488281 0.664062 -1.488281 1.488281 s 0.664062 1.488281 1.488281 1.488281 s 1.488281 -0.664062 1.488281 -1.488281 s -0.664062 -1.488281 -1.488281 -1.488281 z m 0 0"/>
        <path d="m 14.488281 13.976562 c -0.265625 0 -0.488281 -0.21875 -0.488281 -0.488281 c 0 -0.265625 0.222656 -0.488281 0.488281 -0.488281 c 0.269531 0 0.488281 0.222656 0.488281 0.488281 c 0 0.269531 -0.21875 0.488281 -0.488281 0.488281 z m 0 -1.976562 c -0.824219 0 -1.488281 0.664062 -1.488281 1.488281 s 0.664062 1.488281 1.488281 1.488281 s 1.488281 -0.664062 1.488281 -1.488281 s -0.664062 -1.488281 -1.488281 -1.488281 z m 0 0"/>
        <path d="m 14.488281 7.976562 c -0.265625 0 -0.488281 -0.21875 -0.488281 -0.488281 c 0 -0.265625 0.222656 -0.488281 0.488281 -0.488281 c 0.269531 0 0.488281 0.222656 0.488281 0.488281 c 0 0.269531 -0.21875 0.488281 -0.488281 0.488281 z m 0 -1.976562 c -0.824219 0 -1.488281 0.664062 -1.488281 1.488281 s 0.664062 1.488281 1.488281 1.488281 s 1.488281 -0.664062 1.488281 -1.488281 s -0.664062 -1.488281 -1.488281 -1.488281 z m 0 0"/>
    </g>
    <path d="m 10 7.53125 h 4" fill="none" stroke="currentColor"/>
    <path d="m 4.5 4 h 3 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -3 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBrainAugemntedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrainAugemntedSymbolic;
