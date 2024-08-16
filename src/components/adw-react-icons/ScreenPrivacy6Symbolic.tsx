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
      <path d="m 3 1 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 4.980469 1 c -1.105469 0 -2 0.894531 -2 2 c 0 0.71875 0.390625 1.382812 1.019531 1.738281 v 2.261719 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -2.285156 c 0.605469 -0.359375 0.976562 -1.011719 0.980469 -1.714844 c 0 -1.105469 -0.898438 -2 -2 -2 z m -3.980469 11 s 1 1 4 1 s 4 -1 4 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScreenPrivacy6Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacy6Symbolic;
