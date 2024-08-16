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
        <path d="m 0 5 l 2 7 h 2 l 1.097656 -3.84375 l -1.554687 -1.554688 l -0.542969 1.898438 l -0.976562 -3.417969 l -0.082032 -0.082031 z m 6 0 v 1.9375 l 3.003906 3.007812 c 1.160156 -0.242187 1.992188 -1.261718 1.996094 -2.445312 c 0 -1.378906 -1.121094 -2.5 -2.5 -2.5 z m 5 2.5 v 4.4375 l 0.0625 0.0625 h 1.9375 v -3 l 1 3 h 2 v -7 h -2 v 3 l -1 -3 h -2 z m -3 -0.75 h 0.5 c 0.414062 0 0.75 0.335938 0.75 0.75 s -0.335938 0.75 -0.75 0.75 h -0.5 z m -2 2.308594 v 2.941406 h 2 v -0.941406 z m 0 0"/>
        <path d="m 0.472656 1.527344 l 14 14 l 1.058594 -1.058594 l -14 -14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwVpnCapsDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVpnCapsDisabledSymbolic;
