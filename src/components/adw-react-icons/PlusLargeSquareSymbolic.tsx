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
      <path d="m 0 3 v 10 c 0 1.65625 1.34375 3 3 3 h 10 c 1.65625 0 3 -1.34375 3 -3 v -10 c 0 -1.65625 -1.34375 -3 -3 -3 h -10 c -1.65625 0 -3 1.34375 -3 3 z m 7 0 h 2 v 4 h 4 v 2 h -4 v 4 h -2 v -4 h -4 v -2 h 4 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlusLargeSquareSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlusLargeSquareSymbolic;
