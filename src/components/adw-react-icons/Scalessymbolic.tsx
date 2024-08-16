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
        <path d="m 3.03125 1 c -1.667969 0 -3.03125 1.363281 -3.03125 3.03125 v 7.9375 c 0 1.667969 1.363281 3.03125 3.03125 3.03125 h 8.9375 c 1.667969 0 3.03125 -1.363281 3.03125 -3.03125 v -7.9375 c 0 -1.667969 -1.363281 -3.03125 -3.03125 -3.03125 z m 4.46875 2 c 1.933594 0 3.5 1.566406 3.5 3.5 s -1.566406 3.5 -3.5 3.5 s -3.5 -1.566406 -3.5 -3.5 s 1.566406 -3.5 3.5 -3.5 z m 0 0"/>
        <path d="m 8.023438 6.949219 c -0.238282 0.304687 -0.679688 0.355469 -0.980469 0.117187 c -0.304688 -0.242187 -0.355469 -0.679687 -0.117188 -0.984375 c 0.242188 -0.304687 2.359375 -1.855469 2.359375 -1.855469 s -1.019531 2.421876 -1.261718 2.722657 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScalessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScalessymbolic;
