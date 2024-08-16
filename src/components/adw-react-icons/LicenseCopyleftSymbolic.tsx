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
        <path d="m 8 0 c -4.417969 0 -8 3.582031 -8 8 s 3.582031 8 8 8 s 8 -3.582031 8 -8 s -3.582031 -8 -8 -8 z m 0 2 c 3.3125 0 6 2.6875 6 6 s -2.6875 6 -6 6 s -6 -2.6875 -6 -6 s 2.6875 -6 6 -6 z m 0 0"/>
        <path d="m 8.003906 3.945312 c 1.035156 0 2.070313 0.398438 2.851563 1.1875 c 1.566406 1.578126 1.566406 4.15625 0 5.734376 c -1.5625 1.582031 -4.140625 1.582031 -5.707031 0 c -0.386719 -0.390626 -0.382813 -1.023438 0.007812 -1.414063 c 0.394531 -0.386719 1.027344 -0.382813 1.414062 0.007813 c 0.804688 0.8125 2.0625 0.8125 2.863282 0 c 0.804687 -0.808594 0.804687 -2.109376 0 -2.921876 c -0.800782 -0.8125 -2.058594 -0.8125 -2.863282 0 c -0.386718 0.390626 -1.019531 0.394532 -1.414062 0.007813 c -0.390625 -0.386719 -0.394531 -1.019531 -0.007812 -1.414063 c 0.78125 -0.789062 1.820312 -1.1875 2.855468 -1.1875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLicenseCopyleftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLicenseCopyleftSymbolic;
