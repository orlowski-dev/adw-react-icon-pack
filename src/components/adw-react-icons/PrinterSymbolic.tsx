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
      <path d="m 4 1 c -0.550781 0 -1 0.449219 -1 1 v 2 h -1 c -1.109375 0 -2 0.890625 -2 2 v 4 c 0 1.109375 0.890625 2 2 2 h 1 v 1 c 0 1.089844 0.910156 2 2 2 h 6 c 1.089844 0 2 -0.910156 2 -2 v -1 h 1 c 1.109375 0 2 -0.890625 2 -2 v -4 c 0 -1.109375 -0.890625 -2 -2 -2 h -1 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 z m 1 2 h 6 v 1 h -6 z m -2.0625 2.980469 h 10.0625 c 0.554688 0 1 0.445312 1 1 v 3.214843 h -1 v -2.195312 h -10 v 2 h -1.0625 v -3.019531 c 0 -0.554688 0.445312 -1 1 -1 z m 2.0625 4.019531 h 6 v 3 h -6 z m 0 0" fill="currentColor"/>
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
