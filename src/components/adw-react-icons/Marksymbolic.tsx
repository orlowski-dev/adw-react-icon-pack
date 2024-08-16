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
      <path d="m 16 1 l -6 6 l 0.035156 4 l -1.0625 1.058594 v 2.941406 h 3.015625 l 1.011719 -1.019531 l 3 0.019531 z m -13 11 v 1 h 1 v -1 z m 1 1 v 1 h 1 v 1 h 3 v -3 h -3 v 1 z m 0 1 h -1 v 1 h 1 z m -1 0 v -1 h -1 v 1 z m -1 0 h -1 v 1 h 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMarksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMarksymbolic;
