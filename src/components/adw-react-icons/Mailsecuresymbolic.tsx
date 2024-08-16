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
      <path d="m 2.1875 2 c -1.207031 0 -2.1875 0.800781 -2.1875 2 v 7.976562 c 0 1.199219 0.980469 2 2.1875 2 h 6.8125 v -1.976562 h -7 v -7.375 l 6.007812 4.503906 l 5.992188 -4.707031 v 3.578125 h 2 v -3.78125 c 0 -1.199219 -0.980469 -2.21875 -2.1875 -2.21875 z m 0.644531 2 h 10.085938 l -4.925781 3.867188 z m 10.167969 5 c -1.109375 0 -2 0.890625 -2 2 v 1 h -1 v 3.976562 h 6 v -3.976562 h -1 v -1 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 1 c 0.554688 0 1 0.445312 1 1 v 1 h -2 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMailsecuresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailsecuresymbolic;
