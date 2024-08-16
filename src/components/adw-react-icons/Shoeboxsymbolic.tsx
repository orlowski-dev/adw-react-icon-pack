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
        <path d="m 14 3 v 2 h -12 v -2 z m -14 0 v 2 c 0 1.109375 0.890625 2 2 2 h 12 c 1.109375 0 2 -0.890625 2 -2 v -2 c 0 -1.109375 -0.890625 -2 -2 -2 h -12 c -1.109375 0 -2 0.890625 -2 2 z m 0 0"/>
        <path d="m 13 7 v 7 h -10 v -7 z m -12 0 v 7 c 0 1.109375 0.890625 2 2 2 h 10 c 1.109375 0 2 -0.890625 2 -2 v -7 c 0 -1.109375 -0.890625 -2 -2 -2 h -10 c -1.109375 0 -2 0.890625 -2 2 z m 0 0"/>
        <path d="m 6 8 h 4 v 1 h -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShoeboxsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShoeboxsymbolic;
