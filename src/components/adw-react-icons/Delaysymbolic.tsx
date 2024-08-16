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
        <path d="m 8.003906 5 c -0.554687 0 -1 0.449219 -1 1 v 3 c 0 0.554688 0.445313 1 1 1 h 2 c 0.550782 0 1 -0.445312 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -1 v -2 c 0 -0.550781 -0.449218 -1 -1 -1 z m 0 0"/>
        <path d="m 8 0 c -4.140625 0 -7.609375 3.179688 -7.96875 7.300781 c -0.359375 4.125 2.503906 7.859375 6.578125 8.578125 c 4.078125 0.71875 8.046875 -1.808594 9.117187 -5.808594 l -1.933593 -0.519531 c -0.804688 3.015625 -3.761719 4.898438 -6.835938 4.355469 c -3.070312 -0.539062 -5.207031 -3.320312 -4.933593 -6.429688 c 0.273437 -3.109374 2.855468 -5.476562 5.976562 -5.476562 z m 0 0"/>
        <path d="m 10.070312 0.273438 l -0.519531 1.933593 c 1.019531 0.269531 1.945313 0.804688 2.691407 1.550781 l 1.414062 -1.414062 c -0.992188 -0.992188 -2.230469 -1.707031 -3.585938 -2.070312 z m 0 0"/>
        <path d="m 14.925781 4 l -1.730469 1 c 0.527344 0.914062 0.804688 1.945312 0.804688 3 h 2 c 0 -1.402344 -0.371094 -2.785156 -1.074219 -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelaysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelaysymbolic;
