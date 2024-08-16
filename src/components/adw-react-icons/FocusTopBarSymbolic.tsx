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
      <path d="m 2.0625 2 c -1.125 0 -2.0625 0.9375 -2.0625 2.058594 v 7.890625 h 1.039062 v -1.015625 h 0.960938 v -4.875 c 0 -0.050782 0.011719 -0.058594 0.0625 -0.058594 h 11.902344 c 0.050781 0 0.058594 0.011719 0.058594 0.058594 v 7.980468 h 0.933593 l 0.046875 -1.058593 h 1.019532 v -8.921875 c 0 -1.121094 -0.933594 -2.058594 -2.058594 -2.058594 z m 7.949219 2.074219 h 3.976562 v 0.925781 h -3.976562 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFocusTopBarSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFocusTopBarSymbolic;
