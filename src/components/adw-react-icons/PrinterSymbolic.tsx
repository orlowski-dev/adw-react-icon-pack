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
      <path d="m 5.007812 1 c -0.554687 0 -1 0.449219 -1 1 v 1 h 8 v -1 c 0 -0.550781 -0.449218 -1 -1 -1 z m -3 3 c -1.109374 0 -1.9999995 0.890625 -1.9999995 2 v 4 c 0 1.109375 0.8906255 2 1.9999995 2 v 1 c 0 1.089844 0.90625 2 2 2 h 8 c 1.089844 0 2 -0.910156 2 -2 v -1 c 1.105469 0 2 -0.890625 2 -2 v -4 c 0 -1.109375 -0.894531 -2 -2 -2 z m 2 6 h 8 v 3 h -8 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPrinterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPrinterSymbolic;
