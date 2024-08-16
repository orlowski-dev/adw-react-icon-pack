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
        <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0 2 c 3.324219 0 6 2.675781 6 6 s -2.675781 6 -6 6 s -6 -2.675781 -6 -6 s 2.675781 -6 6 -6 z m 0 0"/>
        <path d="m 11.347656 11 l -0.59375 2.878906 l 3.53125 -3.300781 z m 0 0"/>
        <path d="m 6.140625 11.9375 l -2.507813 0.40625 c 0.757813 0.9375 1.957032 1.585938 3.753907 1.84375 z m 0 0"/>
        <path d="m 2.914062 8.5 l -1.0625 -1.429688 l 0.066407 2.929688 z m 0 0"/>
        <path d="m 6.636719 3.042969 l 1.246093 -1.273438 l -2.882812 0.527344 z m 0 0"/>
        <path d="m 12.25 5.195312 l 1.59375 0.804688 l -1.375 -2.589844 z m 0 0"/>
        <path d="m 9.996094 9.46875 l -2.808594 0.914062 l -1.738281 -2.394531 l 1.742187 -2.390625 l 2.808594 0.917969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFootballSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFootballSymbolic;
