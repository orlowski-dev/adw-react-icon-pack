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
      <path d="m 12 0 c -0.550781 0 -1 0.449219 -1 1 v 6.964844 c -0.007812 -0.253906 -0.113281 -0.496094 -0.292969 -0.671875 l -6 -6 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 5.292969 5.292969 l -5.292969 5.292969 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 6 -6 c 0.179688 -0.179687 0.285157 -0.417969 0.292969 -0.667969 v 6.960938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -14 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwGoFirstSymbolicRtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGoFirstSymbolicRtl;
