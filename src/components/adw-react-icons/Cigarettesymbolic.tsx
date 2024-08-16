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
        <path d="m 3 0.0117188 v 0.5000002 c 0 2.480469 2.019531 4.5 4.5 4.5 h 3 c 0.832031 0 1.5 0.664062 1.5 1.5 v 0.5 h 3 v -0.5 c 0 -2.480469 -2.019531 -4.5 -4.5 -4.5 h -3 c -0.835938 0 -1.5 -0.667969 -1.5 -1.5 v -0.5000002 z m 0 0" fill-opacity="0.35"/>
        <path d="m 14 8.011719 h 1 v 4 h -1 z m -2 0 h 1 v 4 h -1 z m -12 0 h 11 v 4 h -11 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCigarettesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCigarettesymbolic;
