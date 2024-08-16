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
      <path d="m 3 1 c -0.550781 0 -1 0.449219 -1 1 v 13 c 0 0.550781 0.449219 1 1 1 h 10 c 0.550781 0 1 -0.449219 1 -1 v -9.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 5 5.007812 c 1.027344 0 2.050781 0.386719 2.828125 1.164063 c 0.390625 0.390625 0.390625 1.023437 0 1.414063 c -0.390625 0.390624 -1.023437 0.390624 -1.414063 0 c -0.789062 -0.789063 -2.039062 -0.789063 -2.828124 0 c -0.789063 0.789062 -0.789063 2.039062 0 2.828124 c 0.789062 0.789063 2.039062 0.789063 2.828124 0 c 0.390626 -0.390624 1.023438 -0.390624 1.414063 0 c 0.390625 0.390626 0.390625 1.023438 0 1.414063 c -1.554687 1.554687 -4.101563 1.554687 -5.65625 0 s -1.554687 -4.101563 0 -5.65625 c 0.777344 -0.777344 1.800781 -1.164063 2.828125 -1.164063 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCSymbolic;
