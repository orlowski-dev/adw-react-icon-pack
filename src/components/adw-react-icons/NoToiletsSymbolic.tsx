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
        <path d="m 6 2.042969 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 c 0 -1.101563 0.894531 -2.0000002 2 -2.0000002 s 2 0.8984372 2 2.0000002 z m 0 0"/>
        <path d="m 15 2.042969 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 c 0 -1.101563 0.894531 -2.0000002 2 -2.0000002 s 2 0.8984372 2 2.0000002 z m 0 0"/>
        <path d="m 8 1 v 8.085938 l 1 1 v -9.085938 z m -4.085938 4 l 3.085938 3.085938 v -2.046876 c 0 -0.574218 -0.464844 -1.039062 -1.039062 -1.039062 z m 8.09375 0 c -0.574218 0 -0.945312 0.46875 -1.039062 1.039062 l -0.839844 5.175782 l 1.839844 1.835937 h 0.03125 v 0.035157 l 1.707031 1.707031 c 0.03125 0.03125 0.058594 0.066406 0.085938 0.097656 c 0.121093 -0.089844 0.207031 -0.234375 0.207031 -0.402344 v -1.4375 h 0.960938 c 0.574218 0 1.132812 -0.46875 1.039062 -1.039062 l -0.96875 -5.972657 c -0.09375 -0.570312 -0.464844 -1.039062 -1.039062 -1.039062 z m -10.652343 0.269531 c -0.214844 0.1875 -0.355469 0.460938 -0.355469 0.769531 v 4.421876 c 0 0.5625 0.441406 1.007812 1 1.03125 v 2.515624 c 0 0.550782 0.441406 0.992188 0.992188 0.992188 h 2.015624 c 0.550782 0 0.992188 -0.441406 0.992188 -0.992188 v -2.515624 c 0.421875 -0.015626 0.777344 -0.28125 0.925781 -0.652344 z m 6.644531 6.644531 v 3.085938 h 1 v -2.085938 z m 0 0"/>
        <path d="m 2 1 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 12 12 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -12 -12 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNoToiletsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoToiletsSymbolic;
