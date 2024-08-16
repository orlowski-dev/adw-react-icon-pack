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
      <path d="m 7 12 c 0.265625 0 0.519531 -0.101562 0.707031 -0.292969 l 3 -3 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -3.003906 -3 c -0.390625 -0.386719 -1.023437 -0.386719 -1.414063 0 c -0.386718 0.394531 -0.386718 1.027343 0.003907 1.414062 l 2.292969 2.292969 l -2.292969 2.292969 c -0.390625 0.390625 -0.390625 1.027343 0 1.414062 c 0.1875 0.191407 0.441406 0.292969 0.707031 0.292969 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwRightsmallersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRightsmallersymbolic;
