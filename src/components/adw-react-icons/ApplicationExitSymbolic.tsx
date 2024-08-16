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
        <path d="m 13 5 v 0.003906 c 0.265625 0 0.519531 0.105469 0.707031 0.289063 l 2 2 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -2 2 c -0.1875 0.183594 -0.441406 0.289063 -0.707031 0.285157 v 0.007812 h -1 v -2 h -5 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 h 5 v -2 z m 0 0"/>
        <path d="m 4 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 4 c 1.644531 0 3 -1.355469 3 -3 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 1 c 0 0.570312 -0.429688 1 -1 1 h -4 c -0.570312 0 -1 -0.429688 -1 -1 v -8 c 0 -0.570312 0.429688 -1 1 -1 h 4 c 0.570312 0 1 0.429688 1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwApplicationExitSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationExitSymbolic;
