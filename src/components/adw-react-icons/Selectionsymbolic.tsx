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
        <path d="m 1 5 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2.03125 0 v 1 h 1 v -1 z m -10.03125 2 v 1 h 1 v -1 z m 10.03125 0 v 1 h 1 v -1 z m -10.03125 2 v 1 h 1 v -1 z m 10.03125 0 v 1 h 1 v -1 z m -10.03125 2 v 1 h 1 v -1 z m 10.03125 0 v 1 h 1 v -1 z m -10.03125 2 v 1 h 1 v -1 z m 10.03125 0 v 1 h 1 v -1 z m -10.03125 2 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 2.03125 0 v 1 h 1 v -1 z m 0 0"/>
        <path d="m 6 1.03125 c -0.550781 0 -1 0.449219 -1 1 v 1.96875 h 8 v 8 h 1 c 0.550781 0 1 -0.449219 1 -1 v -8.96875 c 0 -0.550781 -0.449219 -1 -1 -1 z m -1 5.96875 v 4 c 0 0.550781 0.449219 1 1 1 h 4 v -2 h -3 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSelectionsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSelectionsymbolic;
