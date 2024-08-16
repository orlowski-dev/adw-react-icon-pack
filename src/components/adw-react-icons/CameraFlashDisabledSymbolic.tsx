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
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
        <path d="m 8.96875 0 c -0.332031 0.0117188 -0.640625 0.1875 -0.816406 0.46875 l -2 3.207031 l 5.601562 5.601563 l 1.09375 -1.746094 c 0.105469 -0.171875 0.152344 -0.355469 0.152344 -0.53125 v -1 h -3 v -5 c 0 -0.5625 -0.464844 -1.015625 -1.03125 -1 z m -4.722656 6.71875 l -1.09375 1.75 c -0.105469 0.171875 -0.152344 0.355469 -0.152344 0.53125 v 1 h 3 v 5 c 0 1.003906 1.316406 1.378906 1.847656 0.53125 l 2.003906 -3.207031 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwCameraFlashDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraFlashDisabledSymbolic;
