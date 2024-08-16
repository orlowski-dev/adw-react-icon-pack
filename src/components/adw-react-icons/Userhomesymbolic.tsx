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
      <g fill="#2e3436">
        <path d="m 12 16 c 1.660156 0 3 -1.339844 3 -3 v -6 c 0 -0.929688 -0.414062 -1.8125 -1.128906 -2.410156 l -4.460938 -3.71875 c -0.816406 -0.679688 -2.003906 -0.679688 -2.820312 0 l -4.460938 3.71875 c -0.714844 0.597656 -1.128906 1.480468 -1.128906 2.410156 v 6 c 0 1.660156 1.339844 3 3 3 z m -9 -3 v -6 c 0 -0.335938 0.148438 -0.65625 0.410156 -0.871094 l 4.460938 -3.71875 c 0.074218 -0.0625 0.183594 -0.0625 0.257812 0 l 4.460938 3.71875 c 0.261718 0.214844 0.410156 0.535156 0.410156 0.871094 v 6 c 0 0.546875 -0.453125 1 -1 1 h -8 c -0.546875 0 -1 -0.453125 -1 -1 z m 0 0"/>
        <path d="m 7 8 h 2 c 0.550781 0 1 0.449219 1 1 v 5 c 0 0.550781 -0.449219 1 -1 1 h -2 c -0.550781 0 -1 -0.449219 -1 -1 v -5 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwUserhomesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUserhomesymbolic;
