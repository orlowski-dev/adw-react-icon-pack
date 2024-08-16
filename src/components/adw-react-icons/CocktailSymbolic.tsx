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
      <path d="m 1 2 l 6 6.398438 v 5.601562 l -3 0.015625 c -0.476562 0 -1 0.382813 -1 0.984375 h 10 c 0 -0.472656 -0.460938 -1 -1 -1 h -3 v -5.570312 l 6 -6.429688 h -0.984375 l -1.925781 2 h -8.179688 l -2.019531 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCocktailSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCocktailSymbolic;
