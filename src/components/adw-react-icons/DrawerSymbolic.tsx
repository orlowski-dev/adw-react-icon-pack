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
      <path d="m 3.1875 0 c -1.207031 0 -2.1875 0.800781 -2.1875 2 v 10.976562 c 0 1.203126 0.980469 2 2.1875 2 h 9.625 c 1.207031 0 2.1875 -1.015624 2.1875 -2.21875 v -10.539062 c 0 -1.199219 -0.980469 -2.21875 -2.1875 -2.21875 z m -0.1875 2 h 10 v 11 h -10 z m 1 1 v 4 h 8.03125 v -4 z m 3 1 h 2 c 0.546875 0 1 0.453125 1 1 h -4 c 0 -0.546875 0.453125 -1 1 -1 z m -2.96875 4 v 4 h 8.03125 v -4 z m 2.96875 0.96875 h 2 c 0.546875 0 1 0.453125 1 1 h -4 c 0 -0.546875 0.453125 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawerSymbolic;
