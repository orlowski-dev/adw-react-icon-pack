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
      <path d="m 4 1 c -1.660156 0 -3 1.339844 -3 3 v 6 c 0 1.660156 1.339844 3 3 3 h 8 c 1.660156 0 3 -1.339844 3 -3 v -6 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 8 c 0.554688 0 1 0.445312 1 1 v 6 c 0 0.554688 -0.445312 1 -1 1 h -8 c -0.554688 0 -1 -0.445312 -1 -1 v -6 c 0 -0.554688 0.445312 -1 1 -1 z m 6.5 1 s -0.5 0 -0.5 0.5 v 0.984375 s 0 0.5 0.5 0.5 h 1 s 0.5 0 0.5 -0.5 v -0.984375 s 0 -0.5 -0.5 -0.5 z m -6 1 s -0.5 0 -0.5 0.5 v 4 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 v -4 c 0 -0.5 -0.4375 -0.5 -0.5 -0.5 z m 0.5 2 h 3 v 2 h -3 z m 3 7 c -5 0 -5 1 -5 1 c 0 1 1 1 1 1 h 8 c 1 0 1 -1 1 -1 s 0 -1 -5 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDisplaywithwindowsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDisplaywithwindowsymbolic;
