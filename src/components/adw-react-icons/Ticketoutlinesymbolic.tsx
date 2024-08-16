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
        <path d="m -0.015625 4 v 2 c 0 0.550781 0.449219 1 1 1 c 0.546875 0 1 0.453125 1 1 s -0.453125 1 -1 1 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 1.660156 1.339844 3 3 3 h 10.011719 c 1.660156 0 3 -1.339844 3 -3 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 c -0.546875 0 -1 -0.453125 -1 -1 s 0.453125 -1 1 -1 c 0.550781 0 1 -0.449219 1 -1 v -2 c 0 -1.660156 -1.339844 -3 -3 -3 h -10.011719 c -1.660156 0 -3 1.339844 -3 3 z m 13.011719 -1 c 0.554687 0 1 0.445312 1 1 v 2 l 1 -1 c -1.664063 0 -3 1.339844 -3 3 s 1.335937 3 3 3 l -1 -1 v 2 c 0 0.554688 -0.445313 1 -1 1 h -10.011719 c -0.554687 0 -1 -0.445312 -1 -1 v -2 l -1 1 c 1.660156 0 3 -1.339844 3 -3 s -1.339844 -3 -3 -3 l 1 1 v -2 c 0 -0.554688 0.445313 -1 1 -1 z m 0 0"/>
        <path d="m 9 3 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 9 7 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 9 11 h 1 v 3 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTicketoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTicketoutlinesymbolic;
