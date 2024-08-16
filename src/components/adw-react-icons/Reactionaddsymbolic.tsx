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
        <path d="m 7 2 c -3.855469 0 -7 3.144531 -7 7 s 3.144531 7 7 7 s 7 -3.144531 7 -7 h -2 c 0 2.773438 -2.226562 5 -5 5 s -5 -2.226562 -5 -5 s 2.226562 -5 5 -5 z m 0 0"/>
        <path d="m 11 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0"/>
        <path d="m 6 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 10 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 4.171875 9.414062 c -0.390625 0.390626 -0.390625 1.023438 0 1.414063 c 0.75 0.75 1.765625 1.171875 2.828125 1.171875 c 1.058594 0 2.078125 -0.421875 2.828125 -1.171875 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414063 c -0.390625 -0.390624 -1.023437 -0.390624 -1.414063 0 c -0.375 0.375 -0.882812 0.585938 -1.414062 0.585938 s -1.039062 -0.210938 -1.414062 -0.585938 c -0.390626 -0.390624 -1.023438 -0.390624 -1.414063 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwReactionaddsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwReactionaddsymbolic;
