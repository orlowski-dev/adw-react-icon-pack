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
      <path d="m 4.945312 0 c -0.945312 0 -0.945312 1 -0.945312 1 h 8 s 0 -1 -1 -1 z m -0.945312 2 c 0 1.429688 0.761719 2.75 2 3.464844 v 9.535156 s -0.023438 1 2 1 c 1.921875 0 2 -1 2 -1 l 0.003906 -9.539062 c 1.234375 -0.714844 1.996094 -2.03125 1.996094 -3.460938 z m 4 4.5 c 0.554688 0 1 0.445312 1 1 v 1 c 0 0.554688 -0.445312 1 -1 1 s -1 -0.445312 -1 -1 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFlashlightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlashlightSymbolic;
