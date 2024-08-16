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
        <path d="m 4.199219 2 c -0.453125 0 -0.84375 0.300781 -0.960938 0.738281 l -3.238281 11.261719 h 2.070312 l 0.808594 -3 l 2.121094 -0.003906 l 2.125 0.003906 l 0.808594 3 h 2.066406 l -3.234375 -11.261719 c -0.121094 -0.4375 -0.511719 -0.738281 -0.964844 -0.738281 z m 0.789062 2 h 0.011719 h 0.011719 c 0.121093 -0.003906 0.238281 0.011719 0.289062 0.207031 l 1.320313 4.792969 h -3.242188 l 1.320313 -4.792969 c 0.050781 -0.195312 0.167969 -0.210937 0.289062 -0.207031 z m 0 0"/>
        <path d="m 10 0 v 1 h 2 v 14 h -2 v 1 h 2.5 l 0.5 -0.5 l 0.5 0.5 h 2.5 v -1 h -2 v -14 h 2 v -1 h -2.5 l -0.5 0.5 l -0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTextInsertSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextInsertSymbolic;
