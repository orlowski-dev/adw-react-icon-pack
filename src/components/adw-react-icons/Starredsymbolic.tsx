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
      <path d="m 8 0 c -0.429688 0 -0.8125 0.273438 -0.949219 0.683594 l -1.449219 4.339844 l -4.589843 -0.015626 c -0.980469 -0.003906 -1.382813 1.257813 -0.582031 1.820313 l 3.625 2.554687 l -1.5 4.285157 c -0.316407 0.902343 0.6875 1.691406 1.492187 1.171875 l 4.003906 -2.59375 l 3.894531 2.585937 c 0.800782 0.53125 1.816407 -0.257812 1.5 -1.160156 l -1.503906 -4.289063 l 3.644532 -2.578124 c 0.789062 -0.5625 0.394531 -1.808594 -0.574219 -1.8125 l -4.660157 -0.015626 l -1.402343 -4.285156 c -0.132813 -0.410156 -0.515625 -0.68749975 -0.949219 -0.691406 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwStarredsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStarredsymbolic;
