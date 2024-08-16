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
        <path d="m 4 1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 9 h -1 l -0.00390625 2 h 0.00390625 l 3 0.011719 v -0.011719 h 13 v -2 h -1 v -9 s 0.015625 -0.707031 -0.355469 -1.445312 c -0.371093 -0.742188 -1.3125 -1.554688 -2.644531 -1.554688 z m 0 2 h 8 c 0.667969 0 0.726562 0.1875 0.855469 0.445312 c 0.128906 0.261719 0.144531 0.554688 0.144531 0.554688 v 9 h -10 v -9 c 0 -0.667969 0.1875 -0.726562 0.449219 -0.855469 c 0.257812 -0.128906 0.550781 -0.144531 0.550781 -0.144531 z m 0 0"/>
        <path d="m 7.003906 5 v 2 h -2 v 2 h 2 v 2 h 2 v -2 h 2 v -2 h -2 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTabNewSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTabNewSymbolic;
