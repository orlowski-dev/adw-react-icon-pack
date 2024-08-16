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
      <path d="m 5 1 c -1.378906 0 -2.5 1.121094 -2.5 2.5 c 0 1.382812 1.121094 2.5 2.5 2.5 c 1.382812 0 2.5 -1.117188 2.5 -2.5 c 0 -1.378906 -1.117188 -2.5 -2.5 -2.5 z m 6 3 c -1.378906 0 -2.5 1.121094 -2.5 2.5 c 0 1.382812 1.121094 2.5 2.5 2.5 c 1.382812 0 2.5 -1.117188 2.5 -2.5 c 0 -1.378906 -1.117188 -2.5 -2.5 -2.5 z m -8 3 c -1.660156 0 -3 1.339844 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 4.078125 c 0 -2.042969 1.582031 -3.734375 3.578125 -3.90625 c -0.589844 -0.535156 -0.980469 -1.257812 -1.109375 -2.042969 c -0.175781 -0.03125 -0.359375 -0.050781 -0.546875 -0.050781 z m 6 3 c -1.660156 0 -3 1.339844 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 8 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -1.660156 -1.335938 -3 -3 -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPeoplesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPeoplesymbolic;
