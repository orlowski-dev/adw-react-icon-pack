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
      <path d="m 13 1 v 13 h 1 v -13 z m -12 3 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m -9 3 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m -9 3 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwYearaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwYearaltsymbolic;
