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
      <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 10 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -10 c 0 -1.660156 -1.339844 -3 -3 -3 z m -1 3 h 2 v 4 h 1 v -4 h 2 v 10 h -2 v -4 h -1 c -1 0 -2 -0.839844 -2 -2 z m 8 0 h 2 c 0.832031 0 1.523438 0.5625 1.769531 1.050781 c 0.246094 0.492188 0.230469 0.949219 0.230469 0.949219 v 1 h -2 v -1 h -2 v 6 h 2 v -2 h -1 v -2 h 3 v 4 s 0.015625 0.457031 -0.230469 0.949219 c -0.246093 0.488281 -0.9375 1.050781 -1.769531 1.050781 h -2 s -0.457031 0.015625 -0.949219 -0.230469 c -0.488281 -0.246093 -1.050781 -0.9375 -1.050781 -1.769531 v -6 s -0.015625 -0.457031 0.230469 -0.949219 c 0.246093 -0.488281 0.9375 -1.050781 1.769531 -1.050781 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkCellular4gSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkCellular4gSymbolic;
