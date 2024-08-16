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
        <path d="m 15.003906 7.78125 l -3 -3.03125 v 2.25 h -2 v 2 h 2 v 2.25 l 3 -3.03125 z m 0 0" fill-opacity="0.35"/>
        <path d="m 9.003906 1 v 14 h -2 v -14 z m 0 0"/>
        <path d="m 1.003906 7.78125 l 3 -3.03125 v 2.25 h 2 v 2 h -2 v 2.25 l -3 -3.03125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSizeleftsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSizeleftsymbolic;
