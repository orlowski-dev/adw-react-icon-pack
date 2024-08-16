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
        <path d="m 6.988281 0 v 0.511719 c 0 0.824219 0.675781 1.5 1.5 1.5 h 3 c 0.28125 0 0.5 0.21875 0.5 0.5 c 0 0.285156 -0.21875 0.5 -0.5 0.5 h -7 c -0.824219 0 -1.5 0.679687 -1.5 1.5 c 0 0.824219 0.675781 1.5 1.5 1.5 h 4 c 0.28125 0 0.5 0.21875 0.5 0.5 v 0.488281 h 1 v -0.488281 c 0 -0.820313 -0.679687 -1.5 -1.5 -1.5 h -4 c -0.285156 0 -0.5 -0.214844 -0.5 -0.5 c 0 -0.28125 0.214844 -0.5 0.5 -0.5 h 7 c 0.820313 0 1.5 -0.675781 1.5 -1.5 c 0 -0.820313 -0.679687 -1.5 -1.5 -1.5 h -3 c -0.285156 0 -0.5 -0.214844 -0.5 -0.5 v -0.511719 z m 0 0"/>
        <path d="m 8 13 c -1.660156 0 -3 1.339844 -3 3 h 6 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 8 15 c -3.878906 0 -7 -3.121094 -7 -7 h 14 c 0 3.878906 -3.121094 7 -7 7 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSoupsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSoupsymbolic;
