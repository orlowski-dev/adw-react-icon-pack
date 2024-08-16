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
      <path d="m 2.84375 4.011719 c -0.207031 0.03125 -0.402344 0.132812 -0.550781 0.28125 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 5.292969 5.292969 h -5.585938 v 2 h 12 v -2 h -5.585938 l 5.292969 -5.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 s -1.023437 -0.390625 -1.414062 0 l -4.292969 4.292969 l -4.292969 -4.292969 c -0.226562 -0.226563 -0.546875 -0.332031 -0.863281 -0.28125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBottomSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBottomSymbolic;
