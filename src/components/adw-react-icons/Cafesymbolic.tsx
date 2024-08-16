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
        <path d="m 13.023438 9.050781 l -1 0.003907 h -10 v 3.855468 c 0 1.1875 0.957031 2.144532 2.144531 2.144532 h 5.714843 c 0.898438 0 1.660157 -0.550782 1.980469 -1.328126 c 0.355469 0.195313 0.753907 0.300782 1.160157 0.308594 c 1.382812 0 2.5 -1.121094 2.5 -2.5 s -1.117188 -2.484375 -2.5 -2.484375 z m 0 1.019531 c 0.808593 0 1.464843 0.65625 1.464843 1.464844 s -0.65625 1.464844 -1.464843 1.464844 c -0.378907 -0.019531 -0.738282 -0.183594 -1 -0.460938 v -2.007812 c 0.261718 -0.277344 0.621093 -0.441406 1 -0.460938 z m 0 0"/>
        <path d="m 5.988281 1 v 0.515625 c 0 0.820313 0.675781 1.5 1.5 1.5 h 3 c 0.28125 0 0.5 0.214844 0.5 0.5 c 0 0.28125 -0.21875 0.5 -0.5 0.5 h -7 c -0.824219 0 -1.5 0.675781 -1.5 1.5 c 0 0.820313 0.675781 1.5 1.5 1.5 h 4 c 0.28125 0 0.5 0.214844 0.5 0.5 v 0.484375 h 1 v -0.484375 c 0 -0.824219 -0.679687 -1.5 -1.5 -1.5 h -4 c -0.285156 0 -0.5 -0.21875 -0.5 -0.5 c 0 -0.285156 0.214844 -0.5 0.5 -0.5 h 7 c 0.820313 0 1.5 -0.679687 1.5 -1.5 c 0 -0.824219 -0.679687 -1.5 -1.5 -1.5 h -3 c -0.285156 0 -0.5 -0.21875 -0.5 -0.5 v -0.515625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCafesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCafesymbolic;
