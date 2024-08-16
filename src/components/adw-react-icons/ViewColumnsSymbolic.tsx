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
      <path d="m 2 16 c -0.570312 0 -1 -0.496094 -1 -1 v -14 c 0 -0.527344 0.453125 -1 0.988281 -1 h 12.054688 c 0.492187 0 0.957031 0.542969 0.957031 1 v 14 c 0 0.550781 -0.5 1 -0.953125 1 z m 1 -2 h 2 v -12 h -2 z m 4 0 h 2 v -12 h -2 z m 4 0 h 2 v -12 h -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwViewColumnsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewColumnsSymbolic;
