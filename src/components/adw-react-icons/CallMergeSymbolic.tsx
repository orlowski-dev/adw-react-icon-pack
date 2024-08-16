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
      <path d="m 8 0.445312 l -4.242188 4.242188 l 0.585938 0.585938 c 0.363281 0.511718 1.097656 0.566406 1.535156 0.121093 l 1.121094 -1.125 v 5.316407 l -4.707031 4.707031 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 4.824219 -4.824219 c 0.269531 -0.152343 0.460938 -0.433593 0.46875 -0.839843 c 0 -0.015625 0 -0.027344 0 -0.042969 v -5.726562 l 1.121094 1.121093 c 0.433594 0.441407 1.164062 0.390625 1.527344 -0.113281 l 0.59375 -0.59375 z m 2.5625 10.703126 l -1.414062 1.414062 l 3.144531 3.144531 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCallMergeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallMergeSymbolic;
