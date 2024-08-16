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
      <path d="m 13.980469 7.71875 c -0.007813 -0.191406 -0.035157 -0.371094 -0.0625 -0.5625 c -0.21875 -1.523438 -1.023438 -2.976562 -2.34375 -3.96875 c -2.640625 -1.980469 -6.425781 -1.421875 -8.40625 1.21875 s -1.421875 6.425781 1.21875 8.40625 c 0.171875 0.121094 0.382812 0.191406 0.59375 0.1875 c 0 0 1.007812 0.007812 1 -1 c 0 -0.3125 -0.15625 -0.625 -0.40625 -0.8125 c -1.777344 -1.332031 -2.113281 -3.816406 -0.78125 -5.59375 s 3.816406 -2.113281 5.59375 -0.78125 c 1.777343 1.332031 2.113281 3.816406 0.78125 5.59375 c -0.324219 0.429688 -0.734375 0.769531 -1.1875 1.03125 v -1.4375 c 0 -0.550781 -0.449219 -1 -1 -1 c 0 0 -0.992188 0.007812 -1 1.007812 v 4.992188 h 5 c 1.007812 0.007812 1 -1 1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 h -1.6875 c 0.578125 -0.382812 1.082031 -0.847656 1.5 -1.40625 c 0.867187 -1.15625 1.25 -2.53125 1.1875 -3.875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowCircularSmallBottomRightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowCircularSmallBottomRightSymbolic;
