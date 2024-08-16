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
        <path d="m 2.5 1.988281 c -0.449219 0 -0.863281 0.128907 -1.226562 0.332031 l 10.667968 10.667969 h 1.558594 c 1.386719 0 2.5 -1.113281 2.5 -2.5 v -6 c 0.003906 -1.382812 -1.117188 -2.5 -2.5 -2.5 z m -2.253906 1.429688 c -0.152344 0.324219 -0.246094 0.6875 -0.246094 1.070312 v 6 c 0 1.1875 1.402344 2.5 2.5 2.5 h 1.5 v 3 l 3.125 -3 h 2.691406 z m 0 0"/>
        <path d="m 1.53125 0.457031 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwChatNoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChatNoneSymbolic;
