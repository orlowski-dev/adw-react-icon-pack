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
      <path d="m 8 1.003906 c -2.050781 0 -4.097656 0.78125 -5.65625 2.339844 c -3.117188 3.117188 -3.117188 8.195312 0 11.3125 c 0.308594 0.320312 0.789062 0.394531 1.183594 0.191406 c 0.390625 -0.207031 0.601562 -0.648437 0.515625 -1.082031 c 0.140625 -0.027344 0.28125 -0.097656 0.394531 -0.21875 l 2.726562 -2.730469 c 0.261719 0.121094 0.546876 0.183594 0.835938 0.183594 c 1.105469 0 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 s -2 0.894531 -2 2 c 0 0.246094 0.046875 0.488281 0.136719 0.71875 l -2.761719 2.765625 c -0.054688 0.054687 -0.089844 0.121094 -0.125 0.183594 c -0.707031 -0.914063 -1.136719 -2.015625 -1.234375 -3.167969 h 0.984375 v -1 h -0.984375 c 0.105469 -1.242188 0.59375 -2.421875 1.402344 -3.375 l 0.695312 0.691406 l 0.707031 -0.707031 l -0.695312 -0.6875 c 0.953125 -0.808594 2.132812 -1.300781 3.375 -1.40625 v 0.984375 h 1 v -0.984375 c 1.242188 0.105469 2.421875 0.59375 3.375 1.402344 l -0.691406 0.691406 l 0.707031 0.707031 l 0.691406 -0.691406 c 0.808594 0.953125 1.296875 2.132812 1.402344 3.375 h -0.984375 v 1 h 0.984375 c -0.105469 1.242188 -0.59375 2.421875 -1.402344 3.375 l -0.695312 -0.691406 l -0.707031 0.707031 l 0.800781 0.796875 c -0.125 0.4375 0.0625 0.90625 0.460937 1.136719 c 0.394532 0.226562 0.894532 0.160156 1.214844 -0.167969 c 3.117188 -3.117188 3.117188 -8.195312 0 -11.3125 c -1.5 -1.5 -3.535156 -2.34375 -5.65625 -2.339844 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSpeedometer4Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeedometer4Symbolic;
