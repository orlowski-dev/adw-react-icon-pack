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
        <path d="m 5.003906 1.996094 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.554687 -0.445312 1 -1 1 h -0.710937 c 0.671875 2.265625 2.445312 4.042968 4.710937 4.710937 v -0.710937 c 0 -0.554688 0.449219 -1 1 -1 h 3 c 0.554688 0 1 0.445312 1 1 v 1.5 c 0 1.382812 -1.117187 2.5 -2.5 2.5 h -0.5 c -5.503906 0 -10 -4.492188 -10 -10 v -0.5 c 0 -1.378906 1.121094 -2.5 2.5 -2.5 z m 0 0"/>
        <path d="m 12.996094 8 h 1 v -0.832031 c 0.105468 -0.613281 -0.375 -1.175781 -1 -1.167969 h -1.585938 l 4.292969 -4.292969 c 0.980469 -0.941406 -0.472656 -2.394531 -1.414063 -1.414062 l -4.292968 4.292969 v -1.585938 c 0.007812 -0.617188 -0.546875 -1.097656 -1.160156 -1 h -0.839844 v 1 l 0.003906 4.996094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCallincomingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallincomingsymbolic;
