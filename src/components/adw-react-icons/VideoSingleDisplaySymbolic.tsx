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
      <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 4 1 c 0 1.105469 -0.894531 2 -2 2 v 1 h 2 v 4 h 2 v -7 z m -2 11 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwVideoSingleDisplaySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideoSingleDisplaySymbolic;
