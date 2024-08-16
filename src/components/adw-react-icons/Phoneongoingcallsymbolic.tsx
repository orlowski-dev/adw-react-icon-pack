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
        <path d="m 5.003906 2 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.554688 -0.445312 1 -1 1 h -0.710937 c 0.671875 2.265625 2.445312 4.042969 4.710937 4.710938 v -0.710938 c 0 -0.554688 0.449219 -1 1 -1 h 3 c 0.554688 0 1 0.445312 1 1 v 1.5 c 0 1.378906 -1.117187 2.5 -2.5 2.5 h -0.5 c -5.503906 0 -10 -4.496094 -10 -10 v -0.5 c 0 -1.378906 1.121094 -2.5 2.5 -2.5 z m 0 0"/>
        <path d="m 8 4 v 2 c 1.117188 0 2 0.882812 2 2 h 2 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 0"/>
        <path d="m 8 1 v 2 c 2.773438 0 5 2.226562 5 5 h 2 c 0 -3.855469 -3.144531 -7 -7 -7 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhoneongoingcallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhoneongoingcallsymbolic;
