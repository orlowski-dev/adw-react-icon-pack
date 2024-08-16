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
      <path d="m 5 0 c -1.660156 0 -3 1.339844 -3 3 v 3 h -0.941406 v 1 c 0 1.105469 0.894531 2 2 2 h 9.960937 c 1.105469 0 2 -0.894531 2 -2 v -1 h -1.019531 v -3 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 6 c 0.546875 0 1 0.453125 1 1 v 3 h -8 v -3 c 0 -0.546875 0.453125 -1 1 -1 z m 2.5 8 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1.5 h -2 l 3 3 l 3 -3 h -2 v -1.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -6.5 4 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 6 l -2 -2 z m 10 0 l -2 2 h 6 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDockSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDockSymbolic;
