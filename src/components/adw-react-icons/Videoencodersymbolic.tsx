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
        <path d="m 3.003906 3 c -1.109375 0 -2 0.890625 -2 2 v 6 h 1 v -2 h 2 v -2 h 2 v 2 h -2 v 2 h 2 v 2 h 2 v -2 h 3 v -6 c 0 -1.109375 -0.894531 -2 -2 -2 z m 1 8 h -2 v 1.734375 c 0.292969 0.167969 0.632813 0.265625 1 0.265625 h 1 z m 0 0"/>
        <path d="m 14.003906 5 l -3 3 l 1 1 h 2 v 2 h 1 v -6 z m 0 0"/>
        <g fill-opacity="0.33">
            <path d="m 11.003906 8 l 3 -3 h 1 v 6 h -1 z m 0 0"/>
            <path d="m 3.003906 3 h 6 c 1.101563 0 2 0.894531 2 2 v 6 c 0 1.105469 -0.898437 2 -2 2 h -6 c -1.105468 0 -2 -0.894531 -2 -2 v -6 c 0 -1.105469 0.894532 -2 2 -2 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwVideoencodersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideoencodersymbolic;
