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
      <path d="m 13 2 c 0 -1.109375 -2.199219 -2 -5 -2 s -5 0.890625 -5 2 v 9 c 0 0.660156 0.78125 1.238281 2 1.601562 v 2.398438 s 0 1 1 1 h 4 c 1 0 1 -1 1 -1 v -2.398438 c 1.21875 -0.363281 2 -0.941406 2 -1.601562 z m -2 4 c 0 1.65625 -1.34375 3 -3 3 s -3 -1.34375 -3 -3 s 1.34375 -3 3 -3 s 3 1.34375 3 3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSecurityKeySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSecurityKeySymbolic;
