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
        <path d="m 2.007812 -0.0078125 v 1.9218745 c 0 3.90625 3.144532 7.09375 6.992188 7.09375 c 3.851562 0 6.992188 -3.1875 6.992188 -7.09375 v -1.9218745 h -3.292969 c -0.546875 0 -0.992188 0.4531245 -0.992188 1.0078125 s 0.445313 1.007812 0.992188 1.007812 h 1.289062 c -0.050781 2.769532 -2.242187 4.984376 -4.988281 4.984376 c -2.742188 0 -4.9375 -2.214844 -4.988281 -4.984376 h 1.289062 c 0.546875 0 0.992188 -0.453124 0.992188 -1.007812 s -0.445313 -1.0078125 -0.992188 -1.0078125 z m 0 0"/>
        <path d="m 3 8 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 s 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 2 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0"/>
        <path d="m 8 8 v 4 c 0 1.117188 -0.882812 2 -2 2 s -2 -0.882812 -2 -2 h -2 c 0 2.199219 1.800781 4 4 4 s 4 -1.800781 4 -4 v -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDoctorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDoctorSymbolic;
