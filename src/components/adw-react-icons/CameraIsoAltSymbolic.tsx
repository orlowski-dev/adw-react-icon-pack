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
        <path d="m 0 3 v 10 h 2 v -10 z m 0 0"/>
        <path d="m 5 3 c -0.832031 0 -1.523438 0.5625 -1.769531 1.050781 c -0.246094 0.492188 -0.230469 0.949219 -0.230469 0.949219 v 2 c 0 0.832031 0.5625 1.523438 1.050781 1.769531 c 0.492188 0.246094 0.949219 0.230469 0.949219 0.230469 h 2 v 2 h -4 v 2 h 4 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -2 c 0 -0.832031 -0.5625 -1.523438 -1.050781 -1.769531 c -0.492188 -0.246094 -0.949219 -0.230469 -0.949219 -0.230469 h -2 v -2 h 4 v -2 z m 0 0"/>
        <path d="m 12.5 3 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 5 c 0 1.367188 1.132812 2.5 2.5 2.5 h 1 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -5 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 2 h 1 c 0.292969 0 0.5 0.207031 0.5 0.5 v 5 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -1 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -5 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameraIsoAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraIsoAltSymbolic;
