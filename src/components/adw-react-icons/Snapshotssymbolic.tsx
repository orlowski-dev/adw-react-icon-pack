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
        <path d="m 3.472656 1 c -1.371094 0 -2.472656 1.101562 -2.472656 2.472656 v 3.054688 c 0 1.371094 1.101562 2.472656 2.472656 2.472656 h 4.054688 c 1.371094 0 2.472656 -1.101562 2.472656 -2.472656 v -3.054688 c 0 -1.371094 -1.101562 -2.472656 -2.472656 -2.472656 z m 0.125 2 h 3.804688 c 0.332031 0 0.597656 0.265625 0.597656 0.597656 v 2.804688 c 0 0.332031 -0.265625 0.597656 -0.597656 0.597656 h -3.804688 c -0.332031 0 -0.597656 -0.265625 -0.597656 -0.597656 v -2.804688 c 0 -0.332031 0.265625 -0.597656 0.597656 -0.597656 z m 0 0"/>
        <path d="m 3.398438 9 l -1.398438 2.019531 h 7 l -1.398438 -2.019531 z m 0 0"/>
        <path d="m 11.015625 5 v 1.527344 c 0 0.160156 -0.011719 0.320312 -0.03125 0.472656 h 1.40625 c 0.332031 0 0.597656 0.265625 0.597656 0.597656 v 2.804688 c 0 0.332031 -0.265625 0.597656 -0.597656 0.597656 h -2.285156 c 0.011719 0.617188 -0.484375 1.039062 -1.105469 1.039062 h -2.414062 c 0.453124 0.53125 1.121093 0.960938 1.875 0.960938 h -0.074219 l -1.398438 2.019531 h 7 l -1.402343 -2.019531 h -0.070313 c 1.371094 0 2.472656 -1.101562 2.472656 -2.472656 v -3.054688 c 0 -1.371094 -1.101562 -2.472656 -2.472656 -2.472656 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwSnapshotssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSnapshotssymbolic;
