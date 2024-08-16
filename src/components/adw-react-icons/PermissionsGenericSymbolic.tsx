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
        <path d="m 11.5 1 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 s 3.5 -1.578125 3.5 -3.5 s -1.578125 -3.5 -3.5 -3.5 z m 0 2 c 0.839844 0 1.5 0.660156 1.5 1.5 s -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0"/>
        <path d="m 4.5 8 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 1.386719 0 2.59375 -0.820312 3.15625 -2 h 5.84375 c 0.832031 0 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 h -5.84375 c -0.5625 -1.179688 -1.769531 -2 -3.15625 -2 z m 0 2 c 0.839844 0 1.5 0.660156 1.5 1.5 s -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0"/>
        <path d="m 2.5 3 c -0.832031 0 -1.5 0.667969 -1.5 1.5 s 0.667969 1.5 1.5 1.5 h 4.769531 c -0.175781 -0.480469 -0.265625 -0.988281 -0.269531 -1.5 c 0 -0.511719 0.09375 -1.019531 0.269531 -1.5 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwPermissionsGenericSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPermissionsGenericSymbolic;
