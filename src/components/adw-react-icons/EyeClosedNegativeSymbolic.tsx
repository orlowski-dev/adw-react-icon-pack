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
      <path d="m 1.6875 6.8125 c -0.6875 0.921875 -0.625 1.832031 0.34375 2.832031 c 1.589844 1.484375 3.707031 2.347657 5.945312 2.355469 c 2.28125 0.007812 4.441407 -0.878906 6.050782 -2.410156 c 1.226562 -1.410156 0.972656 -1.589844 0.265625 -2.742188 c -1.292969 2.265625 -3.703125 3.660156 -6.3125 3.652344 s -5.011719 -1.414062 -6.292969 -3.6875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEyeClosedNegativeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEyeClosedNegativeSymbolic;
