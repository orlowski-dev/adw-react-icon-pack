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
      <path d="m 8.253906 1 c -0.132812 0.007812 -0.265625 0.046875 -0.375 0.117188 l -3.75 2.25 c -0.210937 0.140624 -0.335937 0.382812 -0.328125 0.632812 c 0 0.25 0.113281 0.5 0.328125 0.636719 l 3.75 2.25 c 0.109375 0.070312 0.242188 0.109375 0.375 0.113281 h 0.75 v -2 c 1.746094 -0.003906 3.292969 1.132812 3.816406 2.800781 c 0.523438 1.664063 -0.089843 3.480469 -1.523437 4.480469 c -0.296875 0.203125 -0.460937 0.546875 -0.429687 0.90625 s 0.25 0.671875 0.574218 0.824219 c 0.328125 0.152343 0.710938 0.113281 1.003906 -0.09375 c 2.140626 -1.503907 3.066407 -4.222657 2.28125 -6.71875 c -0.789062 -2.5 -3.105468 -4.195313 -5.722656 -4.199219 v -2 z m -1.09375 7.898438 c -1.535156 0 -2.566406 1.25 -2.566406 3.121093 c 0 1.839844 1.015625 3.066407 2.523438 3.066407 c 1.523437 0 2.554687 -1.246094 2.554687 -3.128907 c 0 -1.835937 -1.015625 -3.058593 -2.511719 -3.058593 z m -4.875 0.089843 l -2.070312 1.195313 l 0.5625 1.074218 l 0.902344 -0.46875 v 2.929688 h -1.160157 v 1.285156 h 3.726563 v -1.285156 h -1.066406 v -4.730469 z m 4.839844 1.195313 c 0.597656 0 1.003906 0.734375 1.003906 1.84375 c 0 1.066406 -0.398437 1.777344 -0.976562 1.777344 h -0.003906 c -0.613282 -0.003907 -1.011719 -0.738282 -1.011719 -1.835938 c 0 -1.074219 0.398437 -1.785156 0.988281 -1.785156 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSkipBackwards10Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSkipBackwards10Symbolic;
