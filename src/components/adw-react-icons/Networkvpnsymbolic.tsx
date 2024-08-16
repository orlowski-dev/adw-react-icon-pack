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
        <path d="m 7.917969 1 c -1.617188 0 -2.917969 1.300781 -2.917969 2.917969 v 1.082031 c -0.5625 0.007812 -1.007812 0.46875 -1 1.03125 v 3.9375 c 0 0.570312 0.460938 1.03125 1.03125 1.03125 h 1.96875 v 1.875 h 2 v -1.875 h 1.96875 c 0.570312 0 1.03125 -0.460938 1.03125 -1.03125 v -3.9375 c 0.007812 -0.5625 -0.4375 -1.023438 -1 -1.03125 v -1.082031 c 0 -1.617188 -1.300781 -2.917969 -2.917969 -2.917969 z m 0.082031 2 c 0.554688 0 1 0.445312 1 1 v 1 h -2 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 7.996094 15.949219 c -0.703125 0 -1.351563 -0.371094 -1.714844 -0.972657 h -3.285156 c -0.550782 0 -1 -0.449218 -1 -1 c 0 -0.550781 0.449218 -1 1 -1 h 3.25 c 0.351562 -0.640624 1.019531 -1.035156 1.75 -1.039062 c 0.730468 0.003906 1.402344 0.398438 1.753906 1.039062 h 3.257812 c 0.554688 0 1 0.449219 1 1 c 0 0.550782 -0.445312 1 -1 1 h -3.292968 c -0.363282 0.601563 -1.015625 0.972657 -1.71875 0.972657 z m 0 -1 c 0.554687 0 1.007812 -0.449219 1.007812 -1.003907 c 0 -0.558593 -0.453125 -1.007812 -1.007812 -1.007812 c -0.554688 0 -1.003906 0.449219 -1.003906 1.007812 c 0 0.554688 0.449218 1.003907 1.003906 1.003907 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkvpnsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkvpnsymbolic;
