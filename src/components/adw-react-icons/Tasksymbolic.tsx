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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 10 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 9.03125 7.082031 l -2.507812 2.433594 l -0.523438 -0.460937 c -0.308594 -0.273438 -0.785156 -0.242188 -1.058594 0.070312 c -0.273437 0.308594 -0.242187 0.785156 0.070313 1.058594 l 1.042969 0.917968 c 0.296874 0.257813 0.738281 0.246094 1.019531 -0.027343 l 3 -2.917969 c 0.296875 -0.289062 0.304687 -0.761719 0.015625 -1.058594 c -0.289063 -0.296875 -0.761719 -0.304687 -1.058594 -0.015625 z m 0 0"/>
        <path d="m 8 5.996094 l -3.015625 0.011718 c -1.089844 0.003907 -1.984375 0.902344 -1.984375 1.996094 v 3.019532 c 0 1.09375 0.894531 1.992187 1.984375 1.992187 h 2.988281 c 1.09375 0 1.988282 -0.898437 1.988282 -1.992187 v -0.464844 h -1 v 0.464844 c 0 0.554687 -0.4375 0.992187 -0.988282 0.992187 h -2.988281 c -0.550781 0 -0.984375 -0.4375 -0.984375 -0.992187 v -3.019532 c 0 -0.554687 0.433594 -0.992187 0.988281 -0.996094 l 3.011719 -0.011718 z m 0 0"/>
        <path d="m 2.996094 2.953125 h 6.023437 v 1.105469 h -6.023437 z m 0 0"/>
        <path d="m 9.960938 2.953125 h 3.003906 v 1.105469 h -3.003906 z m 0 0"/>
        <path d="m 9.960938 4.953125 h 3.003906 v 1.046875 h -3.003906 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTasksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTasksymbolic;
