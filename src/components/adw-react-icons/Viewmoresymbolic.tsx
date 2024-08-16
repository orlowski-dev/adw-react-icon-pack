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
      <path d="m 7.996094 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 c 1.101562 0 2 -0.894531 2 -2 s -0.898438 -2 -2 -2 z m 0 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 c 1.101562 0 2 -0.894531 2 -2 s -0.898438 -2 -2 -2 z m 0 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 c 1.101562 0 2 -0.894531 2 -2 s -0.898438 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwViewmoresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewmoresymbolic;
