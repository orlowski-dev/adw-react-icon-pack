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
        <path d="m 3.949219 1 c -1.082031 0.027344 -1.949219 0.914062 -1.949219 2 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 c -0.015625 0 -0.03125 0 -0.046875 0 z m 0.050781 1 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 3 8 c 0 1.082031 0.511719 2.046875 1.230469 2.761719 c 0.71875 0.710937 1.675781 1.21875 2.746093 1.226562 l 2.019532 0.011719 h 0.003906 c 0.867188 0 1.304688 0.195312 1.558594 0.449219 c 0.253906 0.257812 0.441406 0.707031 0.441406 1.550781 v 1 h 2 v -1 c 0 -1.15625 -0.285156 -2.207031 -1.015625 -2.949219 c -0.730469 -0.746093 -1.792969 -1.050781 -2.984375 -1.050781 l -2.007812 -0.015625 c -0.414063 0 -0.949219 -0.242187 -1.351563 -0.640625 c -0.402344 -0.402344 -0.640625 -0.925781 -0.640625 -1.34375 z m 0 0"/>
        <path d="m 7 8 h -6 l 3 -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGitMergeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGitMergeSymbolic;
