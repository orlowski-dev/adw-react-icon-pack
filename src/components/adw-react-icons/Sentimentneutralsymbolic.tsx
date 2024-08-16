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
      <path d="m 8 0 c -4.402344 0 -8 3.597656 -8 8 s 3.597656 8 8 8 s 8 -3.597656 8 -8 s -3.597656 -8 -8 -8 z m 0 1.980469 c 3.339844 0 6.019531 2.679687 6.019531 6.019531 s -2.679687 6.019531 -6.019531 6.019531 s -6.019531 -2.679687 -6.019531 -6.019531 s 2.679687 -6.019531 6.019531 -6.019531 z m -2 3.019531 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -4.582031 5 c -0.230469 0 -0.417969 0.1875 -0.417969 0.417969 v 0.164062 c 0 0.230469 0.1875 0.417969 0.417969 0.417969 h 5.164062 c 0.230469 0 0.417969 -0.1875 0.417969 -0.417969 v -0.164062 c 0 -0.230469 -0.1875 -0.417969 -0.417969 -0.417969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSentimentneutralsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSentimentneutralsymbolic;
