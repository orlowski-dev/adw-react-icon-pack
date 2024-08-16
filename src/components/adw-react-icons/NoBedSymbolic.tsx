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
        <path d="m 0 4 v 10 h 2 v -2 h 6 l -3 -3 h -3 v -3 z m 5 0 c -0.527344 0 -1.035156 0.210938 -1.40625 0.582031 l 2.824219 2.824219 c 0.371093 -0.371094 0.582031 -0.878906 0.582031 -1.40625 c 0 -1.105469 -0.894531 -2 -2 -2 z m 3 1 v 3.988281 l 3.011719 3.011719 h 2.988281 v 2 h 2 v -7 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 0"/>
        <path d="m 1.089844 0.957031 l -1.0625002 1.058594 l 14.0000002 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNoBedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoBedSymbolic;
