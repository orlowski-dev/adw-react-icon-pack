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
        <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 2 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 h 2 c 0 -3.324219 2.675781 -6 6 -6 z m 0 0"/>
        <path d="m 10.070312 0.273438 l -0.519531 1.933593 c 1.019531 0.269531 1.945313 0.804688 2.691407 1.550781 l 1.414062 -1.414062 c -0.992188 -0.992188 -2.230469 -1.707031 -3.585938 -2.070312 z m 0 0"/>
        <path d="m 14.925781 4 l -1.730469 1 c 0.527344 0.914062 0.804688 1.945312 0.804688 3 h 2 c 0 -1.402344 -0.371094 -2.785156 -1.074219 -4 z m 0 0"/>
        <path d="m 13.792969 9.550781 c -0.269531 1.019531 -0.804688 1.945313 -1.550781 2.691407 l 1.414062 1.414062 c 0.992188 -0.992188 1.707031 -2.230469 2.070312 -3.585938 z m 0 0"/>
        <path d="m 11 13.195312 c -0.453125 0.261719 -0.941406 0.464844 -1.449219 0.597657 l 0.519531 1.933593 c 0.675782 -0.179687 1.324219 -0.449218 1.929688 -0.800781 z m 0 0"/>
        <path d="m 6.445312 13.792969 l -0.515624 1.933593 c 0.675781 0.179688 1.371093 0.273438 2.070312 0.273438 v -2 c -0.523438 0 -1.046875 -0.070312 -1.554688 -0.207031 z m 0 0"/>
        <path d="m 2.203125 9.550781 l -1.929687 0.519531 c 0.179687 0.675782 0.449218 1.324219 0.796874 1.929688 l 1.734376 -1 c -0.261719 -0.453125 -0.464844 -0.941406 -0.601563 -1.449219 z m 0 0"/>
        <path d="m 3.757812 12.242188 l -1.414062 1.414062 c 0.496094 0.496094 1.050781 0.921875 1.65625 1.269531 l 1 -1.730469 c -0.453125 -0.261718 -0.871094 -0.582031 -1.242188 -0.953124 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDelayextremesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDelayextremesymbolic;
