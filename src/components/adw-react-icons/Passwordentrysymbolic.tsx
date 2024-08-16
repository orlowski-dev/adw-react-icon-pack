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
      <path d="m 0 2 v 12 h 2 v -12 z m 5.96875 3 c -0.550781 0 -1 0.449219 -1 1 v 0.621094 l -0.589844 -0.191406 c -0.527344 -0.171876 -1.089844 0.117187 -1.261718 0.644531 c -0.171876 0.523437 0.117187 1.085937 0.644531 1.257812 l 0.589843 0.191407 l -0.367187 0.507812 c -0.324219 0.445312 -0.222656 1.074219 0.222656 1.394531 c 0.445313 0.328125 1.070313 0.226563 1.394531 -0.21875 l 0.367188 -0.503906 l 0.367188 0.503906 c 0.324218 0.445313 0.949218 0.546875 1.394531 0.21875 c 0.445312 -0.320312 0.546875 -0.949219 0.222656 -1.394531 l -0.367187 -0.507812 l 0.589843 -0.191407 c 0.527344 -0.171875 0.816407 -0.734375 0.644531 -1.257812 c -0.171874 -0.527344 -0.734374 -0.816407 -1.261718 -0.644531 l -0.589844 0.191406 v -0.621094 c 0 -0.550781 -0.449219 -1 -1 -1 z m 7.039062 0 c -0.550781 0 -1 0.449219 -1 1 v 0.621094 l -0.589843 -0.191406 c -0.523438 -0.171876 -1.089844 0.117187 -1.261719 0.644531 c -0.167969 0.523437 0.117188 1.085937 0.640625 1.257812 l 0.59375 0.191407 l -0.367187 0.507812 c -0.324219 0.445312 -0.222657 1.074219 0.222656 1.394531 c 0.445312 0.328125 1.070312 0.226563 1.398437 -0.21875 l 0.363281 -0.503906 l 0.363282 0.503906 c 0.328125 0.449219 0.953125 0.546875 1.402344 0.21875 c 0.445312 -0.324219 0.542968 -0.949219 0.21875 -1.394531 l -0.367188 -0.507812 l 0.59375 -0.191407 c 0.523438 -0.171875 0.8125 -0.734375 0.640625 -1.257812 c -0.171875 -0.527344 -0.734375 -0.816407 -1.261719 -0.644531 l -0.589844 0.191406 v -0.621094 c 0 -0.550781 -0.449218 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPasswordentrysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPasswordentrysymbolic;
