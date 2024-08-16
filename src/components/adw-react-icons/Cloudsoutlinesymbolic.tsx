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
      <path d="m -0.0078125 8 c 0 3.296875 2.6640625 5.964844 5.9570315 5.960938 l 5.550781 0.039062 c 2.492188 0 4.5 -2.007812 4.5 -4.5 s -2.007812 -4.5 -4.5 -4.5 c -0.417969 0 -0.828125 0.058594 -1.226562 0.171875 l 1.203124 0.585937 c -0.910156 -2.246093 -3.09375 -3.71875 -5.519531 -3.722656 c -3.300781 0 -5.9648435 2.667969 -5.9648435 5.964844 z m 9.6328125 -1.488281 c 0.191406 0.472656 0.710938 0.726562 1.203125 0.585937 c 0.21875 -0.066406 0.445313 -0.097656 0.671875 -0.097656 c 1.375 0 2.5 1.125 2.5 2.5 s -1.125 2.5 -2.492188 2.5 l -5.554687 -0.035156 c -2.183594 0 -3.960937 -1.78125 -3.960937 -3.964844 s 1.777343 -3.964844 3.960937 -3.960938 c 1.613281 0 3.066406 0.976563 3.671875 2.472657 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCloudsoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCloudsoutlinesymbolic;
