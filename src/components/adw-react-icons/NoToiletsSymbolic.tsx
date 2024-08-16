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
        <path d="m 11.199219 0 c -0.664063 0 -1.199219 0.535156 -1.199219 1.199219 v 5.601562 c 0 0.066407 0.007812 0.132813 0.019531 0.199219 h -0.019531 v 1 h -3.414062 l 4.414062 4.414062 v -1.121093 c 0.648438 -0.976563 0.996094 -2.121094 1 -3.292969 h 2.800781 c 0.664063 0 1.199219 -0.535156 1.199219 -1.199219 v -5.601562 c 0 -0.664063 -0.535156 -1.199219 -1.199219 -1.199219 z m -7.613281 5 l 2 2 h 3.414062 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m -2.804688 0.023438 c -0.445312 0.101562 -0.78125 0.496093 -0.78125 0.976562 c 0 0.554688 0.445312 1 1 1 h 1.757812 z m 10.21875 2.960937 c 0.066406 0.007813 0.132812 0.015625 0.199219 0.015625 h -0.199219 z m -11 0.015625 c 0 2.144531 1.144531 4.125 3 5.195312 c 0.910156 0.527344 1.945312 0.804688 3 0.804688 v 1 h -1.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 7.257812 l -8 -8 z m 0 0"/>
        <path d="m 2 1 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 12 12 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -12 -12 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNoToiletsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoToiletsSymbolic;
