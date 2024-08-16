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
        <path d="m 4.46875 1 c -0.820312 0 -1.46875 0.648438 -1.46875 1.46875 v 11.0625 c 0 0.820312 0.648438 1.46875 1.46875 1.46875 h 7.0625 c 0.820312 0 1.46875 -0.648438 1.46875 -1.46875 v -11.0625 c 0 -0.820312 -0.648438 -1.46875 -1.46875 -1.46875 z m -0.46875 1 h 8 v 5 h -8 z m 4 6 c 1.65625 0 3 1.34375 3 3 s -1.34375 3 -3 3 s -3 -1.34375 -3 -3 s 1.34375 -3 3 -3 z m 0 0"/>
        <path d="m 9.5 11 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwIpodSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIpodSymbolic;
