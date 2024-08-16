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
      <g fill="#2e3436">
        <path d="m 4 0 s -2 0 -2 1.992188 v 6.007812 s 0 2 2 1.992188 h 8 c 2 0.007812 2 -1.992188 2 -1.992188 v -6.007812 c 0 -1.992188 -2 -1.992188 -2 -1.992188 z m 0 1.992188 h 8 v 6 h -8 z m 5.125 1.957031 l -1.5 1.5 l -1.125 -0.75 l -1.5 1.5 v 0.800781 h 6 v -1.175781 z m 0 0"/>
        <path d="m 5 12 v 1 h 0.007812 c -0.003906 0.265625 0.101563 0.519531 0.285157 0.707031 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 2 -2 c 0.183594 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwInsertImageSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInsertImageSymbolic;
