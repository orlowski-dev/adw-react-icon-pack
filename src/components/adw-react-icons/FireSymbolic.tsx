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
      <path d="m 9.183594 0.972656 c -4.226563 2.140625 -3.597656 5.300782 -2.183594 8.027344 c -1.238281 -1.640625 -1.984375 -3.519531 -2 -5 c -1.625 1 -3 3 -3 5 c 0 3.3125 2.6875 6 6 6 c 5 0 8 -5.464844 4.089844 -9.320312 c -3.996094 -3.9375 -2.90625 -4.707032 -2.90625 -4.707032 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFireSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFireSymbolic;
