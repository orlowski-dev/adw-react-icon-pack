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
        <path d="m 4 3 c -2.199219 0 -4 1.800781 -4 4 v 2 c 0 2.199219 1.800781 4 4 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 c -1.125 0 -2 -0.875 -2 -2 v -2 c 0 -1.125 0.875 -2 2 -2 h 8 c 1.125 0 2 0.875 2 2 v 2 c 0 1.125 -0.875 2 -2 2 h -4 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 c 2.199219 0 4 -1.800781 4 -4 v -2 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 0"/>
        <path d="m 10 10.996094 v -2.003906 h -1 v 0.007812 c -0.265625 0 -0.519531 0.105469 -0.707031 0.289062 l -2 2 c -0.390625 0.390626 -0.390625 1.023438 0 1.414063 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707031 0.285156 v 0.011719 h 1 v -1.992188"/>
    </g>
    </svg>
  );
};

const AdwLoopArrowSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLoopArrowSymbolic;
