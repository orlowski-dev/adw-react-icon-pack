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
        <path d="m 9 11 c 0 2.210938 -1.789062 4.011719 -4 4 h -4 v -4 c 0 -2.210938 1.789062 -4 4 -4 s 4 1.789062 4 4 z m 0 0"/>
        <path d="m 14.40625 0.0507812 c -0.386719 0.0078126 -0.757812 0.1718748 -1.03125 0.4492188 l -5.800781 5.773438 c 0.90625 0.476562 1.644531 1.214843 2.121093 2.121093 l 5.804688 -5.769531 c 0.976562 -0.957031 0.273438 -2.6171875 -1.09375 -2.5742188 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPaintbrushSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPaintbrushSymbolic;
