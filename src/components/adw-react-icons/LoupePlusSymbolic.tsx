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
        <path d="m 10.875 10.0625 c -0.8125 0.148438 -1.105469 1.160156 -0.5 1.71875 l 3 3 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 l -3 -3 c -0.234375 -0.238281 -0.574219 -0.347656 -0.90625 -0.28125 z m 0 0"/>
        <path d="m 6.574219 0.0625 c -3.578125 0 -6.5000002 2.925781 -6.5000002 6.5 c 0 1.355469 0.4140622 2.613281 1.1289062 3.65625 c 0.269531 -0.644531 0.878906 -1.117188 1.589844 -1.203125 c -0.457031 -0.703125 -0.71875 -1.542969 -0.71875 -2.453125 c 0 -2.496094 2 -4.5 4.5 -4.5 c 2.496093 0 4.5 2.003906 4.5 4.5 c 0 2.5 -2.003907 4.5 -4.5 4.5 c -0.558594 0 -1.09375 -0.101562 -1.582031 -0.28125 c 0.003906 0.0625 0.007812 0.128906 0.007812 0.195312 v 0.023438 c 1.089844 0 2 0.910156 2 2 c 0 0.015625 0 0.03125 -0.003906 0.046875 c 3.382812 -0.222656 6.074218 -3.046875 6.074218 -6.480469 c 0 -3.578125 -2.921874 -6.4999998 -6.5 -6.4999998 z m 0 0"/>
        <path d="m 3.023438 10 c 0.539062 0 0.976562 0.4375 0.976562 0.976562 v 4.089844 c 0 0.539063 -0.4375 0.976563 -0.976562 0.976563 c -0.539063 0 -0.976563 -0.4375 -0.976563 -0.976563 v -4.089844 c 0 -0.539062 0.4375 -0.976562 0.976563 -0.976562 z m 0 0"/>
        <path d="m 1.027344 12 h 3.972656 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -3.972656 c -0.550782 0 -1.0000002 -0.449219 -1.0000002 -1 s 0.4492182 -1 1.0000002 -1 z m 0 0"/>
        <path d="m 9.648438 3.179688 c -0.058594 0.125 -0.089844 0.261718 -0.089844 0.40625 v 0.453124 c -0.472656 0.128907 -0.929688 0.316407 -1.355469 0.566407 l -0.320313 -0.324219 c -0.394531 -0.390625 -1.019531 -0.390625 -1.410156 0 l -0.707031 0.707031 c -0.390625 0.386719 -0.390625 1.015625 0 1.40625 l 0.320313 0.324219 c -0.246094 0.425781 -0.433594 0.878906 -0.558594 1.355469 h -0.453125 c -0.554688 0 -1 0.445312 -1 0.996093 v 0.242188 c 0.523437 0.335938 0.882812 0.910156 0.921875 1.558594 c 0.503906 0.1875 1.042968 0.285156 1.585937 0.285156 c 0.605469 0 1.203125 -0.125 1.765625 -0.363281 c -0.179687 -0.382813 -0.273437 -0.804688 -0.273437 -1.230469 c 0 -1.65625 1.339843 -3 3 -3 c 0.027343 0.003906 0.054687 0.003906 0.085937 0.007812 c -0.003906 -1.292968 -0.554687 -2.523437 -1.511718 -3.390624 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLoupePlusSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLoupePlusSymbolic;
