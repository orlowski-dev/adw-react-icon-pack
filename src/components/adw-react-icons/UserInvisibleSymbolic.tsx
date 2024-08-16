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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 1 v 3 l 3 -3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 6 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -6 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="#2e3436" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwUserInvisibleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUserInvisibleSymbolic;
