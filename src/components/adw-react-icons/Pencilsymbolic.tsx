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
      <path d="m 11 1 l -2 2 h 1.5 c 0.132812 0 0.257812 0.050781 0.355469 0.144531 l 1.984375 1.988281 c 0.09375 0.09375 0.144531 0.21875 0.144531 0.351563 v 1.589844 l 2.074219 -2.074219 v -1.941406 l -2.058594 -2.058594 z m -3 3 l -7 7 v 4 h 4.058594 l 6.925781 -6.925781 v -2.382813 l -1.691406 -1.691406 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPencilsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPencilsymbolic;
