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
      <path d="m 9.183594 0.972656 c -4.226563 2.140625 -3.597656 5.300782 -2.183594 8.027344 c -1.238281 -1.640625 -1.984375 -3.519531 -2 -5 c -1.625 1 -3 3 -3 5 c 0 2.601562 1.65625 4.816406 3.96875 5.648438 c -0.492188 -0.839844 -0.367188 -1.960938 0.703125 -3.015626 c 2.140625 -2.109374 1.558594 -2.734374 1.558594 -2.734374 c 2.265625 1.148437 -0.320313 3.136718 0.417969 3.878906 c 0.5625 0.558594 1.757812 -1.390625 1.769531 -2.183594 c 0.847656 0.960938 1.246093 1.675781 1.246093 2.75 c 0 0.183594 -0.011718 0.355469 -0.035156 0.519531 c 2.511719 -1.804687 3.273438 -5.410156 0.460938 -8.183593 c -3.996094 -3.9375 -2.90625 -4.707032 -2.90625 -4.707032 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFiresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFiresymbolic;
