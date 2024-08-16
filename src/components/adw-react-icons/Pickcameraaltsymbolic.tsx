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
        <path d="m 12.546875 6.035156 c -0.277344 -0.097656 -0.589844 -0.039062 -0.796875 0.144532 l -1.542969 1.359374 c -0.28125 0.25 -0.277343 0.648438 0.003907 0.894532 l 1.542968 1.339844 c 0.207032 0.183593 0.519532 0.234374 0.792969 0.136718 s 0.453125 -0.328125 0.453125 -0.585937 v -2.699219 c 0 -0.257812 -0.179688 -0.492188 -0.453125 -0.589844 z m -7.546875 -1.015625 h 3 c 1.105469 0 2 0.890625 2 2 v 2 c 0 1.109375 -0.894531 2 -2 2 h -3 c -1.109375 0 -2 -0.890625 -2 -2 v -2 c 0 -1.109375 0.890625 -2 2 -2 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m -0.00390625 4.988281 v 1 h 1.00000025 v -1 c 0 -0.550781 0.445312 -1 1 -1 h 1 v -1 h -1 c -1.105469 0 -2.00000025 0.894531 -2.00000025 2 z m 0 0"/>
            <path d="m -0.00390625 10.988281 v -1 h 1.00000025 v 1 c 0 0.554688 0.445312 1 1 1 h 1 v 1 h -1 c -1.105469 0 -2.00000025 -0.894531 -2.00000025 -2 z m 0 0"/>
            <path d="m 16.003906 4.988281 v 1 h -1 v -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -1.003906 v -1 h 1.003906 c 1.101563 0 2 0.894531 2 2 z m 0 0"/>
            <path d="m 16.003906 10.988281 v -1 h -1 v 1 c 0 0.554688 -0.449218 1 -1 1 h -1.003906 v 1 h 1.003906 c 1.101563 0 2 -0.894531 2 -2 z m 0 0"/>
        </g>
        <path d="m 5 13 c -1.109375 0 -2 0.890625 -2 2 v 1 h 7 v -1 c 0 -1.109375 -0.890625 -2 -2 -2 z m 7.339844 0.972656 c -0.21875 -0.015625 -0.433594 0.050782 -0.585938 0.1875 l -1.542968 1.359375 c -0.140626 0.128907 -0.214844 0.304688 -0.199219 0.480469 h 2.988281 v -1.394531 c 0 -0.257813 -0.179688 -0.488281 -0.453125 -0.585938 c -0.066406 -0.027343 -0.136719 -0.039062 -0.207031 -0.046875 z m -9.339844 -13.972656 v 1 c 0 1.109375 0.890625 2 2 2 h 3 c 1.109375 0 2 -0.890625 2 -2 v -1 z m 7.011719 0 c 0.003906 0.15625 0.078125 0.300781 0.203125 0.414062 l 1.539062 1.339844 c 0.207032 0.183594 0.523438 0.234375 0.796875 0.136719 c 0.273438 -0.097656 0.449219 -0.328125 0.449219 -0.585937 v -1.304688 z m 0 0" fill-opacity="0.33"/>
    </g>
    </svg>
  );
};

const AdwPickcameraaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPickcameraaltsymbolic;
