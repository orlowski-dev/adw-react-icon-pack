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
      <path d="m 8.261719 14 c 0.191406 -0.007812 0.371093 -0.035156 0.5625 -0.0625 c 1.523437 -0.21875 2.976562 -1.023438 3.96875 -2.34375 c 1.980469 -2.640625 1.421875 -6.425781 -1.21875 -8.40625 s -6.425781 -1.421875 -8.40625 1.21875 c -0.125 0.171875 -0.191407 0.382812 -0.1875 0.59375 c 0 0 -0.007813 1.007812 1 1 c 0.3125 0 0.625 -0.152344 0.8125 -0.40625 c 1.332031 -1.777344 3.816406 -2.113281 5.59375 -0.78125 c 1.777343 1.332031 2.113281 3.816406 0.78125 5.59375 s -3.816407 2.113281 -5.59375 0.78125 c -0.429688 -0.320312 -0.769531 -0.734375 -1.03125 -1.1875 h 1.4375 c 0.550781 0 1 -0.449219 1 -1 c 0 0 -0.007813 -0.992188 -1.007813 -1 h -4.992187 v 5 c -0.007813 1.007812 1 1 1 1 c 0.550781 0 1 -0.449219 1 -1 v -1.6875 c 0.382812 0.578125 0.847656 1.082031 1.40625 1.5 c 1.15625 0.867188 2.53125 1.253906 3.875 1.1875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowCircularSmallBottomLeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowCircularSmallBottomLeftSymbolic;
