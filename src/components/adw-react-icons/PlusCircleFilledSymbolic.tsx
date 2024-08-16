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
      <path d="m 8 1 c -3.871094 0 -7 3.128906 -7 7 s 3.128906 7 7 7 s 7 -3.128906 7 -7 s -3.128906 -7 -7 -7 z m -1 3 h 2 v 3 h 3 v 2 h -3 v 3 h -2 v -3 h -3 v -2 h 3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlusCircleFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlusCircleFilledSymbolic;
