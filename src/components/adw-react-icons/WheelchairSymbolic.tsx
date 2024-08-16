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
        <path d="m 8 2 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 s 2 0.894531 2 2 z m 0 0"/>
        <path d="m 5.089844 1.011719 c -0.105469 -0.011719 -0.210938 -0.003907 -0.3125 0.015625 c -0.539063 0.113281 -0.886719 0.644531 -0.777344 1.183594 l 0.101562 0.472656 c 0.007813 0.054687 0.023438 0.105468 0.046876 0.15625 l 2.898437 7.527344 c 0.148437 0.386718 0.519531 0.640624 0.933594 0.640624 h 3.304687 l 1.257813 3.351563 c 0.148437 0.390625 0.519531 0.648437 0.9375 0.648437 h 1.5 c 0.550781 0 1 -0.449218 1 -1 c 0 -0.554687 -0.449219 -1 -1 -1 h -0.808594 l -1.257813 -3.351562 c -0.144531 -0.390625 -0.515624 -0.648438 -0.933593 -0.648438 h -3.316407 l -2.625 -6.8125 l -0.078124 -0.390624 c -0.089844 -0.425782 -0.441407 -0.746094 -0.871094 -0.792969 z m -0.972656 4.53125 c -1.851563 0.890625 -3.136719 2.78125 -3.136719 4.964843 c 0 3.023438 2.472656 5.5 5.5 5.5 c 1.953125 0 3.671875 -1.03125 4.648437 -2.574218 l -0.535156 -1.429688 h -0.945312 c -0.558594 1.1875 -1.761719 2.003906 -3.167969 2.003906 c -1.945313 0 -3.5 -1.554687 -3.5 -3.5 c 0 -1.351562 0.746093 -2.511718 1.855469 -3.097656 z m 0 0"/>
        <path d="m 7 6 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWheelchairSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWheelchairSymbolic;
