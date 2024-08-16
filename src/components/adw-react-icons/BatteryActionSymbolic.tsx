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
      <g fill="#ed333b">
        <path d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.445312 c 0.371093 0.742188 1.3125 1.554688 2.644531 1.554688 h 6 s 0.710938 0.015625 1.449219 -0.355469 c 0.738281 -0.371093 1.550781 -1.3125 1.550781 -2.644531 v -8 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.367188 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 4 4 c 0.554688 0 1 0.445312 1 1 v 8 c 0 0.554688 -0.445312 1 -1 1 h -6 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 5.898438 5.886719 c -0.269532 0 -0.523438 0.105469 -0.710938 0.292969 c -0.386719 0.390624 -0.386719 1.023437 0 1.410156 l 1.40625 1.40625 l -1.414062 1.414062 c -0.386719 0.390625 -0.386719 1.019532 0 1.410156 c 0.390624 0.386719 1.019531 0.386719 1.410156 0 l 1.414062 -1.414062 l 1.410156 1.414062 c 0.191407 0.1875 0.445313 0.292969 0.710938 0.292969 s 0.519531 -0.105469 0.710938 -0.292969 c 0.386718 -0.390624 0.386718 -1.019531 0 -1.410156 l -1.414063 -1.414062 l 1.40625 -1.40625 c 0.386719 -0.386719 0.386719 -1.019532 0 -1.410156 c -0.191406 -0.1875 -0.445313 -0.292969 -0.710937 -0.292969 c -0.265626 0 -0.519532 0.105469 -0.707032 0.292969 l -1.402344 1.402343 l -1.40625 -1.402343 c -0.183593 -0.1875 -0.441406 -0.292969 -0.703124 -0.292969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBatteryActionSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryActionSymbolic;
