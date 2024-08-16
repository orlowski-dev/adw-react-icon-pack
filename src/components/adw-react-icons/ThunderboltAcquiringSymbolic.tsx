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
      <path d="m 1.984375 0 l 0.015625 1 h -1 v 1 c 0 1 0.894531 1.996094 2 2 l -0.023438 1 h 1 l 0.023438 -1 c 1 0 1.984375 -0.890625 1.984375 -2 l 0.015625 -1 h -1 l -0.015625 -1 z m 7.015625 1 c -1.109375 0 -2 0.941406 -2 2.0625 v 1.9375 h 1 v -1.9375 c 0 -0.609375 0.449219 -1.0625 1 -1.0625 s 1 0.453125 1 1.0625 v 1.9375 h 1 v -1.9375 c 0 -1.121094 -0.890625 -2.0625 -2 -2.0625 z m 5.5 2 c -0.855469 0 -1.5 0.765625 -1.5 1.632812 v 0.367188 h 1 v -0.367188 c 0 -0.390624 0.25 -0.632812 0.5 -0.632812 h 1.5 v -1 z m -11.5 8 v 2.5 c 0 1.375 1.125 2.5 2.5 2.5 s 2.5 -1.125 2.5 -2.5 v -2.5 h -1 v 2.5 c 0 0.839844 -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 v -2.5 z m 7 0 v 1.9375 c 0 1.121094 0.890625 2.0625 2 2.0625 s 2 -0.941406 2 -2.0625 v -1.9375 h -1 v 1.9375 c 0 0.609375 -0.449219 1.0625 -1 1.0625 s -1 -0.453125 -1 -1.0625 v -1.9375 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 3 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwThunderboltAcquiringSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwThunderboltAcquiringSymbolic;
