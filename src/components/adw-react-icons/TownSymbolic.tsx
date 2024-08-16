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
      <path d="m 12 4 l -2 2 v 3.800781 l -2 -2 l -2 2 v 1.199219 l -1.445312 -1 l -1.554688 1 v 3.972656 h -3 v 1.027344 h 16 v -1.027344 h -2 v -8.972656 z m 0 2.8125 c 0.65625 0 1.1875 0.53125 1.1875 1.1875 s -0.53125 1.1875 -1.1875 1.1875 s -1.1875 -0.53125 -1.1875 -1.1875 s 0.53125 -1.1875 1.1875 -1.1875 z m -5 4.1875 h 2 v 1 h -2 z m -3 1 h 1 v 1 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTownSymbolic;
