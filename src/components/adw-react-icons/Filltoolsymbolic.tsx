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
      <path d="m 10 0 c -0.550781 0 -1 0.445312 -1 1 v 6 c 0 0.554688 0.449219 1 1 1 c 0.554688 0 1 -0.445312 1 -1 v -6 c 0 -0.554688 -0.445312 -1 -1 -1 z m -2 3.15625 l -2.46875 1.8125 c 0.007812 -0.011719 -0.03125 -0.019531 -0.28125 0.03125 c -4 0.777344 -4.25 1.65625 -4.25 3 v 5 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -6.1875 l 1.28125 1.875 l 1.0625 1.5625 l 2.78125 4.15625 c 0.382812 0.566406 1.074219 0.769531 1.53125 0.4375 l 4.96875 -3.59375 c 0.457031 -0.332031 0.507812 -1.058594 0.125 -1.625 l -2.75 -4.0625 v 1.4375 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFilltoolsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFilltoolsymbolic;
