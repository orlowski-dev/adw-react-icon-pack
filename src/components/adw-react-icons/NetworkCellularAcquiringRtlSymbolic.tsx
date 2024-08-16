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
      <path d="m 3 1 c 0.554688 0 1 0.445312 1 1 v 3 h -1 c -0.769531 0 -1.46875 0.289062 -2 0.765625 v -3.765625 c 0 -0.554688 0.445312 -1 1 -1 z m 4 3 c 0.554688 0 1 0.445312 1 1 h -3 c 0 -0.554688 0.445312 -1 1 -1 z m 8.210938 6.023438 c 0.453124 0.097656 0.789062 0.496093 0.789062 0.976562 v 3 c 0 0.554688 -0.445312 1 -1 1 h -1 c -0.554688 0 -1 -0.445312 -1 -1 v -3 c 0.878906 0 1.664062 -0.378906 2.210938 -0.976562 z m -14.210938 0.210937 c 0.53125 0.476563 1.230469 0.765625 2 0.765625 h 1 v 3 c 0 0.554688 -0.445312 1 -1 1 h -1 c -0.554688 0 -1 -0.445312 -1 -1 z m 11 0.765625 v 3 c 0 0.554688 -0.445312 1 -1 1 h -1 c -0.554688 0 -1 -0.445312 -1 -1 v -3 z m -4 0 v 3 c 0 0.554688 -0.445312 1 -1 1 h -1 c -0.554688 0 -1 -0.445312 -1 -1 v -3 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 3 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkCellularAcquiringRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkCellularAcquiringRtlSymbolic;
