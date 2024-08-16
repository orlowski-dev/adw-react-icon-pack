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
        <path d="m 0 5 v 6 h 1 v -0.007812 c 0.265625 0.003906 0.519531 -0.101563 0.707031 -0.285157 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 0 0"/>
        <path d="m 16 5 v 6 h -1 v -0.007812 c -0.265625 0.003906 -0.519531 -0.101563 -0.707031 -0.285157 l -2 -2 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 l 2 -2 c 0.1875 -0.183594 0.441406 -0.289063 0.707031 -0.289063 v -0.003906 z m 0 0"/>
        <path d="m 7 3.011719 v 2 h 1.917969 c -0.054688 0 0.085937 0.160156 0.085937 0.082031 v 0.921875 h -1.003906 c -1.714844 0 -3.03125 1.128906 -3.054688 2.484375 c -0.011718 0.679688 0.304688 1.363281 0.859376 1.824219 c 0.558593 0.460937 1.316406 0.699219 2.195312 0.699219 h 3.003906 v -5.929688 c 0 -1.171875 -0.886718 -2.082031 -2.085937 -2.082031 z m 1 5.007812 h 1.003906 v 1.003907 h -1.003906 c -0.519531 0 -0.792969 -0.136719 -0.921875 -0.242188 c -0.125 -0.105469 -0.132813 -0.171875 -0.132813 -0.242188 c 0.003907 -0.144531 0.085938 -0.519531 1.054688 -0.519531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFontselectsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFontselectsymbolic;
