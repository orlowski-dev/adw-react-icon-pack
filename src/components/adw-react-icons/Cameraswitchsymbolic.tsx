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
      <path d="m 13.265625 10.476562 l 2.1875 -2.476562 h 0.546875 v 5.003906 h -0.535156 z m -6.265625 -3.476562 h 5 c 0.554688 0 1 0.445312 1 1 v 5 c 0 0.554688 -0.445312 1 -1 1 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -5 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="#2e3436"/>
    <path d="m 4 1.996094 c -0.554688 0 -1 0.445312 -1 1 v 5.007812 c 0 0.550782 0.445312 1 1 1 h 0.996094 v -1.003906 c 0 -1.050781 0.953125 -2.007812 2.003906 -2.003906 h 3 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 1.007812 v 5.003906 h 0.480469 l 2.253906 -2.585937 l -2.125 -2.417969 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwCameraswitchsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraswitchsymbolic;
