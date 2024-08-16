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
        <path d="m 6 0.988281 c -1.109375 0 -2 0.890625 -2 2 v 1 c -1.667969 0.054688 -2.996094 1.410157 -2.996094 3.09375 v 4.769531 c 0 1.714844 1.378906 3.09375 3.09375 3.09375 h 7.835938 c 1.710937 0 3.089844 -1.378906 3.089844 -3.09375 v -4.769531 c 0 -1.699219 -1.351563 -3.066406 -3.042969 -3.09375 v -1 c 0 -1.109375 -0.890625 -2 -2 -2 z m 1.996094 4.023438 c 2.203125 0 3.992187 1.789062 3.992187 3.992187 c 0 2.207032 -1.785156 3.992188 -3.992187 3.996094 c -2.207032 0 -3.996094 -1.789062 -3.992188 -3.996094 c 0 -2.207031 1.785156 -3.992187 3.992188 -3.992187 z m 0 0"/>
        <path d="m 8.019531 7.015625 h 0.011719 c 1.105469 0 2 0.894531 2 2 v 0.011719 c 0 1.101562 -0.894531 2 -2 2 h -0.011719 c -1.101562 0 -2 -0.898438 -2 -2 v -0.011719 c 0 -1.105469 0.898438 -2 2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhotoCameraSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhotoCameraSymbolic;
