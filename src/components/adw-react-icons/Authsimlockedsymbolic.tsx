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
        <path d="m 13 9 c -1.097656 0 -2 0.902344 -2 2 v 1 h -1 v 4 h 6 v -4 h -1 v -1 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.5625 0 1 0.4375 1 1 v 1 h -2 v -1 c 0 -0.5625 0.4375 -1 1 -1 z m 0 0"/>
        <path d="m 4 0 c -2 0 -2 2 -2 2 v 12 c 0 2 2 2 2 2 h 5 v -5 h -5 v -2 h 6.667969 c 0.558593 -0.679688 1.398437 -1.125 2.332031 -1.125 c 0.351562 0 0.6875 0.074219 1 0.1875 v -5.0625 l -3 -3 z m 1 6 l 1 0.007812 v 2 h -2 v -1.007812 s 0 -1 1 -1 z m 6 0 c 1 0 1 1 1 1 l -0.003906 1 h -2 v -2 z m -4 0.007812 h 2 v 2 h -2 z m -3 5.996094 h 2 v 2 l -1 -0.003906 c -1 0 -1 -1 -1 -1 z m 3 0 h 2 v 2 h -2 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwAuthsimlockedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAuthsimlockedsymbolic;
