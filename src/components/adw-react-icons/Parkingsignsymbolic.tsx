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
      <path d="m 3 1 c -1.109375 0 -2 0.890625 -2 2 v 10 c 0 1.109375 0.890625 2 2 2 h 10 c 1.109375 0 2 -0.890625 2 -2 v -10 c 0 -1.109375 -0.890625 -2 -2 -2 z m 2 2 h 3.222656 c 2.375 0 3.777344 1.199219 3.777344 3.4375 c 0 2.058594 -1.117188 3.5625 -3 3.5625 h -2 v 3 h -2 z m 2 2 v 3 h 1.324219 c 1.160156 0 1.675781 -0.585938 1.675781 -1.46875 c 0 -0.648438 -0.238281 -1.53125 -1.621094 -1.53125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwParkingsignsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwParkingsignsymbolic;
