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
      <path d="m 7.851562 6 h 3.695313 l -4.339844 6.242188 l 1.671875 0.171874 l -4.183594 3.578126 l 1.964844 -1.035157 c 0.316406 0.039063 1.007813 0.0625 1.335938 0.0625 c 3.867187 0 7.003906 -3.136719 7.003906 -7.003906 c -0.015625 -2.46875 -1.28125 -5.007813 -4.003906 -6.328125 l 0.160156 -1.6796875 z m -6.851562 2.015625 c 0 2.625 1.441406 4.917969 3.582031 6.113281 l 0.316407 -3.71875 l 1.011718 1.203125 l 1.804688 -3.613281 h -3.714844 l 3.160156 -6.933594 c -3.46875 0.414063 -6.160156 3.367188 -6.160156 6.949219" fill="currentColor"/>
    </svg>
  );
};

const AdwThunderboltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwThunderboltSymbolic;
