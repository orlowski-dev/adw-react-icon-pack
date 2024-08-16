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
      <path d="m 8 0 c -4.402344 0 -8 3.597656 -8 8 s 3.597656 8 8 8 s 8 -3.597656 8 -8 s -3.597656 -8 -8 -8 z m 0 1.980469 c 3.339844 0 6.019531 2.679687 6.019531 6.019531 s -2.679687 6.019531 -6.019531 6.019531 s -6.015625 -2.679687 -6.015625 -6.019531 s 2.675781 -6.019531 6.015625 -6.019531 z m -0.539062 1.019531 v 4.773438 c 0 0.28125 0.097656 0.515624 0.285156 0.621093 l 2.832031 2.082031 l 0.667969 -0.847656 l -2.707032 -2.003906 v -4.625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwClockSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwClockSymbolic;
