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
        <path d="m 9.445312 0.046875 c -0.417968 -0.0117188 -0.824218 0.140625 -1.128906 0.421875 l -0.324218 0.289062 l -0.320313 -0.289062 c -1.597656 -1.46875 -3.773437 0.976562 -2.128906 2.390625 l 2.449219 2.183594 l 2.453124 -2.183594 c 1.109376 -0.953125 0.460938 -2.7734375 -1 -2.8125 z m 0 0"/>
        <path d="m 10.5 5 c -0.449219 0 -0.886719 0.054688 -1.304688 0.15625 c 0.40625 0.285156 0.789063 0.613281 1.128907 0.988281 c 0.253906 0.28125 0.476562 0.578125 0.671875 0.890625 c 1.707031 0.238282 3.003906 1.6875 3.003906 3.464844 c 0 1.945312 -1.554688 3.5 -3.5 3.5 s -3.5 -1.554688 -3.5 -3.5 c 0 -0.589844 0.144531 -1.140625 0.398438 -1.625 c -0.015626 -0.019531 -0.027344 -0.035156 -0.042969 -0.050781 c -0.457031 -0.503907 -1.085938 -0.796875 -1.75 -0.824219 c -0.386719 0.75 -0.605469 1.601562 -0.605469 2.5 c 0 3.027344 2.472656 5.5 5.5 5.5 s 5.5 -2.472656 5.5 -5.5 s -2.472656 -5.5 -5.5 -5.5 z m 0 0"/>
        <path d="m 5.5 16 c 0.449219 0 0.886719 -0.054688 1.304688 -0.15625 c -0.40625 -0.285156 -0.789063 -0.613281 -1.128907 -0.988281 c -0.253906 -0.277344 -0.476562 -0.578125 -0.671875 -0.890625 c -1.707031 -0.238282 -3.003906 -1.6875 -3.003906 -3.464844 c 0 -1.945312 1.554688 -3.5 3.5 -3.5 s 3.5 1.554688 3.5 3.5 c 0 0.589844 -0.144531 1.140625 -0.398438 1.628906 c 0.015626 0.015625 0.027344 0.03125 0.042969 0.046875 c 0.457031 0.503907 1.085938 0.796875 1.75 0.824219 c 0.386719 -0.75 0.605469 -1.601562 0.605469 -2.5 c 0 -3.027344 -2.472656 -5.5 -5.5 -5.5 s -5.5 2.472656 -5.5 5.5 s 2.472656 5.5 5.5 5.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwAnniversarySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAnniversarySymbolic;
