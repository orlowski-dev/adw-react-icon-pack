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
        <path d="m 4 5 h 8 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -8 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
        <path d="m 3 9 h 10 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -10 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
        <path d="m 6 13 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -4 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTextJustifyCenterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextJustifyCenterSymbolic;
