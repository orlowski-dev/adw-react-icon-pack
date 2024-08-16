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
      <path d="m 3.03125 1 c -1.667969 0 -3.03125 1.363281 -3.03125 3.03125 v 7.9375 c 0 1.667969 1.363281 3.03125 3.03125 3.03125 h 8.9375 c 1.667969 0 3.03125 -1.363281 3.03125 -3.03125 v -7.9375 c 0 -1.667969 -1.363281 -3.03125 -3.03125 -3.03125 z m 0 2 h 8.9375 c 0.597656 0 1.03125 0.433594 1.03125 1.03125 v 5.96875 h -11 v -5.96875 c 0 -0.597656 0.4375 -1.03125 1.03125 -1.03125 z m -1.03125 8 h 5 v 2 h -3.96875 c -0.59375 0 -1.03125 -0.433594 -1.03125 -1.03125 z m 6 0 h 5 v 0.96875 c 0 0.597656 -0.433594 1.03125 -1.03125 1.03125 h -3.96875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwInputTouchpadSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInputTouchpadSymbolic;
