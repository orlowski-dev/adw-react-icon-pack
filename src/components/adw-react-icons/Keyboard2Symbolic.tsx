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
      <path d="m 1.980469 2 c -0.554688 0 -1 0.445312 -1 1 v 11 c 0 0.554688 0.445312 1 1 1 h 13.003906 c 0.554687 0 1 -0.445312 1 -1 v -11 c 0 -0.554688 -0.445313 -1 -1 -1 z m 1.363281 2 h 1.65625 v 2 h -2 v -1.605469 c 0 -0.21875 0.152344 -0.394531 0.34375 -0.394531 z m 2.65625 0 h 2 v 2 h -2 z m 3 0 h 2 v 2 h -2 z m 3 0 h 1.65625 c 0.191406 0 0.34375 0.175781 0.34375 0.394531 v 1.605469 h -2 z m -8 3 h 2 v 2 h -2 z m 3 0 h 2 v 2 h -2 z m 3 0 h 2 v 2 h -2 z m -6.65625 4 h 10.3125 c 0.191406 0 0.34375 0.175781 0.34375 0.394531 v 1.210938 c 0 0.21875 -0.152344 0.394531 -0.34375 0.394531 h -10.3125 c -0.191406 0 -0.34375 -0.175781 -0.34375 -0.394531 v -1.210938 c 0 -0.21875 0.152344 -0.394531 0.34375 -0.394531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboard2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboard2Symbolic;
