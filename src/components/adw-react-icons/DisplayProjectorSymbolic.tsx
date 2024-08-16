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
      <path d="m 9.5 3 c -1.386719 0 -2.59375 0.820312 -3.15625 2 h -3.34375 c -1.644531 0 -3 1.355469 -3 3 v 3 c 0 1.644531 1.355469 3 3 3 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 h 6 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 c 1.644531 0 3 -1.355469 3 -3 v -3 c 0 -1.644531 -1.355469 -3 -3 -3 h -0.34375 c -0.5625 -1.179688 -1.769531 -2 -3.15625 -2 z m 0 2 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m -6.5 2 h 3.039062 c 0.242188 1.6875 1.710938 3 3.460938 3 s 3.21875 -1.3125 3.460938 -3 h 0.039062 c 0.570312 0 1 0.429688 1 1 v 3 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -3 c 0 -0.570312 0.429688 -1 1 -1 z m 1 1 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 s 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDisplayProjectorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDisplayProjectorSymbolic;
