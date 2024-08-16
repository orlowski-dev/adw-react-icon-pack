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
      <path d="m 0 5 l 2 7 h 2 l 2 -7 h -2 l -1 3.5 l -1 -3.5 z m 6 0 v 7 h 2 v -2 h 0.5 c 1.378906 0 2.5 -1.121094 2.5 -2.5 s -1.121094 -2.5 -2.5 -2.5 z m 5 2.5 v 4.5 h 2 v -3 l 1 3 h 2 v -7 h -2 v 3 l -1 -3 h -2 z m -3 -0.75 h 0.5 c 0.414062 0 0.75 0.335938 0.75 0.75 s -0.335938 0.75 -0.75 0.75 h -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwVpncapssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVpncapssymbolic;
