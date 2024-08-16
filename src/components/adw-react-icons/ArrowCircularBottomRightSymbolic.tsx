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
      <path d="m 16 7.40625 c -0.007812 -0.613281 -0.089844 -1.234375 -0.253906 -1.847656 c -0.878906 -3.273438 -3.855469 -5.558594 -7.246094 -5.558594 s -6.367188 2.285156 -7.242188 5.558594 c -0.878906 3.273437 0.558594 6.742187 3.492188 8.4375 c 0.480469 0.277344 1.089844 0.109375 1.367188 -0.367188 c 0.273437 -0.476562 0.109374 -1.089844 -0.367188 -1.367187 c -2.160156 -1.246094 -3.207031 -3.777344 -2.5625 -6.1875 c 0.644531 -2.40625 2.820312 -4.074219 5.3125 -4.074219 c 2.496094 0 4.667969 1.667969 5.3125 4.074219 c 0.644531 2.410156 -0.402344 4.941406 -2.5625 6.1875 c -0.085938 0.058593 -0.164062 0.125 -0.226562 0.203125 l -0.015626 -0.019532 l -0.007812 -0.007812 v -1.4375 c 0 -0.550781 -0.449219 -1 -1 -1 c 0 0 -1 0 -1 1 v 5 h 5 s 1 0.003906 1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 h -1.6875 l -0.011719 -0.015625 l -0.011719 -0.011719 c 2.179688 -1.277344 3.519532 -3.53125 3.691407 -5.953125 c 0.015625 -0.203125 0.019531 -0.40625 0.019531 -0.613281 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowCircularBottomRightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowCircularBottomRightSymbolic;
