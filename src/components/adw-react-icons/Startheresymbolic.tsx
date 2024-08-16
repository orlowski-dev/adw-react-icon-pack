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
      <path d="m 13.628906 0.00390625 c -3.324218 0 -3.949218 4.73828175 -2.078125 4.73828175 c 1.871094 0 5.402344 -4.73828175 2.078125 -4.73828175 z m -5.132812 0.58203175 c -0.054688 0 -0.113282 0.003906 -0.167969 0.011718 c -1.871094 0.242188 -1.214844 3.492188 -0.21875 3.554688 c 0.964844 0.058594 2.019531 -3.558594 0.386719 -3.566406 z m -3.242188 1.285156 c -0.101562 0.003906 -0.207031 0.027344 -0.324218 0.074218 c -1.503907 0.621094 -0.230469 3.183594 0.613281 3.007813 c 0.773437 -0.15625 0.875 -3.105469 -0.289063 -3.082031 z m -2.398437 2.007812 c -0.128907 0 -0.269531 0.039063 -0.421875 0.144532 c -1.203125 0.832031 0.40625 2.839843 1.113281 2.53125 c 0.621094 -0.273438 0.222656 -2.644532 -0.691406 -2.675782 z m 6.875 1.539063 c -2.582031 -0.042969 -5.984375 1.25 -6.5625 3.847656 c -0.628907 2.816406 2.585937 6.71875 5.941406 6.71875 c 1.652344 0 3.554687 -1.492187 3.914063 -3.382813 c 0.269531 -1.4375 -3.203126 -0.859374 -3.078126 0.09375 c 0.148438 1.140626 -0.839843 1.707032 -1.804687 0.96875 c -3.082031 -2.34375 5.09375 -3.515624 4.558594 -6.714843 c -0.167969 -1 -1.421875 -1.503907 -2.96875 -1.53125 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwStartheresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStartheresymbolic;
