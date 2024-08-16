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
      <path d="m 9.5 2 c -1.21875 0 -2.246094 0.898438 -2.457031 2.0625 c -0.175781 -0.042969 -0.359375 -0.0625 -0.542969 -0.0625 h -4 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 3 c 0 1.367188 1.132812 2.5 2.5 2.5 h 4 c 0.5625 0 1.082031 -0.191406 1.5 -0.511719 c 0.417969 0.320313 0.9375 0.511719 1.5 0.511719 h 4 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -5 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 2 h 4 c 0.292969 0 0.5 0.207031 0.5 0.5 v 5 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -4 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -5 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m -7 2 h 4 c 0.292969 0 0.5 0.207031 0.5 0.5 v 3 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -4 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -3 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m 0.5 7 c -0.554688 0 -1 0.445312 -1 1 h 5 c 0 -0.554688 -0.445312 -1 -1 -1 z m 7 0 c -0.554688 0 -1 0.445312 -1 1 h 5 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwVideojoineddisplayssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideojoineddisplayssymbolic;
