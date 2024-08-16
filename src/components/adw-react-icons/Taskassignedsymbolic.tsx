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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 10 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 10 3.039062 v 1.988282 h 0.015625 l 5.015625 -0.042969 v 2 s -4.785156 0.050781 -5.015625 0.042969 h -0.015625 v 2.011718 h -1 v -0.003906 c -0.265625 0 -0.519531 -0.101562 -0.707031 -0.289062 l -2 -2 c -0.390625 -0.390625 -0.390625 -1.023438 0 -1.414063 l 2 -2 c 0.1875 -0.183593 0.441406 -0.289062 0.707031 -0.285156 v -0.007813 z m 0 0"/>
        <path d="m 5.3125 5.992188 l -0.332031 0.011718 c -1.09375 0.003906 -1.988281 0.902344 -1.988281 1.996094 v 3.019531 c 0 1.09375 0.894531 1.988281 1.988281 1.988281 h 2.984375 c 1.09375 0 1.992187 -0.894531 1.992187 -1.988281 v -1.023437 h -1 v 1.023437 c 0 0.550781 -0.4375 0.988281 -0.992187 0.988281 h -2.984375 c -0.554688 0 -0.988281 -0.4375 -0.988281 -0.988281 v -3.019531 c 0 -0.554688 0.433593 -0.996094 0.988281 -0.996094 l 0.335937 -0.011718 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTaskassignedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTaskassignedsymbolic;
