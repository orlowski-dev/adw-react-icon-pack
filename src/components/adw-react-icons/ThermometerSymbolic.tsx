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
        <path d="m 9 12 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 8 4 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 8 6 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 8 8 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 8 0 c -1.644531 0 -3 1.355469 -3 3 v 6.363281 c -0.621094 0.707031 -1 1.628907 -1 2.636719 c 0 2.199219 1.800781 4 4 4 s 4 -1.800781 4 -4 c 0 -1.007812 -0.378906 -1.929688 -1 -2.636719 v -6.363281 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 c 0.570312 0 1 0.429688 1 1 v 7.269531 c 0.617188 0.355469 1 1.015625 1 1.730469 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 c 0.003906 -0.710938 0.382812 -1.371094 1 -1.726562 v -7.273438 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwThermometerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwThermometerSymbolic;
