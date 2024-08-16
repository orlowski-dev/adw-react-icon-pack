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
      <path d="m 2 0 s -0.457031 -0.015625 -0.949219 0.230469 c -0.488281 0.246093 -1.050781 0.9375 -1.050781 1.769531 v 3 h 2 v -3 h 3 v -2 z m 9 0 v 2 h 3 v 3 h 2 v -3 c 0 -0.832031 -0.5625 -1.523438 -1.050781 -1.769531 c -0.492188 -0.246094 -0.949219 -0.230469 -0.949219 -0.230469 z m -8 3 v 2 h 2 v -2 z m 2 2 v 2 h 2 v -2 z m 3 -2 v 5 h 5 v -5 z m 0 5 h -5 v 5 h 5 z m 1 -4 h 3 v 3 h -3 z m 1 1 v 1 h 1 v -1 z m -6 4 h 3 v 3 h -3 z m 5 0 v 3 h 1 v -1 h 1 v -1 h 1 v -1 z m 3 1 v 1 h 1 v -1 z m 0 1 h -1 v 1 h 1 z m 0 1 v 1 h 1 v -1 z m -1 0 h -1 v 1 h 1 z m -6 -2 v 1 h 1 v -1 z m -5 1 v 3 c 0 0.832031 0.5625 1.523438 1.050781 1.769531 c 0.492188 0.246094 0.949219 0.230469 0.949219 0.230469 h 3 v -2 h -3 v -3 z m 14 0 v 3 h -3 v 2 h 3 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwQrCodeScannerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwQrCodeScannerSymbolic;
