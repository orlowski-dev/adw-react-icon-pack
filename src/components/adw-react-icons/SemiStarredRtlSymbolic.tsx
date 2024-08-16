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
      <path d="m 8 -0.105469 v 4.210938 l -0.675781 2.070312 c -0.132813 0.410157 -0.515625 0.6875 -0.945313 0.691407 l -2.253906 0.007812 l 1.703125 1.203125 c 0.363281 0.257813 0.511719 0.722656 0.367187 1.144531 l -0.765624 2.191406 l 1.960937 -1.300781 c 0.203125 -0.058593 0.40625 -0.113281 0.609375 -0.167969 v 2.226563 l -0.046875 -0.03125 l -3.898437 2.585937 c -0.800782 0.527344 -1.8125 -0.257812 -1.496094 -1.164062 l 1.5 -4.289062 l -3.640625 -2.574219 c -0.792969 -0.5625 -0.3984378 -1.808594 0.574219 -1.8125 l 4.65625 -0.015625 l 1.402343 -4.289063 c 0.132813 -0.40625 0.515625 -0.683593 0.949219 -0.6875 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 8 -0.105469 c 0.429688 0 0.8125 0.273438 0.949219 0.683594 l 1.449219 4.339844 l 4.59375 -0.015625 c 0.980468 -0.007813 1.382812 1.253906 0.578124 1.816406 l -3.625 2.558594 l 1.5 4.285156 c 0.3125 0.902344 -0.691406 1.691406 -1.488281 1.171875 l -3.957031 -2.5625 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSemiStarredRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSemiStarredRtlSymbolic;
