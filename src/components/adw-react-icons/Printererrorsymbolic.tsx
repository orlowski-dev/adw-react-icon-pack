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
      <path d="m 5 1 c -0.550781 0 -1 0.449219 -1 1 v 1 h 8 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3 3 c -1.109375 0 -2 0.890625 -2 2 v 4 c 0 1.109375 0.890625 2 2 2 v 1 c 0 1.089844 0.910156 2 2 2 h 4.019531 c -0.445312 -0.589844 -0.757812 -1.273438 -0.90625 -2 h -3.113281 v -3 h 3.4375 c 0.789062 -1.816406 2.582031 -2.992188 4.5625 -3 c 1.574219 0 3.054688 0.742188 4 2 v -3 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    <path class="error" d="m 12 8 c -2.210938 0 -4 1.789062 -4 4 s 1.789062 4 4 4 s 4 -1.789062 4 -4 s -1.789062 -4 -4 -4 z m -2 3 h 4 c 0.554688 0 1 0.445312 1 1 s -0.445312 1 -1 1 h -4 c -0.554688 0 -1 -0.445312 -1 -1 s 0.445312 -1 1 -1 z m 0 0" fill="#e01b24"/>
    </svg>
  );
};

const AdwPrintererrorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPrintererrorsymbolic;
