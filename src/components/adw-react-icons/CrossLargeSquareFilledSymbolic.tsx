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
      <path d="m 2.976562 1 c -1.09375 0 -1.976562 0.882812 -1.976562 1.972656 v 10.050782 c 0 1.09375 0.882812 1.976562 1.976562 1.976562 h 10.050782 c 1.089844 0 1.972656 -0.882812 1.972656 -1.976562 v -10.050782 c 0 -1.089844 -0.882812 -1.972656 -1.972656 -1.972656 z m 1.003907 2 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 3.292969 3.292969 l 3.292969 -3.292969 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 s 0.519531 0.105469 0.707031 0.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -3.292969 3.292969 l 3.292969 3.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023438 0.390625 -1.414062 0 l -3.292969 -3.292969 l -3.292969 3.292969 c -0.390625 0.390625 -1.023438 0.390625 -1.414062 0 c -0.390626 -0.390625 -0.390626 -1.023437 0 -1.414062 l 3.292968 -3.292969 l -3.292968 -3.292969 c -0.390626 -0.390625 -0.390626 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCrossLargeSquareFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCrossLargeSquareFilledSymbolic;
