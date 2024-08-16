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
      <path d="m 4.003906 4.070312 v 7.859376 c 0 1.070312 0.90625 1.066406 0.90625 1.066406 h 0.09375 c 0.171875 0 0.347656 -0.039063 0.5 -0.125 l 7 -4 c 0.308594 -0.171875 0.46875 -0.523438 0.46875 -0.875 c 0 -0.351563 -0.160156 -0.703125 -0.46875 -0.875 l -7 -4 c -0.152344 -0.085938 -0.328125 -0.125 -0.5 -0.125 h -0.09375 s -0.90625 0 -0.90625 1.074218 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlaySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaySymbolic;
