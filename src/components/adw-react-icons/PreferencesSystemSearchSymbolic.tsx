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
        <path d="m 10.804688 10 c -0.8125 0.144531 -1.105469 1.15625 -0.5 1.71875 l 3 3 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 l -3 -3 c -0.238282 -0.242188 -0.578126 -0.347656 -0.90625 -0.28125 z m 0 0"/>
        <path d="m 6.5 0 c -3.578125 0 -6.5 2.921875 -6.5 6.5 s 2.921875 6.496094 6.5 6.496094 s 6.5 -2.917969 6.5 -6.496094 s -2.921875 -6.5 -6.5 -6.5 z m 0 2 c 2.496094 0 4.5 2.003906 4.5 4.5 s -2.003906 4.496094 -4.5 4.496094 s -4.5 -2 -4.5 -4.496094 s 2.003906 -4.5 4.5 -4.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPreferencesSystemSearchSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesSystemSearchSymbolic;
