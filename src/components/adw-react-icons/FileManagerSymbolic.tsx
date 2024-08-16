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
      <path d="m 4 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 8 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 8 c 0.570312 0 1 0.429688 1 1 v 4 h -10 v -4 c 0 -0.570312 0.429688 -1 1 -1 z m 2.464844 1.429688 c -0.019532 0 -0.039063 0.003906 -0.058594 0.007812 c -0.019531 0 -0.042969 0 -0.0625 0 c -0.214844 0.070312 -0.355469 0.273438 -0.34375 0.5 v 0.0625 c 0 0.546875 0.453125 1 1 1 h 2 c 0.546875 0 1 -0.453125 1 -1 v -0.0625 c 0.011719 -0.675781 -1.011719 -0.675781 -1 0 v 0.0625 h -2 v -0.0625 c 0.003906 -0.296875 -0.246094 -0.527344 -0.535156 -0.507812 z m -3.464844 4.570312 h 10 v 4 c 0 0.570312 -0.429688 1 -1 1 h -8 c -0.570312 0 -1 -0.429688 -1 -1 z m 3.464844 1.429688 c -0.019532 0 -0.039063 0.003906 -0.058594 0.007812 c -0.019531 0 -0.042969 0 -0.0625 0 c -0.214844 0.070312 -0.355469 0.273438 -0.34375 0.5 v 0.0625 c 0 0.546875 0.453125 1 1 1 h 2 c 0.546875 0 1 -0.453125 1 -1 v -0.0625 c 0.011719 -0.675781 -1.011719 -0.675781 -1 0 v 0.0625 h -2 v -0.0625 c 0.003906 -0.296875 -0.246094 -0.527344 -0.535156 -0.507812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFileManagerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFileManagerSymbolic;
