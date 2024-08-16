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
      <path d="m 10.015625 2.015625 c -0.554687 0 -1 0.445313 -1 1 v 11 c 0 0.550781 0.445313 1 1 1 h 3 c 1.636719 0 2.984375 -1.347656 2.984375 -2.984375 v -2.042969 c 0 -1.636719 -1.347656 -2.988281 -2.984375 -2.988281 h -2 v -3.984375 c 0 -0.554687 -0.449219 -1 -1 -1 z m -8 3 c -0.554687 0 -1 0.445313 -1 1 c 0 0.550781 0.445313 1 1 1 h 2 c 0.558594 0 0.992187 0.425781 1 0.984375 h -1.402344 c -1.925781 -0.039062 -3.5429685 1.507812 -3.582031 3.433594 c -0.0039062 0.007812 -0.0039062 0.011718 0 0.019531 c 0 1.953125 1.605469 3.5625 3.558594 3.5625 h 2.425781 c 0.550781 0 0.996094 -0.449219 1 -1 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 9 3.984375 h 2 c 0.554687 0 0.984375 0.429688 0.984375 0.988281 v 2.042969 c 0 0.554688 -0.429688 0.984375 -0.984375 0.984375 h -2 z m -7.445313 1 h 0.019532 h 1.425781 v 3.015625 h -1.425781 c -0.867188 0 -1.550782 -0.683594 -1.554688 -1.550781 c 0.023438 -0.839844 0.691406 -1.480469 1.535156 -1.464844 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFontxgenericsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFontxgenericsymbolic;
