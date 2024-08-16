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
      <g fill="currentColor">
        <path d="m 6 0 c -1.097656 0 -1.875 0.945312 -1.992188 1.875 l -1 8 c -0.152343 1.226562 0.894532 2.125 1.992188 2.125 h 6 c 1.097656 0 2.144531 -0.898438 1.992188 -2.125 l -0.628907 -5.027344 c -0.035156 -0.265625 -0.171875 -0.503906 -0.382812 -0.667968 c -0.210938 -0.160157 -0.480469 -0.234376 -0.746094 -0.199219 c -0.078125 0.011719 -0.15625 0.019531 -0.234375 0.019531 c 0 0 0 0 -0.003906 0 c -1.113282 0 -1.996094 -0.882812 -1.996094 -2 c 0.003906 -0.222656 0.042969 -0.445312 0.117188 -0.65625 c 0.113281 -0.308594 0.066406 -0.648438 -0.117188 -0.917969 c -0.1875 -0.265625 -0.496094 -0.425781 -0.820312 -0.425781 z m 0 2 h 1 c 0 2.011719 1.535156 3.625 3.480469 3.894531 l 0.511719 4.105469 h -5.984376 l 0.984376 -7.875 c 0.019531 -0.167969 -0.003907 -0.125 0.007812 -0.125 z m 0 0"/>
        <path d="m 8 10 c -0.550781 0 -1 0.449219 -1 1 v 4 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -4 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwIcecreamsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIcecreamsymbolic;
