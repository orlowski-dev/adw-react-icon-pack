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
        <path d="m 6 3 v 1.761719 l -2 1.488281 v 3.75 h 5.023438 v -3.75 l -2.023438 -1.511719 v -1.738281 z m 6 0 v 2 h 2 v 1 c 0 0.5625 -0.4375 1 -1 1 h -1 v 2 h 1 c 1.644531 0 3 -1.355469 3 -3 v -3 z m -5.484375 2.625 l 1.507813 1.125 v 2.25 h -3.023438 v -2.25 z m -5.589844 8.375 c -0.515625 0 -0.925781 0.410156 -0.925781 0.925781 v 0.148438 c 0 0.515625 0.410156 0.925781 0.925781 0.925781 h 12.148438 c 0.511719 0 0.925781 -0.410156 0.925781 -0.925781 v -0.148438 c 0 -0.515625 -0.414062 -0.925781 -0.925781 -0.925781 z m 0 0"/>
        <path d="m 1 2 v 7.390625 c 0 1.980469 1.628906 3.609375 3.613281 3.609375 h 4.773438 c 1.984375 0 3.613281 -1.628906 3.613281 -3.609375 v -7.390625 z m 2 2 h 8 v 5.390625 c 0 0.90625 -0.703125 1.609375 -1.613281 1.609375 h -4.773438 c -0.910156 0 -1.613281 -0.703125 -1.613281 -1.609375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTeasymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTeasymbolic;
