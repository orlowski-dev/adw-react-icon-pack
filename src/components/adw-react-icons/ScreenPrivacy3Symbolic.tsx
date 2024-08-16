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
        <path d="m 3 1 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.664062 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.335938 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 8 16 c 3 0 4 -1 4 -1 h -8 s 1 1 4 1 z m 0 0"/>
        <path d="m 10.007812 8 c 0 1.109375 -0.898437 2.007812 -2.007812 2.007812 s -2.007812 -0.898437 -2.007812 -2.007812 s 0.898437 -2.007812 2.007812 -2.007812 s 2.007812 0.898437 2.007812 2.007812 z m 0 0"/>
        <path d="m 8 3.992188 c -2.761719 0 -5 1.570312 -5 3.5 c 0 0.171874 0.015625 0.339843 0.050781 0.507812 c 0.359375 -1.71875 2.46875 -2.992188 4.949219 -2.992188 s 4.585938 1.273438 4.949219 2.992188 c 0.03125 -0.167969 0.050781 -0.335938 0.050781 -0.507812 c 0 -1.929688 -2.238281 -3.5 -5 -3.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenPrivacy3Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacy3Symbolic;
