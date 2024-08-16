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
        <path d="m 3.027344 1.007812 c -1.652344 0 -3.011719 1.363282 -3.011719 3.015626 c 0 1.652343 1.359375 3.011718 3.011719 3.011718 h 9.960937 c 1.652344 0 3.011719 -1.359375 3.011719 -3.011718 c 0 -1.652344 -1.359375 -3.015626 -3.011719 -3.015626 z m 0 2 h 9.960937 c 0.578125 0 1.011719 0.4375 1.011719 1.015626 c 0 0.578124 -0.433594 1.011718 -1.011719 1.011718 h -9.960937 c -0.578125 0 -1.011719 -0.433594 -1.011719 -1.011718 c 0 -0.578126 0.433594 -1.015626 1.011719 -1.015626 z m 0 0"/>
        <path d="m 2.007812 9.007812 c 1.097657 0 2 0.902344 2 2 c 0 1.101563 -0.902343 2 -2 2 c -1.097656 0 -1.9999995 -0.898437 -1.9999995 -2 c 0 -1.097656 0.9023435 -2 1.9999995 -2 z m 0 1 c -0.558593 0 -1 0.441407 -1 1 c 0 0.558594 0.441407 1 1 1 c 0.558594 0 1 -0.441406 1 -1 c 0 -0.558593 -0.441406 -1 -1 -1 z m 0 0"/>
        <path d="m 7.007812 6.007812 v 2 c 0 1.117188 -0.882812 2 -2 2 h -1.5 v 2 h 1.5 c 1.191407 0 2.265626 -0.527343 3 -1.363281 c 0.734376 0.835938 1.808594 1.363281 3 1.363281 h 2 v -2 h -2 c -1.117187 0 -2 -0.882812 -2 -2 v -2 z m 0 0"/>
        <path d="m 7.007812 5.882812 v 6.5 h 2 v -6.5 z m 0 0"/>
        <path d="m 6.007812 13.882812 c 0 1.097657 0.902344 2 2 2 c 1.097657 0 2 -0.902343 2 -2 c 0 -1.097656 -0.902343 -2 -2 -2 c -1.097656 0 -2 0.902344 -2 2 z m 1 0 c 0 -0.558593 0.441407 -1 1 -1 c 0.558594 0 1 0.441407 1 1 c 0 0.558594 -0.441406 1 -1 1 c -0.558593 0 -1 -0.441406 -1 -1 z m 0 0"/>
        <path d="m 14.007812 9.007812 c 1.097657 0 2 0.902344 2 2 c 0 1.101563 -0.902343 2 -2 2 c -1.097656 0 -2 -0.898437 -2 -2 c 0 -1.097656 0.902344 -2 2 -2 z m 0 1 c -0.558593 0 -1 0.441407 -1 1 c 0 0.558594 0.441407 1 1 1 c 0.558594 0 1 -0.441406 1 -1 c 0 -0.558593 -0.441406 -1 -1 -1 z m 0 0"/>
        <path d="m 3 2 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkProxyServerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkProxyServerSymbolic;
