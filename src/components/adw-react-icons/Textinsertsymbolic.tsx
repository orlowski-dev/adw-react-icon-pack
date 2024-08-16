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
        <path d="m 4.015625 2.003906 c -0.449219 0 -0.84375 0.300782 -0.960937 0.738282 l -3.054688 11.257812 h 2.070312 l 0.640626 -1.996094 h 4.59375 l 0.625 1.996094 h 2.070312 l -3.417969 -11.257812 c -0.117187 -0.4375 -0.511719 -0.738282 -0.964843 -0.738282 z m 0.789063 1.996094 c 0.128906 0.003906 0.238281 0.023438 0.296874 0.242188 l 1.753907 5.761718 h -3.710938 l 1.367188 -5.792968 c 0.046875 -0.195313 0.171875 -0.214844 0.292969 -0.210938 z m 0 0"/>
        <path d="m 10 0 v 1 h 2 v 14 h -2 v 1 h 2.5 l 0.5 -0.5 l 0.5 0.5 h 2.5 v -1 h -2 v -14 h 2 v -1 h -2.5 l -0.5 0.5 l -0.5 -0.5 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwTextinsertsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextinsertsymbolic;
