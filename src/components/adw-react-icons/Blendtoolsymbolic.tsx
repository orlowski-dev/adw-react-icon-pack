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
        <path d="m 6 11 h 1 v 1 h -1 z m 1 1 h 1 v 1 h -1 z m -1 -3 h 1 v 1 h -1 z m 1 1 h 1 v 1 h -1 z m -1 -3 h 1 v 1 h -1 z m 1 1 h 1 v 1 h -1 z m -1 -3 h 1 v 1 h -1 z m 1 1 h 1 v 1 h -1 z m -1 -3 h 1 v 1 h -1 z m 1 1 h 1 v 1 h -1 z m -4 -1 h 3 v 10 h -3 z m 0 0"/>
        <path d="m 8 3 h 1 v 10 h -1 z m 2 9 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m -1 7 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 -2 h 1 v 1 h -1 z m 0 0" fill-opacity="0.35"/>
        <path d="m 3.5 1 c -1.375 0 -2.5 1.125 -2.5 2.5 v 9 c 0 1.375 1.125 2.5 2.5 2.5 h 9 c 1.375 0 2.5 -1.125 2.5 -2.5 v -9 c 0 -1.375 -1.125 -2.5 -2.5 -2.5 z m 0 1 h 9 c 0.839844 0 1.5 0.660156 1.5 1.5 v 9 c 0 0.839844 -0.660156 1.5 -1.5 1.5 h -9 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 v -9 c 0 -0.839844 0.660156 -1.5 1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBlendtoolsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBlendtoolsymbolic;
