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
      <path d="m 1.5 0 c -0.832031 0 -1.5 0.667969 -1.5 1.5 s 0.667969 1.5 1.5 1.5 s 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 z m 12 0 c -0.832031 0 -1.5 0.667969 -1.5 1.5 s 0.667969 1.5 1.5 1.5 s 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 z m -9.5 1 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m -9 3 v 1 h 1 v -1 z m 12 0 v 1 h 1 v -1 z m -12 2 v 1 h 1 v -1 z m 12 0 v 1 h 1 v -1 z m -12 2 v 1 h 1 v -1 z m 12 0 v 1 h 1 v -1 z m -12 2 v 1 h 1 v -1 z m 12 0 v 1 h 1 v -1 z m -11.5 2 c -0.832031 0 -1.5 0.667969 -1.5 1.5 s 0.667969 1.5 1.5 1.5 s 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 z m 12 0 c -0.832031 0 -1.5 0.667969 -1.5 1.5 s 0.667969 1.5 1.5 1.5 s 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 z m -9.5 1 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEditSelectAllSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditSelectAllSymbolic;
