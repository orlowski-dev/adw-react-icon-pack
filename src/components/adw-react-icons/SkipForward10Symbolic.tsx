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
      <path d="m 7.003906 1 v 2 c -2.621094 0.003906 -4.933594 1.699219 -5.722656 4.199219 c -0.785156 2.496093 0.136719 5.214843 2.28125 6.71875 c 0.292969 0.207031 0.671875 0.246093 1 0.09375 c 0.324219 -0.152344 0.546875 -0.464844 0.574219 -0.824219 c 0.03125 -0.359375 -0.132813 -0.703125 -0.429688 -0.90625 c -1.429687 -1 -2.046875 -2.816406 -1.519531 -4.480469 c 0.519531 -1.667969 2.066406 -2.804687 3.816406 -2.800781 v 2 h 0.75 c 0.132813 -0.003906 0.261719 -0.046875 0.375 -0.117188 l 3.75 -2.25 c 0.207032 -0.140624 0.332032 -0.378906 0.328125 -0.632812 c 0.003907 -0.253906 -0.121093 -0.492188 -0.328125 -0.632812 l -3.75 -2.25 c -0.113281 -0.070313 -0.242187 -0.113282 -0.375 -0.117188 z m 6.15625 7.898438 c -1.535156 0 -2.566406 1.25 -2.566406 3.121093 c 0 1.835938 1.011719 3.066407 2.519531 3.066407 c 1.527344 0 2.558594 -1.246094 2.558594 -3.128907 c 0 -1.835937 -1.015625 -3.058593 -2.511719 -3.058593 z m -4.875 0.085937 l -2.070312 1.195313 l 0.5625 1.074218 l 0.902344 -0.46875 v 2.933594 h -1.160157 v 1.28125 h 3.726563 v -1.28125 h -1.066406 v -4.734375 z m 4.839844 1.195313 c 0.597656 0 1.003906 0.738281 1.003906 1.847656 c 0 1.066406 -0.398437 1.777344 -0.980468 1.777344 c -0.613282 0 -1.011719 -0.738282 -1.011719 -1.839844 c 0 -1.074219 0.398437 -1.785156 0.988281 -1.785156 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSkipForward10Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSkipForward10Symbolic;
