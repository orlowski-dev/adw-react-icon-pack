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
      <path d="m 6 1 v 1.25 c -2.160156 0.554688 -3.925781 1.980469 -4.648438 3.859375 c -0.785156 0.273437 -1.351562 1.019531 -1.351562 1.890625 s 0.570312 1.621094 1.355469 1.894531 c 0.933593 2.429688 3.617187 4.105469 6.644531 4.105469 s 5.714844 -1.679688 6.648438 -4.109375 c 0.785156 -0.273437 1.351562 -1.019531 1.351562 -1.890625 s -0.566406 -1.617188 -1.351562 -1.890625 c -0.722657 -1.878906 -2.488282 -3.304687 -4.648438 -3.859375 v -1.25 z m 1 1 h 2 v 2 h -2 z m -1 2.335938 v 0.664062 h 4 v -0.664062 c 1.21875 0.429687 2.164062 1.230468 2.644531 2.195312 c -0.394531 0.367188 -0.644531 0.890625 -0.644531 1.46875 s 0.25 1.097656 0.644531 1.464844 c -0.71875 1.449218 -2.472656 2.535156 -4.644531 2.535156 s -3.925781 -1.085938 -4.644531 -2.53125 c 0.394531 -0.367188 0.644531 -0.890625 0.644531 -1.46875 s -0.25 -1.097656 -0.644531 -1.464844 c 0.480469 -0.964844 1.421875 -1.769531 2.644531 -2.199218 z m -4 2.664062 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 12 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawOval2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawOval2Symbolic;
