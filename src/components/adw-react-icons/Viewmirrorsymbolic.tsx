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
      <g fill="#2e3436">
        <path d="m 2 0 c -0.859375 0 -1.429688 0.320312 -1.710938 0.699219 c -0.28515575 0.378906 -0.289062 0.800781 -0.289062 0.800781 v 13 s 0.00390625 0.421875 0.289062 0.800781 c 0.28125 0.378907 0.851563 0.699219 1.710938 0.699219 c 0.109375 0 0.21875 -0.035156 0.304688 -0.105469 l 5.5 -4.25 c 0.125 -0.09375 0.195312 -0.238281 0.195312 -0.394531 v -6.75 c 0 -0.160156 -0.074219 -0.308594 -0.207031 -0.40625 l -5.5 -4 c -0.082031 -0.0585938 -0.1875 -0.09375 -0.292969 -0.09375 z m 0 1.117188 l 5 3.640624 v 6.246094 l -5 3.863282 z m 0 0"/>
        <path d="m 14 0 c -0.105469 0 -0.210938 0.0351562 -0.296875 0.09375 l -5.5 4 c -0.128906 0.097656 -0.203125 0.246094 -0.203125 0.40625 v 6.75 c 0 0.15625 0.070312 0.300781 0.191406 0.394531 l 5.5 4.25 c 0.089844 0.070313 0.199219 0.105469 0.308594 0.105469 c 0.859375 0 1.429688 -0.320312 1.714844 -0.699219 c 0.28125 -0.378906 0.285156 -0.800781 0.285156 -0.800781 v -13 s -0.003906 -0.421875 -0.285156 -0.800781 c -0.285156 -0.378907 -0.855469 -0.699219 -1.714844 -0.699219 z m 0 1.117188 v 13.75 l -5 -3.863282 v -6.246094 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwViewmirrorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewmirrorsymbolic;
