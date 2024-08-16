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
        <path d="m 3.734375 5.476562 l -2.371094 -2.699218 h -0.363281 v 5.445312 h 0.34375 z m 1.265625 -3.476562 c -0.554688 0 -1 0.445312 -1 1 v 4.777344 c 0 -0.550782 0.449219 -1 1 -1 h 0.363281 c 0.289063 0 0.5625 0.125 0.75 0.339844 l 0.886719 1.007812 v -0.125 c 0 -1.089844 0.910156 -2 2 -2 h 2 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill-opacity="0.35"/>
        <path d="m 7.734375 10.476562 l -2.371094 -2.699218 h -0.363281 v 5.445312 h 0.34375 z m 6.265625 -3.476562 h -5 c -0.554688 0 -1 0.445312 -1 1 v 5 c 0 0.554688 0.445312 1 1 1 h 5 c 0.554688 0 1 -0.445312 1 -1 v -5 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCamerasSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCamerasSymbolic;
