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
      <path d="m 6 1 c -0.554688 0 -1 0.445312 -1 1 v 1 h -2.8125 c -1.207031 0 -2.1875 0.800781 -2.1875 2 v 7.976562 c 0 1.199219 0.980469 2 2.1875 2 h 11.625 c 1.207031 0 2.1875 -1.019531 2.1875 -2.21875 v -7.539062 c 0 -1.199219 -0.980469 -2.21875 -2.1875 -2.21875 h -2.8125 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 1 h 4 v 1 h -4 z m -4 3 h 12 v 2 h -12 z m 0 3 h 4 c 0 1 1 1 1 1 h 2 s 1 0 1 -1 h 4 v 5 h -12 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMeetingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMeetingsymbolic;
