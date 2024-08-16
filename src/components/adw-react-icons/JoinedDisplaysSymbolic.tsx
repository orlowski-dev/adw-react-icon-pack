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
        <path d="m 4.5 13 c -2.5 0 -2.5 0.5 -2.5 0.5 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 s 0 -0.5 -2.5 -0.5 z m 0 0"/>
        <path d="m 11.5 13 c -2.5 0 -2.5 0.5 -2.5 0.5 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 s 0 -0.5 -2.5 -0.5 z m 0 0"/>
        <path d="m 9.5 2 c -1.21875 0 -2.246094 0.902344 -2.457031 2.0625 c -0.175781 -0.039062 -0.355469 -0.0625 -0.542969 -0.0625 h -4 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 3 c 0 1.367188 1.132812 2.5 2.5 2.5 h 4 c 0.5625 0 1.078125 -0.195312 1.5 -0.519531 c 0.421875 0.324219 0.9375 0.519531 1.5 0.519531 h 4 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -5 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 2 h 4 c 0.292969 0 0.5 0.207031 0.5 0.5 v 5 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -4 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -5 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m -7 2 h 4 c 0.292969 0 0.5 0.207031 0.5 0.5 v 3 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -4 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -3 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwJoinedDisplaysSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwJoinedDisplaysSymbolic;
