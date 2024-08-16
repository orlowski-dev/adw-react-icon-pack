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
      <path d="m 8 0 c -4.402344 0 -8 3.597656 -8 8 s 3.597656 8 8 8 s 8 -3.597656 8 -8 s -3.597656 -8 -8 -8 z m 0 1.980469 c 3.339844 0 6.019531 2.679687 6.019531 6.019531 s -2.679687 6.019531 -6.019531 6.019531 s -6.019531 -2.679687 -6.019531 -6.019531 s 2.679687 -6.019531 6.019531 -6.019531 z m -2 3.019531 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -5.28125 4.066406 c -0.113281 0.066406 -0.199219 0.175782 -0.234375 0.304688 s -0.015625 0.265625 0.050781 0.378906 c 0.714844 1.238281 2.035156 2 3.464844 2 s 2.75 -0.761719 3.464844 -2 c 0.066406 -0.113281 0.085937 -0.25 0.050781 -0.378906 s -0.121094 -0.238282 -0.234375 -0.304688 s -0.25 -0.085937 -0.378906 -0.050781 s -0.238282 0.121094 -0.304688 0.234375 c -0.535156 0.929688 -1.523437 1.5 -2.597656 1.5 s -2.0625 -0.570312 -2.597656 -1.5 c -0.066406 -0.113281 -0.175782 -0.199219 -0.304688 -0.234375 s -0.265625 -0.015625 -0.378906 0.050781 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojiPeopleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojiPeopleSymbolic;
