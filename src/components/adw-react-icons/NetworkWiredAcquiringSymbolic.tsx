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
        <path d="m 3 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0"/>
        <path d="m 6 0 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 10.824219 v 0.175781 h -1 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 h -2 c -0.351562 0 -0.6875 -0.0625 -1 -0.175781 z m 12 0 c -0.3125 0.113281 -0.648438 0.175781 -1 0.175781 h -2 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwNetworkWiredAcquiringSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkWiredAcquiringSymbolic;
