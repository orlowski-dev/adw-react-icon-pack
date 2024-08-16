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
      <path d="m 1.980469 1.003906 v 14 h 2 v -6 h 2.382812 l 0.722657 1.445313 c 0.171874 0.339843 0.519531 0.554687 0.894531 0.554687 h 5 c 0.554687 0 1 -0.449218 1 -1 v -6 c 0 -0.550781 -0.445313 -1 -1 -1 h -3.378907 l -0.726562 -1.449218 c -0.167969 -0.335938 -0.515625 -0.550782 -0.894531 -0.550782 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFlagFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlagFilledSymbolic;
