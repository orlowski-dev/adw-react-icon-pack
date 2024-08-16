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
      <path d="m 3.984375 1 c -1.652344 0 -2.984375 1.332031 -2.984375 2.984375 v 8.03125 c 0 1.652344 1.332031 2.984375 2.984375 2.984375 h 8.03125 c 1.652344 0 2.984375 -1.332031 2.984375 -2.984375 v -8.03125 c 0 -1.652344 -1.332031 -2.984375 -2.984375 -2.984375 z m 0.515625 2 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 3.398438 3.429688 c 0.832031 0 1.5 0.671874 1.5 1.5 c 0 0.828124 -0.667969 1.5 -1.5 1.5 c -0.828126 0 -1.5 -0.671876 -1.5 -1.5 c 0 -0.828126 0.671874 -1.5 1.5 -1.5 z m 3.601562 3.570312 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDiceSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDiceSymbolic;
