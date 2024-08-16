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
        <path d="m 8.003906 14 c -2.207031 0 -4 -1.796875 -4 -4 s 1.792969 -4 4 -4 c 2.203125 0 4 1.796875 4 4 s -1.796875 4 -4 4 z m 0 -10 c -3.320312 0 -6 2.679688 -6 6 s 2.679688 6 6 6 c 3.316406 0 6 -2.679688 6 -6 s -2.683594 -6 -6 -6 z m 0 0"/>
        <path d="m 5.257812 7.039062 l 2.226563 3.292969 c 0.152344 0.226563 0.464844 0.289063 0.695313 0.132813 c 0.226562 -0.152344 0.289062 -0.464844 0.132812 -0.695313 l -2.226562 -3.292969 c -0.152344 -0.226562 -0.464844 -0.289062 -0.691407 -0.132812 c -0.230469 0.15625 -0.289062 0.464844 -0.136719 0.695312 z m 0 0"/>
        <path d="m 2.003906 4.984375 c 0 0.542969 -0.441406 0.984375 -0.984375 0.984375 s -0.9843748 -0.441406 -0.9843748 -0.984375 s 0.4414058 -0.984375 0.9843748 -0.984375 s 0.984375 0.441406 0.984375 0.984375 z m 0 0"/>
        <path d="m 6.003906 1.015625 c 0 0.542969 -0.441406 0.984375 -0.984375 0.984375 s -0.984375 -0.441406 -0.984375 -0.984375 s 0.441406 -0.984375 0.984375 -0.984375 s 0.984375 0.441406 0.984375 0.984375 z m 0 0"/>
        <path d="m 12.003906 1.015625 c 0 0.542969 -0.441406 0.984375 -0.984375 0.984375 s -0.984375 -0.441406 -0.984375 -0.984375 s 0.441406 -0.984375 0.984375 -0.984375 s 0.984375 0.441406 0.984375 0.984375 z m 0 0"/>
        <path d="m 16.003906 4.984375 c 0 0.542969 -0.441406 0.984375 -0.984375 0.984375 s -0.984375 -0.441406 -0.984375 -0.984375 s 0.441406 -0.984375 0.984375 -0.984375 s 0.984375 0.441406 0.984375 0.984375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEncoderknobsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEncoderknobsymbolic;
