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
      <path d="m 8 0 c -2.199219 0 -4 1.800781 -4 4 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -1.125 0.875 -2 2 -2 s 2 0.875 2 2 v 3 h 2 v -3 c 0 -2.199219 -1.800781 -4 -4 -4 z m -4 8 c -1.109375 0 -2 0.890625 -2 2 v 5 c 0 0.554688 0.445312 1 1 1 h 4 v -8 z m 0 0" fill="#2e3436"/>
    <path d="m 9.5 8 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 5 c 0 0.832031 0.667969 1.5 1.5 1.5 h 5 c 0.832031 0 1.5 -0.667969 1.5 -1.5 v -5 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m 1.5 1 h 2 v 2.5 s 0 0.5 -0.5 0.5 h -1 c -0.5 0 -0.5 -0.5 -0.5 -0.5 z m 0.5 4 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 1 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -1 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0" class="warning" fill="#ff7800"/>
    </svg>
  );
};

const AdwChannelInsecureSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChannelInsecureSymbolic;
