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
        <path d="m 5.003906 0 c -1.09375 0 -2 0.910156 -2 2 v 9 c 0 1.089844 0.90625 2 2 2 h 9 c 1.089844 0 2 -0.910156 2 -2 v -9 c 0 -1.089844 -0.910156 -2 -2 -2 z m 8 2 v 2 h -2 v 5 c 0 1.105469 -0.898437 2 -2 2 c -1.105468 0 -2 -0.894531 -2 -2 s 0.894532 -2 2 -2 c 0.351563 0 0.695313 0.09375 1 0.269531 v -5.269531 z m 0 0"/>
        <path d="m 2.003906 3 c -1.09375 0 -1.99999975 0.910156 -1.99999975 2 v 9 c 0 1.089844 0.90624975 2 1.99999975 2 h 9 c 1.089844 0 2 -0.910156 2 -2 h -11 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLibraryMusicSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLibraryMusicSymbolic;
