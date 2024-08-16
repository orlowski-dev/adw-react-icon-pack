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
      <path d="m 2 3 c -1.089844 0 -2 0.910156 -2 2 v 6 c 0 1.089844 0.910156 2 2 2 h 12 c 1.089844 0 2 -0.910156 2 -2 v -6 c 0 -1.089844 -0.910156 -2 -2 -2 z m 0 2 h 1 v 2 h 1 v -2 h 1 v 3 h 1 v -3 h 1 v 2 h 1 v -2 h 1 v 3 h 1 v -3 h 1 v 1.945312 h 1 v -1.945312 h 2 v 6 h -12 z m 10 3 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRuleroutlinehorizontalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRuleroutlinehorizontalsymbolic;
