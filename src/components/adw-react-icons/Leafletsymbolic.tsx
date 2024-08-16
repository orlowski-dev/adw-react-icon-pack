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
        <path d="m 3 1.996094 c -1.089844 0 -2 0.910156 -2 2 v 7.976562 c 0 1.089844 0.910156 2 2 2 h 6 v -11.976562 z m 7 0 v 2 h 3 v 7.976562 h -3 v 2 h 3 c 0.96875 0 2 -0.925781 2 -2 v -7.976562 c 0 -1.089844 -0.910156 -2 -2 -2 z m -7 2 h 5 v 7.976562 h -5 z m 0 0"/>
        <path d="m 7.039062 5.648438 c -0.191406 -0.195313 -0.511718 -0.195313 -0.707031 0 l -2.351562 2.351562 l 2.351562 2.355469 c 0.195313 0.191406 0.515625 0.191406 0.707031 0 c 0.195313 -0.195313 0.195313 -0.511719 0 -0.707031 l -1.644531 -1.648438 l 1.644531 -1.644531 c 0.195313 -0.195313 0.195313 -0.511719 0 -0.707031 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLeafletsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLeafletsymbolic;
