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
        <path d="m 4.5 0 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 11 c 0 1.367188 1.132812 2.5 2.5 2.5 h 7 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -11 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 2 h 7 c 0.292969 0 0.5 0.207031 0.5 0.5 v 10 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -7 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -10 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 3.5 3 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 6 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -6 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 3 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 6 c 0 0.277344 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -6 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 5 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 6 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -6 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -6 8 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 5 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwPhoshSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhoshSymbolic;
