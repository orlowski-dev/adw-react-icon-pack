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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 10 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 4.980469 4 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 2.292969 2.292969 l 2.292969 -2.292969 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 s 0.519531 0.105469 0.707031 0.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -2.292969 2.292969 l 2.292969 2.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023438 0.390625 -1.414062 0 l -2.292969 -2.292969 l -2.292969 2.292969 c -0.390625 0.390625 -1.023438 0.390625 -1.414062 0 c -0.390626 -0.390625 -0.390626 -1.023437 0 -1.414062 l 2.292968 -2.292969 l -2.292968 -2.292969 c -0.390626 -0.390625 -0.390626 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCrossLargeSquareOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCrossLargeSquareOutlineSymbolic;
