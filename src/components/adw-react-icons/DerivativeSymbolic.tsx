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
        <path d="m 13 2 v 2 h -11 v -2 z m -13 0 v 2 c 0 1.109375 0.890625 2 2 2 h 11 c 1.109375 0 2 -0.890625 2 -2 v -2 c 0 -1.109375 -0.890625 -2 -2 -2 h -11 c -1.109375 0 -2 0.890625 -2 2 z m 0 0"/>
        <path d="m 2.5 14 c -0.269531 0 -0.5 -0.230469 -0.5 -0.5 s 0.230469 -0.5 0.5 -0.5 s 0.5 0.230469 0.5 0.5 s -0.230469 0.5 -0.5 0.5 z m 0 -3 c -1.386719 0 -2.5 1.113281 -2.5 2.5 s 1.113281 2.5 2.5 2.5 s 2.5 -1.113281 2.5 -2.5 s -1.113281 -2.5 -2.5 -2.5 z m 0 0"/>
        <path d="m 7.5 14 c -0.269531 0 -0.5 -0.230469 -0.5 -0.5 s 0.230469 -0.5 0.5 -0.5 s 0.5 0.230469 0.5 0.5 s -0.230469 0.5 -0.5 0.5 z m 0 -3 c -1.386719 0 -2.5 1.113281 -2.5 2.5 s 1.113281 2.5 2.5 2.5 s 2.5 -1.113281 2.5 -2.5 s -1.113281 -2.5 -2.5 -2.5 z m 0 0"/>
        <path d="m 12.5 14 c -0.269531 0 -0.5 -0.230469 -0.5 -0.5 s 0.230469 -0.5 0.5 -0.5 s 0.5 0.230469 0.5 0.5 s -0.230469 0.5 -0.5 0.5 z m 0 -3 c -1.386719 0 -2.5 1.113281 -2.5 2.5 s 1.113281 2.5 2.5 2.5 s 2.5 -1.113281 2.5 -2.5 s -1.113281 -2.5 -2.5 -2.5 z m 0 0"/>
        <path d="m 7 5.5 v 6.5 h 1 v -6.5 z m 0 0"/>
        <path d="m 3 12 l 0.003906 -2.21875 c 0.003906 -0.414062 0.34375 -0.753906 0.757813 -0.753906 l 7.488281 -0.019532 c 0.410156 -0.003906 0.75 0.335938 0.75 0.746094 v 2.246094 h 1 v -2.246094 c 0 -0.96875 -0.785156 -1.75 -1.753906 -1.746094 l -7.488282 0.019532 c -0.96875 0 -1.75 0.78125 -1.753906 1.753906 l -0.003906 2.21875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDerivativeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDerivativeSymbolic;
