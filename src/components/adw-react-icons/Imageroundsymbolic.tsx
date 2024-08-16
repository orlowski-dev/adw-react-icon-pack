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
        <path d="m 5.972656 5.023438 c -0.550781 0 -1 0.449218 -1 1 c 0 0.554687 0.449219 1 1 1 c 0.550782 0 1 -0.445313 1 -1 c 0 -0.550782 -0.449218 -1 -1 -1 z m 3.164063 2.175781 l -1.75 2.4375 c -0.101563 0.144531 -0.261719 0.234375 -0.4375 0.246093 c -0.175781 0.015626 -0.347657 -0.050781 -0.472657 -0.175781 l -0.410156 -0.417969 c -0.183594 -0.191406 -0.445312 -0.285156 -0.707031 -0.261718 c -0.261719 0.027344 -0.5 0.167968 -0.644531 0.386718 l -0.742188 1.109376 v 1 c 0 0.5 0.5 0.5 0.5 0.5 h 7 s 0.472656 -0.03125 0.5 -0.5 v -2.148438 c 0 -0.242188 -0.082031 -0.476562 -0.238281 -0.664062 l -1.277344 -1.554688 c -0.164062 -0.199219 -0.410156 -0.308594 -0.667969 -0.300781 c -0.261718 0.007812 -0.5 0.136719 -0.652343 0.34375 z m 0 0"/>
        <path d="m 3.972656 1.023438 c -1.644531 0 -3 1.355468 -3 3 v 8 c 0 1.648437 1.355469 3 3 3 h 8 c 1.644532 0 3 -1.351563 3 -3 v -8 c 0 -1.644532 -1.355468 -3 -3 -3 z m 0 2 h 8 c 0.570313 0 1 0.429687 1 1 v 8 c 0 0.574218 -0.429687 1 -1 1 h -8 c -0.570312 0 -1 -0.425782 -1 -1 v -8 c 0 -0.570313 0.429688 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwImageroundsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImageroundsymbolic;
