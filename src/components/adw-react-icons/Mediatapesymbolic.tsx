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
      <path d="m 3 2 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 6 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -6 c 0 -0.570312 0.429688 -1 1 -1 z m 2 2 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 h 6 c 1.097656 0 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 s -2 0.902344 -2 2 c 0 0.363281 0.101562 0.707031 0.273438 1 h -2.542969 c 0.167969 -0.292969 0.269531 -0.636719 0.269531 -1 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 6 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMediatapesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediatapesymbolic;
