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
        <path d="m 8.097656 0.015625 c -2.203125 0 -4 1.796875 -4 4 s 1.796875 4 4 4 c 2.199219 0 4 -1.796875 4 -4 s -1.800781 -4 -4 -4 z m 0 1.972656 c 1.121094 -0.003906 2.027344 0.90625 2.027344 2.027344 s -0.90625 2.03125 -2.027344 2.027344 c -1.121094 0.003906 -2.03125 -0.90625 -2.027344 -2.027344 c -0.003906 -1.121094 0.90625 -2.03125 2.027344 -2.027344 z m 3.90625 5.011719 c -1.96875 0.003906 -3.644531 1.433594 -3.949218 3.378906 c -0.320313 -1.90625 -1.980469 -3.363281 -3.972657 -3.363281 c -2.222656 0 -4.0312498 1.8125 -4.0312498 4.03125 s 1.8085938 4.03125 4.0312498 4.03125 c 2.007813 0 3.683594 -1.484375 3.984375 -3.414063 c 0.320313 1.921876 1.984375 3.332032 3.9375 3.335938 c 2.207032 0 3.996094 -1.792969 3.996094 -4 s -1.789062 -4 -3.996094 -4 z m -7.921875 2.003906 c 1.128907 -0.003906 2.042969 0.914063 2.042969 2.042969 s -0.914062 2.046875 -2.042969 2.042969 c -1.132812 0.003906 -2.046875 -0.914063 -2.042969 -2.042969 c -0.003906 -1.128906 0.910157 -2.046875 2.042969 -2.042969 z m 0 0"/>
        <path d="m 6.910156 11 c 0 1.554688 -1.261718 2.8125 -2.8125 2.8125 c -1.554687 0 -2.8125 -1.257812 -2.8125 -2.8125 s 1.257813 -2.8125 2.8125 -2.8125 c 1.550782 0 2.8125 1.257812 2.8125 2.8125 z m 0 0" fill-opacity="0.5"/>
    </g>
    </svg>
  );
};

const AdwColorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwColorSymbolic;
