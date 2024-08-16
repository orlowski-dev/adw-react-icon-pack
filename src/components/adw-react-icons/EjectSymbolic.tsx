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
        <path d="m 8.003906 3 c -0.257812 0 -0.511718 0.097656 -0.707031 0.292969 l -4 4 c -0.191406 0.191406 -0.292969 0.445312 -0.292969 0.707031 v 1 h 9.996094 v -0.960938 c 0.011719 -0.261718 -0.074219 -0.53125 -0.289062 -0.746093 l -4 -4 c -0.195313 -0.195313 -0.453126 -0.292969 -0.707032 -0.292969 z m 0 0"/>
        <path d="m 3 13 l 0.003906 -2 h 1 l 8 0.015625 h 1 l -0.003906 2 h -1 l -8 -0.015625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEjectSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEjectSymbolic;
