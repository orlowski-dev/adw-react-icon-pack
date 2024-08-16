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
        <path d="m 3.949219 1 c -1.082031 0.027344 -1.949219 0.914062 -1.949219 2 c 0 0.714844 0.382812 1.375 1 1.730469 v 10.269531 h 2 v -10.269531 c 0.617188 -0.355469 1 -1.015625 1 -1.730469 c 0 -1.105469 -0.894531 -2 -2 -2 c -0.015625 0 -0.03125 0 -0.046875 0 z m 0.050781 1 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 11 3 v 4 c 0 0.84375 -0.1875 1.292969 -0.441406 1.550781 c -0.253906 0.253907 -0.691406 0.449219 -1.558594 0.449219 h -0.003906 l -2.019532 0.015625 c -1.070312 0.007813 -2.027343 0.511719 -2.746093 1.226563 c -0.71875 0.710937 -1.230469 1.675781 -1.230469 2.757812 h 2 c 0 -0.417969 0.238281 -0.941406 0.640625 -1.34375 c 0.402344 -0.398438 0.9375 -0.640625 1.351563 -0.644531 l 2.007812 -0.011719 c 1.191406 0 2.253906 -0.304688 2.984375 -1.050781 c 0.730469 -0.742188 1.015625 -1.792969 1.015625 -2.949219 v -4 z m 0 0"/>
        <path d="m 15 5 h -6 l 3 -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGitbranchsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGitbranchsymbolic;
