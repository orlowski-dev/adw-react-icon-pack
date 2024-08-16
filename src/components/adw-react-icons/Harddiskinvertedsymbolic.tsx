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
      <path d="m 3.195312 0 c -1.203124 0 -2.195312 1 -2.195312 2.199219 v 11.601562 c 0 1.199219 0.992188 2.199219 2.195312 2.199219 h 9.609376 c 1.203124 0 2.195312 -1 2.195312 -2.199219 v -11.601562 c 0 -1.199219 -0.992188 -2.199219 -2.195312 -2.199219 z m 4.804688 3 c 2.210938 0 4 1.789062 4 4 s -1.5 4 -4 4 h -4 v -4 c 0 -2.210938 1.789062 -4 4 -4 z m 0 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHarddiskinvertedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHarddiskinvertedsymbolic;
