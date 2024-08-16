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
      <path d="m 0 2 v 4 h 1 v 7 h 11 v 1 h 4 v -4 h -1 v -4.269531 c 0.597656 -0.347657 1 -0.996094 1 -1.730469 c 0 -1.097656 -0.902344 -2 -2 -2 c -0.734375 0 -1.382812 0.402344 -1.730469 1 h -8.269531 v -1 z m 1 1 h 2 v 2 h -2 z m 13 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m -10 2 h 8.269531 c 0.175781 0.300781 0.429688 0.554688 0.730469 0.730469 v 4.269531 h -1 v 1 h -9 v -5 h 1 z m 9 6 h 2 v 2 h -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawRectangleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawRectangleSymbolic;
