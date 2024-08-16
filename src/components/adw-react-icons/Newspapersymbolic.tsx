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
      <path d="m 0 3 v 9 c 0 2.199219 1.800781 4 4 4 h 9 v -0.035156 c 1.71875 -0.25 3.039062 -1.765625 3 -3.539063 v -5.425781 c 0 -1.65625 -1.34375 -3 -3 -3 h -2 v -1 c 0 -1.65625 -1.34375 -3 -3 -3 h -5 c -1.65625 0 -3 1.34375 -3 3 z m 3 -1 h 5 c 0.550781 0 1 0.449219 1 1 v 9.445312 c 0 0.558594 0.136719 1.082032 0.367188 1.554688 h -5.367188 c -1.117188 0 -2 -0.882812 -2 -2 v -9 c 0 -0.550781 0.449219 -1 1 -1 z m 0 1 v 2 h 5 v -2 z m 0 3 v 1 h 5 v -1 z m 8 0 h 2 c 0.550781 0 1 0.449219 1 1 v 5.46875 c 0.019531 0.835938 -0.621094 1.503906 -1.457031 1.527344 c -0.863281 -0.007813 -1.542969 -0.683594 -1.542969 -1.550782 z m -8 2 v 1 h 5 v -1 z m 0 2 v 1 h 5 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNewspapersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNewspapersymbolic;
