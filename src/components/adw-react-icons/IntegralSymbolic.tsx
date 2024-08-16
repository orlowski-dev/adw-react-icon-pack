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
      <path d="m 12 0 h -1 c -2.214844 0 -4 1.785156 -4 4 v 8 c 0 1.097656 -0.902344 2 -2 2 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 1 c 2.214844 0 4 -1.785156 4 -4 v -8 c 0 -1.097656 0.902344 -2 2 -2 h 1 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwIntegralSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIntegralSymbolic;
