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
        <path d="m 3 1 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 9.007812 c 1.660157 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339843 -3 -3 -3 z m 0 2 h 9.007812 c 0.550782 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.449218 1 -1 1 h -9.007812 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 7.5 16 c 2.648438 0 3.527344 -1 3.527344 -1 h -7.054688 s 0.878906 1 3.527344 1 z m 0 0"/>
        <path d="m 11 2 h 1 v 10.5 h -1 z m -2 0 h 1 v 10.5 h -1 z m -2 0 h 1 v 10.5 h -1 z m -2 0 h 1 v 10.5 h -1 z m -2 0 h 1 v 10.5 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenPrivacy5Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacy5Symbolic;
