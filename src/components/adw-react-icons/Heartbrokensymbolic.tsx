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
      <path d="m 11.394531 1.964844 c -0.605469 -0.015625 -1.207031 0.113281 -1.753906 0.382812 l 0.859375 3.152344 l -2.5 2.5 v 3 l -2.5 -3.5 l 2.5 -2.5 l -1.554688 -2.59375 c -1.683593 -0.847656 -3.726562 -0.316406 -4.789062 1.238281 c -1.058594 1.554688 -0.800781 3.652344 0.601562 4.90625 l 5.742188 5.117188 l 5.746094 -5.117188 c 1.167968 -1.011719 1.597656 -2.640625 1.078125 -4.097656 s -1.882813 -2.445313 -3.429688 -2.488281 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHeartbrokensymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHeartbrokensymbolic;
