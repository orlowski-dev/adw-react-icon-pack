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
        <path d="m 6 4.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 0 7.089844 c 0 0.847656 0.335938 1.660156 0.9375 2.261718 l 5.382812 5.382813 c 0.929688 0.933594 2.429688 0.933594 3.359376 0 l 4.964843 -4.964844 c 0.980469 -0.980469 0.980469 -2.558593 0 -3.539062 l -5.417969 -5.417969 c -0.519531 -0.519531 -1.226562 -0.8125 -1.960937 -0.8125 h -3.265625 c -2.214844 0 -4 1.785156 -4 4 z m 4 -5.089844 h 3.265625 c 0.207031 0 0.402344 0.082031 0.546875 0.226562 l 5.417969 5.417969 c 0.191406 0.191407 0.191406 0.519531 0 0.710938 l -4.964844 4.964843 c -0.144531 0.144532 -0.386719 0.144532 -0.53125 0 l -5.382813 -5.382812 c -0.226562 -0.226562 -0.351562 -0.53125 -0.351562 -0.847656 v -3.089844 c 0 -1.097656 0.902344 -2 2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTagoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTagoutlinesymbolic;
