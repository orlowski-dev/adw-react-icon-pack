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
        <path d="m 1.066406 2.042969 v 2.960937 h 5.964844 v -2.960937 z m 6.96875 0 v 2.960937 h 5.964844 v -2.960937 z m -7.035156 3.992187 v 2.960938 h 2 v -2.960938 z m 3.035156 0 v 2.960938 h 2.574219 c 0.691406 -1.359375 1.921875 -2.371094 3.390625 -2.789063 v -0.171875 z m 8.09375 0 c 0.652344 0.078125 1.285156 0.269532 1.871094 0.570313 v -0.570313 z m -11.0625 4.101563 v 2.960937 h 5.179688 c -0.160156 -0.519531 -0.246094 -1.058594 -0.246094 -1.601562 c 0.003906 -0.457032 0.0625 -0.914063 0.179688 -1.359375 z m 0 0"/>
        <path d="m 11.4375 7.929688 c -0.40625 0 -0.792969 0.089843 -1.15625 0.21875 l 1.90625 1.90625 c 0.394531 0.390624 0.394531 1.011718 0 1.40625 l -0.71875 0.75 c -0.394531 0.390624 -1.011719 0.390624 -1.40625 0 l -1.9375 -1.9375 c -0.125 0.359374 -0.21875 0.75 -0.21875 1.15625 c 0 1.9375 1.585938 3.53125 3.53125 3.53125 c 0.40625 0 0.792969 -0.09375 1.15625 -0.21875 l 1.21875 1.1875 h 0.0625 l 2.09375 -2.09375 l -1.21875 -1.21875 c 0.128906 -0.363282 0.21875 -0.785157 0.21875 -1.1875 c 0 -1.941407 -1.582031 -3.5 -3.53125 -3.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwConfigureSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwConfigureSymbolic;
