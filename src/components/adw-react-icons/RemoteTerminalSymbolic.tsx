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
        <path d="m 3.976562 0.0273438 c -0.550781 0 -1 0.4492182 -1 1.0000002 c 0 0.535156 0.421876 0.972656 0.953126 0.996094 l 3.394531 3.394531 l 0.652343 -0.652344 l 0.648438 0.652344 l 3.390625 -3.390625 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.550782 -0.449219 -1.0000002 -1 -1.0000002 s -1 0.4492182 -1 1.0000002 c 0 0.164062 0.042969 0.324218 0.121094 0.464844 l -3.160157 3.160156 l -3.132812 -3.132813 c 0.085938 -0.148437 0.132812 -0.320312 0.132812 -0.492187 c 0 -0.550782 -0.449218 -1.0000002 -1 -1.0000002 z m 1.503907 6.9296872 c -0.164063 -0.003906 -0.320313 0.0625 -0.4375 0.179688 c -0.234375 0.230469 -0.234375 0.613281 0 0.84375 l 1.019531 1.019531 l -1.019531 1.019531 c -0.234375 0.230469 -0.234375 0.613281 0 0.84375 c 0.234375 0.234375 0.613281 0.234375 0.847656 0 l 1.441406 -1.4375 c 0.234375 -0.234375 0.234375 -0.617187 0 -0.851562 l -1.441406 -1.4375 c -0.109375 -0.109375 -0.253906 -0.171875 -0.410156 -0.179688 z m 2.519531 3.042969 v 1 h 3 v -1 z m 0 0"/>
        <path d="m 5.011719 4 c -1.652344 0 -3.011719 1.359375 -3.011719 3.011719 v 3.976562 c 0 1.652344 1.359375 3.011719 3.011719 3.011719 h 5.976562 c 1.652344 0 3.011719 -1.359375 3.011719 -3.011719 v -3.976562 c 0 -1.652344 -1.359375 -3.011719 -3.011719 -3.011719 z m 0 2 h 5.976562 c 0.578125 0 1.011719 0.433594 1.011719 1.011719 v 3.976562 c 0 0.578125 -0.433594 1.011719 -1.011719 1.011719 h -5.976562 c -0.578125 0 -1.011719 -0.433594 -1.011719 -1.011719 v -3.976562 c 0 -0.578125 0.433594 -1.011719 1.011719 -1.011719 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRemoteTerminalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRemoteTerminalSymbolic;
