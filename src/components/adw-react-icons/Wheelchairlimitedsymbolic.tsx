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
        <path d="m 4.121094 5.421875 c -1.851563 0.886719 -3.136719 2.78125 -3.136719 4.960937 c 0 3.027344 2.476563 5.5 5.5 5.5 c 1.953125 0 3.675781 -1.027343 4.652344 -2.574218 l -0.539063 -1.425782 h -0.945312 c -0.558594 1.1875 -1.757813 2 -3.167969 2 c -1.945313 0 -3.5 -1.554687 -3.5 -3.5 c 0 -1.347656 0.75 -2.507812 1.855469 -3.09375 z m 7.171875 4.460937 c 0.253906 0 0.5 0.105469 0.6875 0.285157 c -0.003907 -0.097657 -0.011719 -0.191407 -0.019531 -0.285157 z m 0 0" fill-opacity="0.35"/>
        <path d="m 4.796875 1.023438 c -0.539063 0.109374 -0.886719 0.640624 -0.777344 1.179687 l 0.101563 0.472656 c 0.007812 0.054688 0.023437 0.105469 0.046875 0.160157 l 2.898437 7.523437 c 0.148438 0.386719 0.519532 0.640625 0.933594 0.640625 h 3.304688 l 1.257812 3.351562 c 0.148438 0.390626 0.519531 0.648438 0.9375 0.648438 h 1.5 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -0.804688 l -1.257812 -3.351562 c -0.148438 -0.390626 -0.519531 -0.648438 -0.9375 -0.648438 h -3.3125 l -2.625 -6.808594 l -0.082031 -0.394531 c -0.113281 -0.539063 -0.644531 -0.886719 -1.183594 -0.773437 z m 0 0"/>
        <path d="m 8 2 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 s 2 0.894531 2 2 z m 0 0"/>
        <path d="m 7 6 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWheelchairlimitedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWheelchairlimitedsymbolic;
