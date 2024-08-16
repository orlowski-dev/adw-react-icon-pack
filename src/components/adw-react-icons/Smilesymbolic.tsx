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
      <path d="m 8 0.992188 c -3.867188 0 -7 3.132812 -7 7 c 0 3.867187 3.132812 7 7 7 s 7 -3.132813 7 -7 c 0 -3.867188 -3.132812 -7 -7 -7 z m -1.996094 3.007812 c 0.550782 0 1 0.449219 1 1 s -0.449218 1 -1 1 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 4 0 c 0.550782 0 1 0.449219 1 1 s -0.449218 1 -1 1 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -7.003906 4 h 10 c 0 1.785156 -0.953125 3.4375 -2.5 4.332031 c -1.546875 0.890625 -3.453125 0.890625 -5 0 c -1.546875 -0.894531 -2.5 -2.546875 -2.5 -4.332031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSmilesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSmilesymbolic;
