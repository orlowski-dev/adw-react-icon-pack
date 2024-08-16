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
        <path d="m 10.15625 1 c -0.191406 0.011719 -0.378906 0.121094 -0.566406 0.304688 l -8.589844 8.433593 l 2.320312 2.277344 h 5.621094 l 5.816406 -5.710937 c 0.328126 -0.320313 0.304688 -0.800782 0.007813 -1.089844 l -3.996094 -3.925782 c -0.21875 -0.210937 -0.417969 -0.300781 -0.613281 -0.289062 z m -3.960938 5.628906 l 2.765626 2.570313 c 0.210937 0.125 0.199218 0.578125 0.035156 0.746093 l -0.996094 1.054688 h -4.25 l -1.277344 -1.257812 l 3.066406 -3.078126 c 0.1875 -0.1875 0.5 -0.191406 0.65625 -0.035156 z m 0 0"/>
        <path d="m 9 11 h 6 v 1 h -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEraser2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEraser2Symbolic;
