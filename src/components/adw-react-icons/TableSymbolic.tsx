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
        <path d="m 3 1 c -1.667969 0 -3.03125 1.363281 -3.03125 3.03125 v 7.9375 c 0 1.667969 1.363281 3.03125 3.03125 3.03125 h 9 c 1.667969 0 3.03125 -1.363281 3.03125 -3.03125 v -7.9375 c 0 -1.667969 -1.363281 -3.03125 -3.03125 -3.03125 z m 4 1 h 1 v 2 h -1 z m -5.03125 3 h 11.0625 v 6.96875 c 0 0.597656 -0.433594 1.03125 -1.03125 1.03125 h -9 c -0.597656 0 -1.03125 -0.433594 -1.03125 -1.03125 z m 0 0"/>
        <path d="m 6.898438 5 h 1.101562 v 9 h -1.101562 z m 0 0"/>
        <path d="m 1 7 h 13 v 1 h -13 z m 0 0"/>
        <path d="m 1 10 h 13 v 1 h -13 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTableSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTableSymbolic;
