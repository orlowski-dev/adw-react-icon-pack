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
      <g fill="#2e3436">
        <path d="m 2 0 c -1.109375 0 -2 0.890625 -2 2 v 6 c 0 1.109375 0.890625 2 2 2 v -8 h 8 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 0"/>
        <path d="m 8 6 c -1.109375 0 -2 0.890625 -2 2 v 6 c 0 1.109375 0.890625 2 2 2 h 6 c 1.109375 0 2 -0.890625 2 -2 v -6 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0.003906 2 h 1 h 0.03125 c 0.253906 0.011719 0.507813 0.128906 0.6875 0.3125 l 1.28125 1.28125 l 1.308594 -1.28125 c 0.265625 -0.230469 0.445312 -0.304688 0.6875 -0.3125 h 1 v 1 c 0 0.285156 -0.035156 0.550781 -0.25 0.75 l -1.28125 1.28125 l 1.25 1.25 c 0.1875 0.1875 0.28125 0.453125 0.28125 0.71875 v 1 h -1 c -0.265625 0 -0.53125 -0.09375 -0.71875 -0.28125 l -1.28125 -1.28125 l -1.28125 1.28125 c -0.1875 0.1875 -0.453125 0.28125 -0.71875 0.28125 h -0.996094 v -1 c 0 -0.265625 0.09375 -0.53125 0.28125 -0.71875 l 1.277344 -1.25 l -1.277344 -1.28125 c -0.210937 -0.195312 -0.304687 -0.46875 -0.28125 -0.75 z m 0 0"/>
        <path d="m 5 3 c -1.109375 0 -2 0.890625 -2 2 v 6 c 0 1.109375 0.890625 2 2 2 v -8 h 8 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEditClearAllSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditClearAllSymbolic;
