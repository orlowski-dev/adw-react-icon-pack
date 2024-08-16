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
      <path d="m 2 11.015625 c 0.003906 0.261719 0.113281 0.515625 0.300781 0.703125 l 3 2.917969 c 0.390625 0.375 1.007813 0.375 1.398438 0 l 3 -2.917969 c 0.394531 -0.386719 0.402343 -1.019531 0.015625 -1.414062 c -0.382813 -0.398438 -1.015625 -0.40625 -1.414063 -0.019532 l -1.300781 1.265625 v -4.550781 c 0 -1.527344 1.441406 -2.996094 3 -3 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -4 c -2.683594 0.003906 -5 2.347656 -5 5 v 4.550781 l -1.300781 -1.265625 c -0.398438 -0.386718 -1.03125 -0.378906 -1.417969 0.019532 c -0.183594 0.1875 -0.285156 0.445312 -0.28125 0.710937 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwArrowTurnLeftDownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowTurnLeftDownSymbolic;
