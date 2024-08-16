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
        <path d="m 3 9 h 4.015625 v 4 h -4.015625 z m 0 0"/>
        <path d="m 8 9 h 5 v 4 h -5 z m 0 0"/>
        <path d="m 0.988281 0.96875 v 14.03125 h 14.011719 v -14.03125 z m 1 1 h 12.011719 v 5.03125 h -12.011719 z m 0 6.03125 h 12.011719 v 6 h -12.011719 z m 0 0" fill-opacity="0.35"/>
        <path d="m 3 3 h 10 v 3 h -10 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwObjectpackingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwObjectpackingsymbolic;
