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
      <path d="m 4 3 v 2 h 6 c 0.429688 0 1 0.613281 1 1 h 2 c 0 -1.632812 -1.320312 -3 -3 -3 z m -3 4 v 2 h 14 v -2 z m 2 3 c 0.007812 0.71875 0.269531 1.453125 0.78125 2.03125 s 1.308594 0.96875 2.21875 0.96875 h 7 v -3 h -2 v 1 h -5 c -0.398438 0 -0.566406 -0.109375 -0.71875 -0.28125 s -0.277344 -0.4375 -0.28125 -0.71875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormatTextStrikethroughSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormatTextStrikethroughSymbolic;
