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
        <path d="m 2 9 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 12 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 4.949219 4.042969 c -1.21875 0.015625 -2.414063 0.40625 -3.5 1.121093 c -0.460938 0.304688 -0.589844 0.921876 -0.285157 1.386719 c 0.304688 0.460938 0.921876 0.589844 1.382813 0.285157 c 1.695313 -1.109376 3.105469 -1.222657 4.945313 -0.003907 l -0.015626 -0.007812 c 2.253907 1.550781 4.839844 1.46875 7.070313 0.011719 c 0.460937 -0.300782 0.59375 -0.921876 0.289063 -1.382813 c -0.300782 -0.460937 -0.921876 -0.59375 -1.382813 -0.289063 c -1.746094 1.140626 -3.125 1.191407 -4.839844 0.011719 l -0.007812 -0.003906 l -0.007813 -0.007813 c -1.1875 -0.785156 -2.429687 -1.140624 -3.648437 -1.125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwApproximatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApproximatesymbolic;
