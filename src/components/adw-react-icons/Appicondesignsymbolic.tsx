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
        <path d="m 4 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 8 c 1.644531 0 3 -1.355469 3 -3 v -7.003906 l -2 2 v 5.003906 c 0 0.570312 -0.429688 1 -1 1 h -8 c -0.570312 0 -1 -0.429688 -1 -1 v -8 c 0 -0.570312 0.429688 -1 1 -1 h 6.972656 l 1.878906 -1.875 c -0.273437 -0.078125 -0.554687 -0.125 -0.851562 -0.125 z m 0 0"/>
        <path d="m 15.394531 0 l -4.464843 4.457031 c 0.683593 0.355469 1.234374 0.910157 1.589843 1.589844 l 0.171875 -0.171875 l 0.007813 0.007812 l 3.300781 -3.300781 v -2.582031 z m -6.394531 5 c -1.65625 0 -3 1.339844 -3 3 v 3 h 3 c 1.660156 0.007812 3 -1.34375 3 -3 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwAppicondesignsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAppicondesignsymbolic;
