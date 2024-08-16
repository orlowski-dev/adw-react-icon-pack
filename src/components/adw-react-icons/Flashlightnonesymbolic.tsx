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
        <path d="m 4.945312 0 c -0.945312 0 -0.945312 1 -0.945312 1 h 8 s 0 -1 -1 -1 z m -0.945312 2 c 0 1.429688 0.761719 2.75 2 3.464844 v 1.472656 l 1 1 v -0.4375 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 1 c 0 0.390625 -0.222656 0.726562 -0.546875 0.890625 l 1.546875 1.546875 l 0.003906 -5.476562 c 1.234375 -0.714844 1.996094 -2.03125 1.996094 -3.460938 z m 2 7.058594 v 5.941406 s -0.023438 1 2 1 c 1.921875 0 2 -1 2 -1 v -1.941406 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFlashlightnonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlashlightnonesymbolic;
