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
        <path d="m 7.996094 0 c -1.109375 0 -2 0.890625 -2 2 v 3.003906 c 0 0.632813 -0.480469 0.996094 -1 0.996094 h -1 c -1.109375 0 -2 0.890625 -2 2 v 1 h 12 v -1 c 0 -1.109375 -0.894532 -2 -2 -2 h -0.976563 c -0.53125 0 -1.023437 -0.359375 -1.023437 -1 v -3 c 0 -1.109375 -0.894532 -2 -2 -2 z m 0 1.40625 c 0.324218 0 0.59375 0.265625 0.59375 0.59375 s -0.269532 0.59375 -0.59375 0.59375 c -0.328125 0 -0.59375 -0.265625 -0.59375 -0.59375 s 0.265625 -0.59375 0.59375 -0.59375 z m 0 0"/>
        <path d="m 2 10 h 12 l -0.800781 5.003906 c -0.199219 0.820313 -0.699219 0.996094 -1.246094 0.996094 h -1.953125 v -3 l -1.125 3 h -1.847656 l -0.027344 -3 l -1.035156 3 h -0.964844 v -1.5 l -1 1.5 h -3 l 0.210938 -1.046875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLargerbrushsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLargerbrushsymbolic;
