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
      <path d="m 3 16 h 10 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -10 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 6 -1 v -7 c 0 -4.183594 -3.089844 -6 -7 -6 c -0.550781 0 -1 0.449219 -1 1 c 0 4.824219 3.238281 7.566406 7.257812 6.496094 c 0.53125 -0.140625 0.851563 -0.6875 0.707032 -1.222656 c -0.140625 -0.53125 -0.6875 -0.851563 -1.222656 -0.707032 c -2.570313 0.683594 -4.742188 -0.910156 -4.742188 -4.566406 l -1 1 c 3.089844 0 5 1.183594 5 4 v 7 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 z m 1 -8.5 v -0.53125 c 0 -2.8125 1.902344 -3.96875 5 -3.96875 l -1 -1 c 0 3.6875 -1.230469 5 -5 5 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 c 4.882812 0 7 -2.238281 7 -7 c 0 -0.550781 -0.449219 -1 -1 -1 c -3.902344 0 -7 1.785156 -7 5.96875 v 0.53125 c 0 0.554688 0.449219 1 1 1 s 1 -0.445312 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSproutSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSproutSymbolic;
