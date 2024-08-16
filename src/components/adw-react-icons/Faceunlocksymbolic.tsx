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
        <path d="m 2 0 s -0.457031 -0.015625 -0.949219 0.230469 c -0.488281 0.246093 -1.050781 0.9375 -1.050781 1.769531 v 3 h 2 v -3 h 3 v -2 z m 9 0 v 2 h 3 v 3 h 2 v -3 c 0 -0.832031 -0.5625 -1.523438 -1.050781 -1.769531 c -0.492188 -0.246094 -0.949219 -0.230469 -0.949219 -0.230469 z m -11 11 v 3 c 0 0.832031 0.5625 1.523438 1.050781 1.769531 c 0.492188 0.246094 0.949219 0.230469 0.949219 0.230469 h 3 v -2 h -3 v -3 z m 14 0 v 3 h -3 v 2 h 3 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -3 z m 0 0"/>
        <path d="m 4 5 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 9 5 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 3.699219 10.839844 c 2.179687 1.652344 6.496093 1.625 8.605469 -0.003906 c 0.144531 -0.105469 0.214843 -0.285157 0.191406 -0.460938 c -0.023438 -0.175781 -0.140625 -0.328125 -0.304688 -0.398438 c -0.167968 -0.066406 -0.355468 -0.039062 -0.496094 0.070313 c -1.742187 1.339844 -5.574218 1.375 -7.394531 -0.003906 c -0.21875 -0.167969 -0.53125 -0.125 -0.699219 0.097656 c -0.167968 0.21875 -0.125 0.53125 0.097657 0.699219 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFaceunlocksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFaceunlocksymbolic;
