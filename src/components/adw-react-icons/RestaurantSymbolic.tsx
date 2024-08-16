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
        <path d="m 0.984375 -0.015625 c -0.550781 0.01171875 -0.9921875 0.464844 -0.984375 1.015625 v 4 s 0.0078125 0.84375 0.574219 1.597656 c 0.449219 0.597656 1.257812 1.121094 2.425781 1.316406 v 1.085938 c -0.554688 0 -1 0.449219 -1 1 v 5 c 0 0.550781 0.445312 1 1 1 h 2 c 0.550781 0 1 -0.449219 1 -1 v -5 c 0 -0.550781 -0.449219 -1 -1 -1 v -1.085938 c 1.167969 -0.195312 1.976562 -0.71875 2.425781 -1.316406 c 0.566407 -0.753906 0.574219 -1.597656 0.574219 -1.597656 v -4 c 0.003906 -0.359375 -0.183594 -0.695312 -0.496094 -0.878906 c -0.3125 -0.1796878 -0.695312 -0.1796878 -1.007812 0 c -0.3125 0.183594 -0.5 0.519531 -0.496094 0.878906 v 3.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -3.5 c 0.003906 -0.269531 -0.101562 -0.53125 -0.292969 -0.722656 c -0.191406 -0.1914065 -0.453125 -0.2968752 -0.722656 -0.292969 c -0.550781 0.01171875 -0.992187 0.464844 -0.984375 1.015625 v 3.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -3.5 c 0.003906 -0.269531 -0.101562 -0.53125 -0.292969 -0.722656 c -0.191406 -0.1914065 -0.453125 -0.2968752 -0.722656 -0.292969 z m 0 0"/>
        <path d="m 13.96875 0 c -0.253906 0.0078125 -0.496094 0.113281 -0.675781 0.292969 c -1.734375 1.734375 -2.503907 4.160156 -2.898438 6.136719 c -0.394531 1.976562 -0.394531 3.570312 -0.394531 3.570312 c 0 0.550781 0.445312 1 1 1 h 1 v 4 c 0 0.550781 0.445312 1 1 1 h 1 c 0.550781 0 1 -0.449219 1 -1 v -14 c 0 -0.5625 -0.464844 -1.015625 -1.03125 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRestaurantSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRestaurantSymbolic;
