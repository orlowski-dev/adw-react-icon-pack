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
        <path d="m 5 1 v 2.261719 c -1.609375 1.015625 -2.585938 2.785156 -2.585938 4.6875 v 0.050781 h -2.414062 l 7.925781 8.003906 l 8.074219 -8.003906 h -2.492188 c 0 -0.015625 0 -0.03125 0 -0.046875 c 0 -1.871094 -0.941406 -3.617187 -2.507812 -4.640625 v -2.3125 z m 2.867188 2.910156 h 0.09375 c 2.230468 0 4.039062 1.808594 4.039062 4.039063 c 0 2.234375 -1.808594 4.042969 -4.039062 4.042969 c -2.230469 0 -4.039063 -1.808594 -4.042969 -4.042969 c 0 -2.195313 1.753906 -3.988281 3.949219 -4.039063 z m 0 0"/>
        <path d="m 8 4.5 c -0.550781 0 -1 0.449219 -1 1 v 2.863281 l 1.234375 1.46875 c 0.171875 0.207031 0.414063 0.332031 0.679687 0.355469 c 0.265626 0.023438 0.527344 -0.0625 0.730469 -0.230469 c 0.421875 -0.359375 0.476563 -0.988281 0.121094 -1.410156 l -0.765625 -0.910156 v -2.136719 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSnapshotsAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSnapshotsAltSymbolic;
