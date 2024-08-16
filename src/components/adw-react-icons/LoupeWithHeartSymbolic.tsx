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
        <path d="m 10.875 10.0625 c -0.8125 0.148438 -1.105469 1.160156 -0.5 1.71875 l 3 3 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 l -3 -3 c -0.234375 -0.238281 -0.574219 -0.347656 -0.90625 -0.28125 z m 0 0"/>
        <path d="m 6.570312 0.0625 c -3.578124 0 -6.4999995 2.921875 -6.4999995 6.5 s 2.9218755 6.5 6.4999995 6.5 c 3.578126 0 6.5 -2.921875 6.5 -6.5 s -2.921874 -6.5 -6.5 -6.5 z m 0 2 c 2.5 0 4.5 2.003906 4.5 4.5 c 0 2.5 -2 4.5 -4.5 4.5 c -2.496093 0 -4.5 -2 -4.5 -4.5 c 0 -2.496094 2.003907 -4.5 4.5 -4.5 z m 0 0"/>
        <path d="m 4.75 4 c -0.460938 0 -0.917969 0.183594 -1.242188 0.507812 c -0.328124 0.324219 -0.515624 0.78125 -0.507812 1.242188 c 0.007812 0.472656 0.222656 0.933594 0.578125 1.246094 l 2.921875 2.542968 l 3 -2.65625 c 0.304688 -0.292968 0.488281 -0.710937 0.5 -1.132812 c 0.015625 -0.460938 -0.171875 -0.921875 -0.5 -1.246094 c -0.328125 -0.324218 -0.789062 -0.507812 -1.25 -0.503906 c -0.386719 0.003906 -0.769531 0.136719 -1.074219 0.371094 c -0.304687 0.238281 -0.53125 0.574218 -0.628906 0.945312 l -0.046875 0.078125 l -0.039062 -0.078125 c -0.101563 -0.371094 -0.328126 -0.710937 -0.632813 -0.945312 c -0.304687 -0.238282 -0.691406 -0.371094 -1.078125 -0.371094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLoupeWithHeartSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLoupeWithHeartSymbolic;
