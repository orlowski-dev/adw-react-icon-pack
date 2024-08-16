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
        <path d="m 2.003906 2.023438 c -1.09375 0.007812 -1.99999975 0.910156 -1.99999975 2 v 9 c 0 1.089843 0.90624975 2.003906 1.99999975 2 l 4 -0.023438 v -2 l -4 0.023438 v -9 l 4 -0.023438 v -2 z m 0 0"/>
        <path d="m 13.003906 3 v 3 h 3 v -3 z m 1 1 h 1 v 1 h -1 z m 0 0"/>
        <path d="m 14.003906 7 v 3 h -3 v -3 z m -1 1 h -1 v 1 h 1 z m 0 0"/>
        <path d="m 13.003906 11 v 3 h 3 v -3 z m 1 1 h 1 v 1 h -1 z m 0 0"/>
        <path d="m 10.503906 11.5 v 0.5 h 0.5 v 2 h 1 v -3 h -1 z m 0 0"/>
        <path d="m 14.503906 7.5 v 0.5 h 0.5 v 2 h 1 v -3 h -1 z m 0 0"/>
        <path d="m 10.503906 3.5 v 0.5 h 0.5 v 2 h 1 v -3 h -1 z m 0 0"/>
        <path d="m 8.003906 1 h 1 v 15 h -1 z m 0 0"/>
        <path d="m 6.003906 1 h 1 v 15 h -1 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwDecodesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDecodesymbolic;
