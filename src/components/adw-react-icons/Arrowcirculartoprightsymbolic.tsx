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
      <path d="m 7.40625 1 c -0.613281 0.007812 -1.234375 0.089844 -1.847656 0.253906 c -3.273438 0.878906 -5.558594 3.855469 -5.558594 7.246094 s 2.285156 6.367188 5.558594 7.242188 c 3.273437 0.878906 6.742187 -0.558594 8.4375 -3.492188 c 0.277344 -0.480469 0.109375 -1.089844 -0.367188 -1.367188 c -0.476562 -0.273437 -1.089844 -0.109374 -1.367187 0.367188 c -1.246094 2.160156 -3.777344 3.207031 -6.1875 2.5625 c -2.40625 -0.644531 -4.074219 -2.820312 -4.074219 -5.3125 c 0 -2.496094 1.667969 -4.667969 4.074219 -5.3125 c 2.410156 -0.644531 4.941406 0.402344 6.1875 2.5625 c 0.058593 0.085938 0.125 0.164062 0.203125 0.226562 l -0.019532 0.015626 l -0.007812 0.007812 h -1.4375 c -0.550781 0 -1 0.449219 -1 1 c 0 0 0 1 1 1 h 5 v -5 s 0.003906 -1 -1 -1 c -0.550781 0 -1 0.449219 -1 1 v 1.6875 l -0.015625 0.011719 l -0.011719 0.011719 c -1.277344 -2.179688 -3.53125 -3.519532 -5.953125 -3.691407 c -0.203125 -0.015625 -0.40625 -0.019531 -0.613281 -0.019531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowcirculartoprightsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowcirculartoprightsymbolic;
