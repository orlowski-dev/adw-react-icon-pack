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
      <path d="m 3 -0.0117188 c -1.660156 0 -3 1.3398438 -3 2.9999998 v 10 c 0 1.664063 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.335937 3 -3 v -10 c 0 -1.660156 -1.339844 -2.9999998 -3 -2.9999998 z m 4.964844 2.9999998 h 0.164062 c 1.617188 0 2.917969 1.300781 2.917969 2.917969 v 1.082031 c 0.5625 0.007813 1.007813 0.472657 1 1.03125 v 2.9375 c 0 0.570313 -0.460937 1.03125 -1.03125 1.03125 h -5.9375 c -0.570313 0 -1.03125 -0.460937 -1.03125 -1.03125 v -2.9375 c -0.007813 -0.558593 0.4375 -1.023437 1 -1.03125 v -1.082031 c 0 -1.617188 1.300781 -2.917969 2.917969 -2.917969 z m 0.082031 2 c -0.554687 0 -1 0.445313 -1 1 v 1 h 2 v -1 c 0 -0.554687 -0.445313 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwReadonlysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwReadonlysymbolic;
