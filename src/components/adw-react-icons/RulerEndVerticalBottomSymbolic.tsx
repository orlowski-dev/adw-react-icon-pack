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
      <path d="m 14.007812 14.007812 c 0 1.09375 -0.90625 2 -2 2 h -8 c -1.089843 0 -2 -0.90625 -2 -2 v -13.9999995 h 2 v 13.9999995 h 8 v -1 h -4 v -1 h 4 v -1 h -2 v -1 h 2 v -1 h -2 v -1 h 2 v -1 h -4 v -1 h 4 v -1 h -2 v -1 h 2 v -1 h -2 v -1 h 2 v -1 h -4 v -0.9999995 h 6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRulerEndVerticalBottomSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRulerEndVerticalBottomSymbolic;
