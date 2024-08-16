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
      <path d="m 5 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 c 0.085938 0 0.167969 -0.011719 0.25 -0.03125 l 1.019531 1.03125 h -2.269531 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 8 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 h -2.261719 l 1.011719 -1.03125 c 0.078125 0.019531 0.15625 0.03125 0.238281 0.03125 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 s -1 0.449219 -1 1 c 0 0.09375 0.015625 0.1875 0.039063 0.277344 l -1.683594 1.710937 l -0.667969 0.011719 l -1.714843 -1.734375 c 0.027343 -0.085937 0.039062 -0.175781 0.039062 -0.265625 c 0 -0.550781 -0.449219 -1 -1 -1 z m -0.5 4 h 2.757812 l 0.007813 0.007812 l 0.375 -0.007812 h 3.859375 s 1.5 1 1.5 4 s -1.5 4 -1.5 4 h -7 s -1.5 -1 -1.5 -4 s 1.5 -4 1.5 -4 z m 6.5 10 h 1 v 1 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTvsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTvsymbolic;
