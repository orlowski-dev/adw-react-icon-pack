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
      <path d="m 7 0 c -1.613281 0 -3.054688 0.773438 -3.96875 1.96875 l -1.5 -1.5 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -1.816406 -1.816406 c 0.183594 -0.519532 0.285156 -1.074219 0.285156 -1.652344 v -6 c 0 -2.753906 -2.246094 -5 -5 -5 z m 1 3 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.261719 -0.101562 0.496094 -0.261719 0.675781 l -1.738281 -1.738281 v -1.9375 c 0 -0.554688 0.445312 -1 1 -1 z m -6 2.058594 v 5.941406 c 0 2.753906 2.246094 5 5 5 h 2 c 1.105469 0 2.132812 -0.363281 2.960938 -0.980469 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMouseWirelessDisabledFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMouseWirelessDisabledFilledSymbolic;
