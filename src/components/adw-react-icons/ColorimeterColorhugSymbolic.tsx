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
      <path d="m 3.0625 0 c -1.695312 0 -3.0625 1.367188 -3.0625 3.0625 v 6.875 c 0 1.695312 1.367188 3.0625 3.0625 3.0625 h 9.875 c 1.695312 0 3.0625 -1.367188 3.0625 -3.0625 v -6.875 c 0 -1.695312 -1.367188 -3.0625 -3.0625 -3.0625 h -1.9375 c -1.394531 0 -2.515625 1.121094 -2.515625 2.515625 v 1.550781 c -0.855469 0.226563 -1.484375 1.003906 -1.484375 1.933594 v 2 c 0 1.109375 0.890625 2 2 2 h 1 c 1.109375 0 2 -0.890625 2 -2 v -2 c 0 -0.941406 -0.644531 -1.726562 -1.515625 -1.941406 v -1.542969 c 0 -0.28125 0.234375 -0.515625 0.515625 -0.515625 h 1.9375 c 0.589844 0 1.0625 0.472656 1.0625 1.0625 v 6.875 c 0 0.589844 -0.472656 1.0625 -1.0625 1.0625 h -9.875 c -0.589844 0 -1.0625 -0.472656 -1.0625 -1.0625 v -6.875 c 0 -0.589844 0.472656 -1.0625 1.0625 -1.0625 h 2.9375 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 1.9375 14 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwColorimeterColorhugSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwColorimeterColorhugSymbolic;
