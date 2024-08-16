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
      <path d="m 7 0 c -2.753906 0 -5 2.246094 -5 5 v 6 c 0 2.753906 2.246094 5 5 5 h 2 c 2.753906 0 5 -2.246094 5 -5 v -6 c 0 -2.753906 -2.246094 -5 -5 -5 z m 1 3 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.554688 -0.445312 1 -1 1 s -1 -0.445312 -1 -1 v -3 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMousewirelessfilledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMousewirelessfilledsymbolic;
