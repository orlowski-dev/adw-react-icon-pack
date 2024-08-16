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
        <path d="m 9 2 v 5 h 4 v -1 z m -4 2 v 1 h 3 v -1 z m 0 2 v 1 h 3 v -1 z m 0 2 v 1 h 6 v -1 z m 0 2 v 1 h 6 v -1 z m 0 2 v 1 h 6 v -1 z m 0 0"/>
        <path d="m 2 13 c 0 1.660156 1.339844 3 3 3 h 6 c 1.660156 0 3 -1.339844 3 -3 v -6 c 0 -0.90625 -0.359375 -1.773438 -1 -2.414062 l -2.585938 -2.585938 c -0.640624 -0.640625 -1.507812 -1 -2.414062 -1 h -3 c -1.660156 0 -3 1.339844 -3 3 z m 3 -10 h 3 c 0.375 0 0.734375 0.148438 1 0.414062 l 2.585938 2.585938 c 0.265624 0.265625 0.414062 0.625 0.414062 1 v 6 c 0 0.546875 -0.453125 1 -1 1 h -6 c -0.546875 0 -1 -0.453125 -1 -1 v -9 c 0 -0.546875 0.453125 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDocumenttextsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDocumenttextsymbolic;
