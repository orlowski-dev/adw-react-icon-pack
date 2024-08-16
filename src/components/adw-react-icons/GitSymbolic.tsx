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
      <path d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.585938 1.582031 l 5.238281 5.234375 c 0.175782 -0.070313 0.363282 -0.109375 0.554688 -0.109375 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 c 0 -0.183594 0.035156 -0.363281 0.101562 -0.535156 l -2.050781 -2.050782 v 4.191407 c 0.574219 0.226562 0.949219 0.777343 0.949219 1.394531 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 c 0 -0.65625 0.425781 -1.234375 1.050781 -1.429688 v -5.15625 l -2.191406 -2.1875 l -4.566406 4.566407 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 7 7 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 7 -7 c 0.386719 -0.390625 0.386719 -1.023437 0 -1.414062 l -7 -7 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGitSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGitSymbolic;
