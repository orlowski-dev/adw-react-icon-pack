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
      <path d="m 5.425781 1 c -2.433593 0 -4.425781 1.992188 -4.425781 4.425781 c 0 6.242188 6.546875 9.464844 6.546875 9.464844 c 0.285156 0.144531 0.621094 0.144531 0.90625 0 c 0 0 6.546875 -3.222656 6.546875 -9.464844 c 0 -2.433593 -1.992188 -4.425781 -4.425781 -4.425781 c -0.003907 0 -0.003907 0 -0.003907 0 c -0.953124 0 -1.816406 0.390625 -2.570312 0.949219 c -0.753906 -0.558594 -1.617188 -0.949219 -2.570312 -0.949219 c 0 0 0 0 -0.003907 0 z m 0 2 c 0.699219 0 1.363281 0.300781 1.824219 0.824219 c 0.191406 0.214843 0.464844 0.339843 0.75 0.339843 s 0.558594 -0.125 0.75 -0.339843 c 0.460938 -0.523438 1.125 -0.824219 1.824219 -0.824219 c 1.351562 0 2.425781 1.074219 2.425781 2.425781 c 0 4.394531 -4.238281 6.910157 -5 7.34375 c -0.761719 -0.433593 -5 -2.949219 -5 -7.34375 c 0 -1.351562 1.074219 -2.425781 2.425781 -2.425781 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNonEmergencyHealthcareSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNonEmergencyHealthcareSymbolic;
