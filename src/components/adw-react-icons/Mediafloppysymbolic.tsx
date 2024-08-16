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
      <path d="m 3.96875 1 s -2.96875 0 -2.96875 2.96875 v 8.03125 s 0 0.5 0.3125 0.71875 l 1.6875 1.6875 v -10.40625 c 0 -1 1 -1 1 -1 h 8 s 1 0 1 1 v 8 c 0 1 -1 1 -1 1 h -1 v 2 h 1 s 3 0 3 -2.96875 v -8.0625 s 0 -2.96875 -2.96875 -2.96875 z m 1.03125 8 c -0.554688 0 -1 0.445312 -1 1 v 4 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -4 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 1 h 2 v 4 h -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMediafloppysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediafloppysymbolic;
