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
      <path d="m 8 1 c -2.210938 0 -4 1.789062 -4 4 v 10 h 8 v -10 c 0 -2.210938 -1.789062 -4 -4 -4 z m -3 4 h 6 v 1 h -6 z m 0 3 h 6 v 4 h -6 z m 2.1875 1 l 0.8125 0.4375 l 0.75 -0.4375 z m 2.8125 0.46875 l -2 1.09375 l -2 -1.03125 v 1.46875 h 4 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPostboxsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPostboxsymbolic;
