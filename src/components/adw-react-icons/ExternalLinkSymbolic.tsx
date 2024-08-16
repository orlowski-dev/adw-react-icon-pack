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
      <path d="m 3 2 c -1.660156 0 -3 1.339844 -3 3 v 8 c 0 1.660156 1.339844 3 3 3 h 8 c 1.660156 0 3 -1.339844 3 -3 v -4 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 4 c 0 0.554688 -0.445312 1 -1 1 h -8 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 7 -2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2.585938 l -5.292969 5.289062 c -0.390625 0.394532 -0.390625 1.027344 0 1.417969 s 1.023437 0.390625 1.414062 0 l 5.292969 -5.292969 v 2.585938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -5 c 0 -0.085938 -0.011719 -0.171875 -0.035156 -0.257812 c -0.023438 -0.085938 -0.054688 -0.167969 -0.101563 -0.242188 c -0.042969 -0.074219 -0.09375 -0.144531 -0.15625 -0.207031 c -0.015625 -0.011719 -0.03125 -0.023438 -0.046875 -0.035157 c -0.054687 -0.050781 -0.117187 -0.09375 -0.183594 -0.128906 c -0.035156 -0.019531 -0.074218 -0.035156 -0.113281 -0.0468748 c -0.050781 -0.0234374 -0.101562 -0.0390624 -0.15625 -0.0507812 c -0.039062 -0.0117188 -0.082031 -0.015625 -0.121093 -0.0195312 c -0.03125 -0.00781255 -0.058594 -0.00781255 -0.085938 -0.0117188 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwExternalLinkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExternalLinkSymbolic;
