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
      <path d="m 13.753906 4.660156 c 0.175782 -0.199218 0.261719 -0.460937 0.246094 -0.726562 c -0.019531 -0.265625 -0.140625 -0.511719 -0.339844 -0.6875 c -0.199218 -0.175782 -0.460937 -0.261719 -0.726562 -0.246094 c -0.265625 0.019531 -0.511719 0.140625 -0.6875 0.339844 l -6.296875 7.195312 l -2.242188 -2.242187 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 3 3 c 0.195312 0.195313 0.464843 0.304688 0.738281 0.292969 c 0.277344 -0.007812 0.539062 -0.132812 0.722656 -0.339844 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwObjectSelectSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwObjectSelectSymbolic;
