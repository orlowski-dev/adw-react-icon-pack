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
      <path d="m 4.199219 0 c -1.203125 0 -2.199219 1 -2.199219 2.199219 v 11.601562 c 0 1.199219 0.996094 2.199219 2.199219 2.199219 h 7.605469 c 1.203124 0 2.195312 -1 2.195312 -2.199219 v -11.601562 c 0 -1.199219 -0.992188 -2.199219 -2.195312 -2.199219 z m 0 2 h 7.605469 c 0.125 0 0.195312 0.070312 0.195312 0.199219 v 9.542969 c 0 0.132812 -0.070312 0.203124 -0.195312 0.203124 h -7.605469 c -0.125 0 -0.199219 -0.070312 -0.199219 -0.203124 v -9.542969 c 0 -0.128907 0.074219 -0.199219 0.199219 -0.199219 z m 3.800781 10.835938 c 0.550781 0 1 0.449218 1 1 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 c 0 -0.550782 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSmartphoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSmartphoneSymbolic;
