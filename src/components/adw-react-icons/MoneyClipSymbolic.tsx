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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 9.5 c 0 1.386719 1.113281 2.5 2.5 2.5 h 10.5 c 1.214844 0 2 -1 1.949219 -2 h -6.949219 c -1.109375 0 -2 -0.890625 -2 -2 v -4 c 0 -1.109375 0.890625 -2 2 -2 h 6.949219 c 0.050781 -1 -0.734375 -2 -1.949219 -2 h -10.5 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 h 10.5 c 0 -2 -2 -2 -2 -2 z m 5 6 c -0.554688 0 -1 0.445312 -1 1 v 4 c 0 0.554688 0.445312 1 1 1 h 8 v -6 z m 2 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMoneyClipSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoneyClipSymbolic;
