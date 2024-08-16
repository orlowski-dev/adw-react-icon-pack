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
      <path d="m 4.5 3 h 7 c 0.828125 0 1.5 0.671875 1.5 1.5 v 7 c 0 0.828125 -0.671875 1.5 -1.5 1.5 h -7 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 v -7 c 0 -0.828125 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStopSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStopSymbolic;
