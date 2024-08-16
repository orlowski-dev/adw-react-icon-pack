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
      <path d="m 1 3 v 2 h 2.417969 l 3.714843 6.496094 c 0.175782 0.3125 0.507813 0.503906 0.867188 0.503906 h 6 v -2 h -5.417969 l -3.714843 -6.496094 c -0.175782 -0.3125 -0.507813 -0.503906 -0.867188 -0.503906 z m 6 0 h 7 v 2 h -7 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboardOptionSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardOptionSymbolic;
