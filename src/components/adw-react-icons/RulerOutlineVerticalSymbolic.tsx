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
      <path d="m 13 2 c 0 -1.089844 -0.910156 -2 -2 -2 h -6 c -1.089844 0 -2 0.910156 -2 2 v 12 c 0 1.089844 0.910156 2 2 2 h 6 c 1.089844 0 2 -0.910156 2 -2 z m -2 0 v 1 h -2 v 1 h 2 v 1 h -3 v 1 h 3 v 1 h -2 v 1 h 2 v 1 h -3 v 1 h 3 v 1 h -1.945312 v 1 h 1.945312 v 2 h -6 v -12 z m -3 10 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRulerOutlineVerticalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRulerOutlineVerticalSymbolic;
