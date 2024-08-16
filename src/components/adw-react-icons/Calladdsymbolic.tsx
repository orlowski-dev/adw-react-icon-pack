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
      <path d="m 11 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m -7.492188 1.996094 c -1.382812 0 -2.5 1.121094 -2.5 2.5 v 0.5 c 0 5.503906 4.492188 10 10 10 h 0.5 c 1.378907 0 2.5 -1.121094 2.5 -2.5 v -1.5 c 0 -0.554688 -0.449218 -1 -1 -1 h -3 c -0.554687 0 -1 0.445312 -1 1 v 0.710937 c -2.269531 -0.667969 -4.042968 -2.445312 -4.714843 -4.710937 h 0.714843 c 0.550782 0 1 -0.445313 1 -1 v -3 c 0 -0.554688 -0.449218 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCalladdsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCalladdsymbolic;
