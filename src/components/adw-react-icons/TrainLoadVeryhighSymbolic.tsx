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
        <path d="m 7 4 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 s 2 0.894531 2 2 z m 0 0"/>
        <path d="m 2 10 c 0 -1.65625 1.34375 -3 3 -3 s 3 1.34375 3 3"/>
        <path d="m 2 10 h 6 v 4 h -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTrainLoadVeryhighSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTrainLoadVeryhighSymbolic;
