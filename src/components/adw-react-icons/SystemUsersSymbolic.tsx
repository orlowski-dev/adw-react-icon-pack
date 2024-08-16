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
        <path d="m 13.5 6.5 c 0 1.378906 -1.121094 2.5 -2.5 2.5 c -1.382812 0 -2.5 -1.121094 -2.5 -2.5 c 0 -1.382812 1.117188 -2.5 2.5 -2.5 c 1.378906 0 2.5 1.117188 2.5 2.5 z m 0 0"/>
        <path d="m 7.5 3.5 c 0 1.378906 -1.121094 2.5 -2.5 2.5 s -2.5 -1.121094 -2.5 -2.5 s 1.121094 -2.5 2.5 -2.5 s 2.5 1.121094 2.5 2.5 z m 0 0"/>
        <path d="m 3 7 c -1.660156 0 -3 1.339844 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 4.074219 c 0 -2.042969 1.582031 -3.734375 3.582031 -3.90625 c -0.589844 -0.535156 -0.984375 -1.257812 -1.109375 -2.042969 c -0.175781 -0.03125 -0.359375 -0.050781 -0.546875 -0.050781 z m 6 3.925781 c -1.167969 0 -2.078125 0.90625 -2.078125 2.074219 h 2.078125 c 0.554688 0 1 -0.445312 1 -1 v -1.074219 z m 0 0"/>
        <path d="m 9 10 c -1.664062 0 -3 1.335938 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 8 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -1.664062 -1.339844 -3 -3 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSystemUsersSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemUsersSymbolic;
