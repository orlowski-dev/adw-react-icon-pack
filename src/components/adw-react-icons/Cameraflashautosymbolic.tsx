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
        <path d="m 11.144531 0.0078125 l -2.0625 5.9921875 h 1.585938 l 0.300781 -1.019531 h 2.09375 l 0.324219 1.019531 h 1.644531 l -1.976562 -5.9921875 z m 0.855469 1.5312495 l 0.648438 2.09375 h -1.273438 z m 0 0"/>
        <path d="m 6.96875 0 c -0.332031 0.0117188 -0.640625 0.1875 -0.816406 0.46875 l -5 8 c -0.105469 0.171875 -0.152344 0.355469 -0.152344 0.53125 v 1 h 3 v 5 c 0.003906 1.003906 1.316406 1.378906 1.847656 0.53125 l 5 -8 c 0.105469 -0.171875 0.152344 -0.355469 0.152344 -0.53125 h -3 v -6 c 0 -0.5625 -0.464844 -1.015625 -1.03125 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameraflashautosymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraflashautosymbolic;
