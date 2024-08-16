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
        <path d="m 6.847656 2 c -1.007812 0 -1.84375 0.839844 -1.84375 1.84375 v 8.3125 c 0 1.003906 0.835938 1.84375 1.84375 1.84375 h 7.308594 c 1.007812 0 1.847656 -0.839844 1.847656 -1.84375 v -8.3125 c 0 -1.003906 -0.839844 -1.84375 -1.847656 -1.84375 z m 2.15625 3 c 0.195313 0 0.390625 0.058594 0.554688 0.167969 l 3 2 c 0.59375 0.394531 0.59375 1.269531 0 1.664062 l -3 2 c -0.164063 0.109375 -0.359375 0.167969 -0.554688 0.167969 c 0 0 -1 0 -1 -1 v -4 c 0 -1 1 -1 1 -1 z m 0 0"/>
        <path d="m 4.003906 2 c -1.09375 0 -2 0.910156 -2 2 v 8 c 0 1.089844 0.90625 2 2 2 z m 0 0"/>
        <path d="m 1.003906 2.28125 c -0.59375 0.351562 -0.99999975 0.992188 -0.99999975 1.71875 v 8 c 0 0.726562 0.40624975 1.367188 0.99999975 1.71875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMusicqueuesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicqueuesymbolic;
