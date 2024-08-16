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
        <path d="m 8 0 c -4.402344 0 -8 3.597656 -8 8 s 3.597656 8 8 8 s 8 -3.597656 8 -8 s -3.597656 -8 -8 -8 z m 0 1.980469 c 3.339844 0 6.019531 2.679687 6.019531 6.019531 s -2.679687 6.019531 -6.019531 6.019531 s -6.019531 -2.679687 -6.019531 -6.019531 s 2.679687 -6.019531 6.019531 -6.019531 z m 0 0"/>
        <path d="m 8 6 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCircleAnchorCenterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCircleAnchorCenterSymbolic;
