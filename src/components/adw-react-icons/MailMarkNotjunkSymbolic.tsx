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
      <g fill="#2e3436">
        <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 5 c 0 1.644531 1.355469 3 3 3 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3 c -0.550781 0 -1 -0.449219 -1 -1 v -4.800781 l 4.613281 3.078125 c 0.835938 0.558594 1.9375 0.558594 2.773438 0 l 4.613281 -3.078125 v 2.800781 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0.800781 2 h 8.398438 l -3.921875 2.613281 c -0.171875 0.113281 -0.382813 0.113281 -0.554688 0 z m 0 0"/>
        <path d="m 14.972656 9.992188 c -0.261718 0 -0.519531 0.105468 -0.707031 0.292968 l -3.292969 3.292969 l -1.292968 -1.292969 c -0.390626 -0.390625 -1.023438 -0.390625 -1.414063 0 s -0.390625 1.023438 0 1.414063 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414063 0 l 4 -4 c 0.390624 -0.390625 0.390624 -1.023438 0 -1.414063 c -0.1875 -0.1875 -0.441407 -0.292968 -0.707032 -0.292968 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailMarkNotjunkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailMarkNotjunkSymbolic;
