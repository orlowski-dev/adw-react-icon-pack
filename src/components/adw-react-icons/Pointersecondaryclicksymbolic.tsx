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
      <path d="m 11.539062 0.59375 c 0.203126 -0.007812 0.40625 0.023438 0.585938 0.097656 c 0.484375 0.199219 0.875 0.722656 0.875 1.308594 v 11 c 0 0.585938 -0.398438 1.105469 -0.882812 1.300781 c -0.480469 0.191407 -1.128907 0.085938 -1.53125 -0.339843 l -1.726563 -1.824219 l -1.515625 3.03125 c -0.371094 0.742187 -1.273438 1.042969 -2.011719 0.675781 c -0.742187 -0.371094 -1.042969 -1.273438 -0.675781 -2.011719 l 1.417969 -2.832031 h -2.074219 c -0.585938 0 -1.109375 -0.390625 -1.304688 -0.875 c -0.199218 -0.480469 -0.109374 -1.125 0.304688 -1.539062 l 7.585938 -7.585938 c 0.257812 -0.257812 0.609374 -0.390625 0.953124 -0.40625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPointersecondaryclicksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPointersecondaryclicksymbolic;
