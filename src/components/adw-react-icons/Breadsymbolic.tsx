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
      <path d="m 3.5 1 c -1.921875 0 -3.5 1.578125 -3.5 3.5 c 0 1.347656 0.875 2.363281 2 2.949219 v 5.550781 c 0 1.089844 0.910156 2 2 2 h 8 c 1.089844 0 2 -0.910156 2 -2 v -5.550781 c 1.125 -0.585938 2 -1.601563 2 -2.949219 c 0 -1.921875 -1.578125 -3.5 -3.5 -3.5 h -4.5 s -0.667969 0 -1 0 s -1 0 -1 0 z m 0 2 h 7 c 0.847656 0 1.5 0.652344 1.5 1.5 c 0 0.742188 -0.511719 1.332031 -1.199219 1.46875 c -0.464843 0.097656 -0.800781 0.507812 -0.800781 0.980469 v 6.050781 h -6 v -6.050781 c 0 -0.472657 -0.335938 -0.882813 -0.800781 -0.980469 c -0.6875 -0.136719 -1.199219 -0.726562 -1.199219 -1.46875 c 0 -0.847656 0.652344 -1.5 1.5 -1.5 z m 4.96875 3 c -0.042969 0.003906 -0.085938 0.011719 -0.125 0.027344 l -3 1 c -0.265625 0.085937 -0.40625 0.367187 -0.320312 0.632812 c 0.089843 0.261719 0.371093 0.402344 0.632812 0.316406 l 3 -1 c 0.265625 -0.089843 0.40625 -0.371093 0.320312 -0.632812 c -0.074218 -0.21875 -0.28125 -0.355469 -0.507812 -0.34375 z m 0 2 c -0.042969 0.003906 -0.085938 0.011719 -0.125 0.027344 l -3 1 c -0.265625 0.085937 -0.40625 0.367187 -0.320312 0.632812 c 0.089843 0.261719 0.371093 0.402344 0.632812 0.316406 l 3 -1 c 0.265625 -0.089843 0.40625 -0.371093 0.320312 -0.632812 c -0.074218 -0.21875 -0.28125 -0.355469 -0.507812 -0.34375 z m 0 2 c -0.042969 0.003906 -0.085938 0.011719 -0.125 0.027344 l -3 1 c -0.265625 0.085937 -0.40625 0.367187 -0.320312 0.632812 c 0.089843 0.261719 0.371093 0.402344 0.632812 0.316406 l 3 -1 c 0.265625 -0.089843 0.40625 -0.371093 0.320312 -0.632812 c -0.074218 -0.21875 -0.28125 -0.355469 -0.507812 -0.34375 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBreadsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBreadsymbolic;
