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
      <path d="m 7.023438 5 c -0.203126 0 -0.402344 0.054688 -0.574219 0.167969 l -3 2 c -0.59375 0.394531 -0.59375 1.269531 0 1.664062 l 3 2 c 0.664062 0.441407 1.554687 -0.035156 1.554687 -0.832031 v -4 c 0 -0.367188 -0.203125 -0.707031 -0.527344 -0.882812 c -0.144531 -0.074219 -0.300781 -0.113282 -0.453124 -0.117188 z m 0.980468 3 c 0 0.316406 0.148438 0.632812 0.445313 0.832031 l 3 2 c 0.664062 0.441407 1.554687 -0.035156 1.554687 -0.832031 v -4 c 0 -0.367188 -0.203125 -0.707031 -0.527344 -0.882812 c -0.328124 -0.171876 -0.722656 -0.152344 -1.027343 0.050781 l -3 2 c -0.296875 0.199219 -0.445313 0.515625 -0.445313 0.832031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSeekBackwardSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSeekBackwardSymbolic;
