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
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 9 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -9 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 8 0.0429688 c -1.0625 0 -2.125 0.5000002 -2.738281 1.5000002 l -4.222657 6.863281 c -1.210937 1.964844 0.257813 4.59375 2.566407 4.59375 h 8.789062 c 2.308594 0 3.777344 -2.628906 2.566407 -4.59375 l -4.222657 -6.863281 c -0.613281 -1 -1.675781 -1.5000002 -2.738281 -1.5000002 z m 0 1.9453122 c 0.394531 0 0.789062 0.199219 1.039062 0.605469 l 4.222657 6.863281 c 0.441406 0.71875 -0.019531 1.542969 -0.867188 1.542969 h -8.789062 c -0.847657 0 -1.308594 -0.824219 -0.867188 -1.542969 l 4.222657 -6.863281 c 0.25 -0.40625 0.644531 -0.605469 1.039062 -0.605469 z m 0 0"/>
        <path d="m 10.46875 7 c -0.132812 0 -0.261719 0.050781 -0.355469 0.144531 l -2.46875 2.5 c -0.191406 0.195313 -0.191406 0.515625 0 0.710938 c 0.195313 0.191406 0.515625 0.191406 0.710938 0 l 2.46875 -2.5 c 0.191406 -0.195313 0.191406 -0.515625 0 -0.710938 c -0.09375 -0.09375 -0.222657 -0.144531 -0.355469 -0.144531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTreetrianglesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTreetrianglesymbolic;
