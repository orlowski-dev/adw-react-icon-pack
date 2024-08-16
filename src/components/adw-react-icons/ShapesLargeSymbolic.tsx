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
        <path d="m 9.984375 12.496094 c 0 1.929687 -1.566406 3.492187 -3.492187 3.492187 c -1.929688 0 -3.492188 -1.5625 -3.492188 -3.492187 c 0 -1.929688 1.5625 -3.492188 3.492188 -3.492188 c 1.925781 0 3.492187 1.5625 3.492187 3.492188 z m 0 0"/>
        <path d="m 9 8 h 6 c 0.207031 0 0.398438 -0.109375 0.5 -0.289062 c 0.105469 -0.179688 0.105469 -0.398438 0.003906 -0.578126 l -3.007812 -5.265624 c -0.101563 -0.175782 -0.292969 -0.285157 -0.496094 -0.285157 s -0.394531 0.109375 -0.496094 0.285157 l -3.007812 5.265624 c -0.101563 0.179688 -0.101563 0.398438 0.003906 0.578126 c 0.101562 0.179687 0.292969 0.289062 0.5 0.289062 z m 0 0"/>
        <path d="m 0.292969 3.375 l 3.082031 -3.082031 c 0.390625 -0.3906252 1.023438 -0.3906252 1.414062 0 l 3.089844 3.082031 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -3.085937 3.085938 c -0.390625 0.390625 -1.023438 0.390625 -1.414063 0 l -3.085937 -3.085938 c -0.3906252 -0.390624 -0.3906252 -1.023437 0 -1.414062 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShapesLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShapesLargeSymbolic;
