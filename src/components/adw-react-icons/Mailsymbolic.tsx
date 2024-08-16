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
        <path d="m 2.1875 2 c -1.207031 0 -2.1875 0.800781 -2.1875 2 v 7.976562 c 0 1.203126 0.980469 2 2.1875 2 h 11.625 c 1.207031 0 2.1875 -1.015624 2.1875 -2.21875 v -7.539062 c 0 -1.199219 -0.980469 -2.21875 -2.1875 -2.21875 z m -0.1875 2 h 12 v 8 h -12 z m 0 0"/>
        <path d="m 14.691406 2.605469 l -6.699218 5.261719 l -5.691407 -4.269532 l -0.601562 0.800782 l 6.308593 4.730468 l 7.300782 -5.738281 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailsymbolic;
