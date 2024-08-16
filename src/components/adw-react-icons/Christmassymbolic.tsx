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
      <path d="m 8.011719 0.015625 c -0.554688 0 -1 0.445313 -1 1 c 0 0.550781 0.445312 1 1 1 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.554687 -0.449219 -1 -1 -1 z m 0 2 l -4 4 h 2 l -3 4 h 2 l -3 4 h 4 v 2 h 4 v -2 h 4 l -3 -4 h 2 l -3 -4 h 2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwChristmassymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChristmassymbolic;
