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
        <path d="m 3.179688 -0.015625 c -1.203126 0 -2.195313 1 -2.195313 2.203125 v 0.8125 h 2 v -0.8125 c 0 -0.132812 0.070313 -0.203125 0.195313 -0.203125 h 9.609374 c 0.121094 0 0.195313 0.070313 0.195313 0.203125 v 0.8125 h 2 v -0.8125 c 0 -1.203125 -0.996094 -2.203125 -2.195313 -2.203125 z m 0 0"/>
        <path d="m 3.179688 11.992188 c -1.203126 0 -2.195313 1 -2.195313 2.203124 v 1.828126 h 2 v -1.828126 c 0 -0.132812 0.070313 -0.203124 0.195313 -0.203124 h 9.609374 c 0.121094 0 0.195313 0.070312 0.195313 0.203124 v 1.785157 h 2 v -1.785157 c 0 -1.203124 -0.996094 -2.203124 -2.195313 -2.203124 z m 0 0"/>
        <path d="m 3.179688 3.984375 c -1.203126 0 -2.195313 1 -2.195313 2.203125 v 0.8125 h 2 v -0.8125 c 0 -0.132812 0.070313 -0.203125 0.195313 -0.203125 h 9.609374 c 0.121094 0 0.195313 0.070313 0.195313 0.203125 v 0.8125 h 2 v -0.8125 c 0 -1.203125 -0.996094 -2.203125 -2.195313 -2.203125 z m 0 0"/>
        <path d="m 3.179688 7.984375 c -1.203126 0 -2.195313 1 -2.195313 2.203125 v 0.8125 h 2 v -0.8125 c 0 -0.132812 0.070313 -0.203125 0.195313 -0.203125 h 9.609374 c 0.121094 0 0.195313 0.070313 0.195313 0.203125 v 0.8125 h 2 v -0.8125 c 0 -1.203125 -0.996094 -2.203125 -2.195313 -2.203125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStackedplatessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStackedplatessymbolic;
