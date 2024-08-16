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
      <g fill="#2e3436">
        <path d="m 5 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -1.351562 2 -1.371094 2 0 v 1.96875 c 0 0.015625 -0.015625 0.03125 -0.03125 0.03125 h -4.9375 c -0.015625 0 -0.03125 0.015625 -0.03125 0.03125 v 5.9375 c 0 0.007812 0.003906 0.015625 0.007812 0.023438 c 0.007813 0.003906 0.015626 0.007812 0.023438 0.007812 h 2.9375 c 0.007812 0 0.015625 0.003906 0.023438 0.007812 c 0.003906 0.007813 0.007812 0.015626 0.007812 0.023438 v 1.441406 c 0 0.007813 0.003906 0.015625 0.007812 0.019532 c 0.007813 0.007812 0.015626 0.011718 0.023438 0.011718 h 1.9375 c 0.015625 0 0.03125 -0.015625 0.03125 -0.03125 v -1.441406 c 0 -0.015625 0.015625 -0.03125 0.03125 -0.03125 h 2.9375 c 0.015625 0 0.03125 -0.015625 0.03125 -0.03125 v -5.9375 c 0 -0.015625 -0.015625 -0.03125 -0.03125 -0.03125 h -0.9375 c -0.015625 0 -0.03125 -0.015625 -0.03125 -0.03125 v -1.96875 c 0 -4 -6 -4 -6 0 z m 0 0"/>
        <path d="m 7.996094 16.011719 c -0.703125 0 -1.351563 -0.371094 -1.714844 -0.972657 h -3.285156 c -0.550782 0 -1 -0.449218 -1 -1 c 0 -0.550781 0.449218 -1 1 -1 h 3.25 c 0.351562 -0.640624 1.019531 -1.035156 1.75 -1.039062 c 0.730468 0.003906 1.402344 0.398438 1.753906 1.039062 h 3.257812 c 0.554688 0 1 0.449219 1 1 c 0 0.550782 -0.445312 1 -1 1 h -3.292968 c -0.363282 0.601563 -1.015625 0.972657 -1.71875 0.972657 z m 0 -1 c 0.554687 0 1.007812 -0.449219 1.007812 -1.003907 c 0 -0.558593 -0.453125 -1.007812 -1.007812 -1.007812 c -0.554688 0 -1.003906 0.449219 -1.003906 1.007812 c 0 0.554688 0.449218 1.003907 1.003906 1.003907 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkVpnDisconnectedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkVpnDisconnectedSymbolic;
