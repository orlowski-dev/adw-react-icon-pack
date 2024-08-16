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
      <path d="m 8.96875 0 c -0.332031 0.0117188 -0.640625 0.1875 -0.816406 0.46875 l -5 8 c -0.105469 0.171875 -0.152344 0.355469 -0.152344 0.53125 v 1 h 3 v 5 c 0 1.003906 1.316406 1.378906 1.847656 0.53125 l 5 -8 c 0.105469 -0.171875 0.152344 -0.355469 0.152344 -0.53125 v -1 h -3 v -5 c 0 -0.5625 -0.464844 -1.015625 -1.03125 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameraflashsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraflashsymbolic;
