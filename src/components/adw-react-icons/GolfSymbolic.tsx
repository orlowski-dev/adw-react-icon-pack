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
      <path d="m 8 0 c -3.300781 0 -6 2.699219 -6 6 s 2.699219 6 6 6 s 6 -2.699219 6 -6 s -2.699219 -6 -6 -6 z m 0 2 c 2.222656 0 4 1.777344 4 4 s -1.777344 4 -4 4 s -4 -1.777344 -4 -4 s 1.777344 -4 4 -4 z m 0 0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m -2 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 4 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m -2 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m -2 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 4 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m -2 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m -3 6.5 c -0.554688 0 -1 0.445312 -1 1 h 1 c 2 0 2 2 2 2 h 2 s 0 -2 2 -2 h 1 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGolfSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGolfSymbolic;
