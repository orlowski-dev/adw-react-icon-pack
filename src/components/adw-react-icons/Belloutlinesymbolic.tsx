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
      <path d="m 8 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 c 0 0.074219 0.007812 0.148438 0.015625 0.222656 c -2.089844 0.652344 -3.515625 2.585938 -3.515625 4.777344 v 4.5 h -0.5 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 11 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 h -0.503906 v -4.40625 c 0.003906 -0.03125 0.003906 -0.0625 0.003906 -0.09375 c 0 -2.191406 -1.425781 -4.125 -3.519531 -4.773438 c 0.015625 -0.078124 0.019531 -0.152343 0.019531 -0.226562 c 0 -0.828125 -0.667969 -1.5 -1.5 -1.5 z m 0 3.5 c 1.65625 0 3 1.34375 3 3 v 4.5 h -6 v -4.5 c 0 -1.65625 1.34375 -3 3 -3 z m -2 10.5 c 0 0.714844 0.382812 1.375 1 1.730469 c 0.617188 0.359375 1.382812 0.359375 2 0 c 0.617188 -0.355469 1 -1.015625 1 -1.730469 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBelloutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBelloutlinesymbolic;
