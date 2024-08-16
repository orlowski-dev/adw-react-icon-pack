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
        <path d="m 0.00390625 0 v 15 h 1.99999975 v -1 h 12 v 1 h 2 v -15 h -2 v 1 h -12 v -1 z m 1.99999975 3 h 12 v 9 h -12 z m 0 0"/>
        <path d="m 13.003906 11 v -1 h -1 v 1 z m -9 0 v -1 h -1 v 1 z m 9 -2 v -1 h -1 v 1 z m -9 0 v -1 h -1 v 1 z m 9 -2 v -1 h -1 v 1 z m -9 0 v -1 h -1 v 1 z m 9 -2 v -1 h -1 v 1 z m -9 0 v -1 h -1 v 1 z m 0 0"/>
        <path d="m 7.003906 4.5 c 0.195313 0 0.390625 0.058594 0.554688 0.167969 l 3 2 c 0.59375 0.394531 0.59375 1.269531 0 1.664062 l -3 2 c -0.164063 0.109375 -0.359375 0.167969 -0.554688 0.167969 c 0 0 -1 0 -1 -1 v -4 c 0 -1 1 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwVideoReelSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideoReelSymbolic;
