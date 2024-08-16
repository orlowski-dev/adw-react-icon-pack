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
      <path d="m 0 2 v 2 h 16 v -2 z m 0 3 v 7 h 2 v -4.542969 l 2.09375 4.542969 h 1.8125 l 2.09375 -4.542969 v 4.542969 h 2 v -7 h -3 l -2 4 l -2 -4 z m 10 4 l 3 3 l 3 -3 h -2 v -4 h -2 v 4 z m -10 4 v 2 h 16 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMarkdownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMarkdownSymbolic;
