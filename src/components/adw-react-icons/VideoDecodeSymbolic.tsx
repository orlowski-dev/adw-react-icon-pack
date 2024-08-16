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
        <path d="m 6.003906 3 v 2 h 2 v -2 z m 2 2 v 2 h 2 v -2 z m 2 0 h 1 c 0 -0.742188 -0.402344 -1.386719 -1 -1.730469 z m 0 2 v 2 h -2 v -2 h -2 v 2 h -2 v -2 h -2 v -2 h -1 v 6 c 0 1.109375 0.890625 2 2 2 h 6 c 1.105469 0 2 -0.890625 2 -2 v -4 z m 0 0"/>
        <path d="m 11.003906 8 l 3 -3 h 1 v 6 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwVideoDecodeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideoDecodeSymbolic;
