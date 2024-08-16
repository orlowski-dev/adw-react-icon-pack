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
        <path d="m 3 12 v 2 h 10 v -2 z m 0 0"/>
        <path d="m 16 12.976562 l -4 3 v -6 z m 0 0"/>
        <path d="m 0 12.976562 l 4 3 v -6 z m 0 0"/>
        <path d="m 3 3 h 1 v 5 h 1 v 1 h -2 z m 0 0"/>
        <path d="m 7.5 3 c -0.824219 0 -1.5 0.675781 -1.5 1.5 v 3 c 0 0.824219 0.675781 1.5 1.5 1.5 c 0.820312 0 1.5 -0.675781 1.5 -1.5 v -3 c 0 -0.824219 -0.679688 -1.5 -1.5 -1.5 z m 0 1 c 0.285156 0 0.5 0.214844 0.5 0.5 v 3 c 0 0.285156 -0.214844 0.5 -0.5 0.5 s -0.5 -0.214844 -0.5 -0.5 v -3 c 0 -0.285156 0.214844 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 11.5 3 c -0.824219 0 -1.5 0.675781 -1.5 1.5 v 3 c 0 0.824219 0.675781 1.5 1.5 1.5 s 1.5 -0.675781 1.5 -1.5 v -1.5 h -1 v 1.5 c 0 0.285156 -0.214844 0.5 -0.5 0.5 s -0.5 -0.214844 -0.5 -0.5 v -3 c 0 -0.285156 0.214844 -0.5 0.5 -0.5 s 0.5 0.214844 0.5 0.5 v 0.5 h 1 v -0.5 c 0 -0.824219 -0.675781 -1.5 -1.5 -1.5 z m 0 0"/>
        <path d="m 11.5 6 h 1.5 v 1 h -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwAxisloghorizontalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAxisloghorizontalsymbolic;
