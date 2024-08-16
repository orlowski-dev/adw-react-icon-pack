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
      <path d="m 9 4 v 4.34375 c -0.453125 -0.210938 -0.96875 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 1.910156 0 3.480469 -1.5625 3.5 -3.46875 c 0 -0.011719 0 -0.019531 0 -0.03125 v -7 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 h 3.5 c 0 -1.65625 -1.34375 -3 -3 -3 s -3 1.34375 -3 3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMusicNoteSingleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicNoteSingleSymbolic;
