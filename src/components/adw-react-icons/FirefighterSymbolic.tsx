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
      <path d="m 6 1 v 1 c -2.125 0.640625 -3.699219 2.703125 -3.960938 6 h -1.039062 c -0.550781 0 -1 0.449219 -1 1 v 1 h 16 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 h -1.039062 c 0.039062 -3 -1.835938 -5.359375 -3.960938 -6 v -1 l -2 -1 z m 2 2 l 2 1 v 2 c 0 0.5 -0.433594 1.003906 -1.054688 1.417969 c -0.464843 0.3125 -0.734374 0.394531 -0.945312 0.476562 c -0.210938 -0.082031 -0.480469 -0.164062 -0.945312 -0.476562 c -0.621094 -0.414063 -1.054688 -0.917969 -1.054688 -1.417969 v -2 z m -4.996094 8 c -0.113281 3 2.570313 5 4.996094 5 s 5.109375 -2 4.996094 -5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFirefighterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFirefighterSymbolic;
