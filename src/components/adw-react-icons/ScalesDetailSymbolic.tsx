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
      <path d="m 7.953125 1.023438 c -2.519531 0.015624 -5.019531 0.734374 -7.445313 2.105468 c -0.382812 0.214844 -0.5781245 0.65625 -0.4843745 1.089844 l 2.0000005 9 c 0.101562 0.457031 0.507812 0.78125 0.976562 0.78125 h 10 c 0.46875 0 0.875 -0.324219 0.976562 -0.78125 l 2 -9 c 0.09375 -0.429688 -0.097656 -0.867188 -0.476562 -1.085938 c -2.492188 -1.4375 -5.027344 -2.121093 -7.546875 -2.109374 z m 0.007813 1.953124 c 1.933593 -0.015624 3.882812 0.566407 5.886718 1.605469 l -1.648437 7.417969 h -8.398438 l -1.644531 -7.417969 c 1.953125 -1 3.875 -1.59375 5.800781 -1.605469 z m 0.039062 1.023438 l -1 7 h 2 z m -4 1 v 2 h 1 v -2 z m 2 0 v 2 h 1 v -2 z m 3 0 v 2 h 1 v -2 z m 2 0 v 2 h 1 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScalesDetailSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScalesDetailSymbolic;
