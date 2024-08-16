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
      <path d="m 13.5 1.988281 c 1.382812 0 2.503906 1.117188 2.5 2.5 v 6 c 0 1.386719 -1.113281 2.5 -2.5 2.5 h -6.375 l -3.125 3 v -3 h -1.5 c -1.5 0 -2.5 -1.3125 -2.5 -2.5 v -6 c 0 -1.382812 1.117188 -2.5 2.5 -2.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwChatSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChatSymbolic;
