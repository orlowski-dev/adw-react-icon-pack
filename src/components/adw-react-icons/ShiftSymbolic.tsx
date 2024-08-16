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
        <g fill-rule="evenodd">
            <path d="m 4 0 c -1.65625 0 -3 1.382812 -3 3.042969 c 0 1.65625 1.34375 3.039062 3 3.039062 s 3 -1.382812 3 -3.039062 c 0 -1.660157 -1.34375 -3.042969 -3 -3.042969 z m 0 2 c 0.554688 0 1 0.441406 1 1.042969 c 0 0.597656 -0.445312 1.039062 -1 1.039062 s -1 -0.441406 -1 -1.039062 c 0 -0.601563 0.445312 -1.042969 1 -1.042969 z m 0 0"/>
            <path d="m 4 9.957031 c -1.65625 0 -3 1.386719 -3 3.042969 s 1.34375 3.042969 3 3.042969 s 3 -1.386719 3 -3.042969 s -1.34375 -3.042969 -3 -3.042969 z m 0 2 c 0.554688 0 1 0.445313 1 1.042969 s -0.445312 1.042969 -1 1.042969 s -1 -0.445313 -1 -1.042969 s 0.445312 -1.042969 1 -1.042969 z m 0 0"/>
            <path d="m 12 -0.0429688 c -1.65625 0 -3 1.3867188 -3 3.0429688 s 1.34375 3.042969 3 3.042969 s 3 -1.386719 3 -3.042969 s -1.34375 -3.0429688 -3 -3.0429688 z m 0 1.9999998 c 0.554688 0 1 0.445313 1 1.042969 s -0.445312 1.042969 -1 1.042969 s -1 -0.445313 -1 -1.042969 s 0.445312 -1.042969 1 -1.042969 z m 0 0"/>
        </g>
        <path d="m 3 5.082031 v 5.917969 h 2 v -5.917969 z m 0 0"/>
        <path d="m 11 5 v 1 c 0 0.5625 -0.4375 1 -1 1 h -5.984375 v 2 h 5.984375 c 1.644531 0 3 -1.355469 3 -3 v -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShiftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShiftSymbolic;
