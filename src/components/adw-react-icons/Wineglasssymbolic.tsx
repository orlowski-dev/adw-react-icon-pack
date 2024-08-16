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
        <path d="m 7 14 l -1 0.015625 c -0.476562 0 -1 0.382813 -1 0.984375 h 6 c 0 -0.472656 -0.460938 -1 -1 -1 z m 0 0"/>
        <path d="m 5.875 0 l -1.703125 5.230469 c -0.554687 1.707031 1.015625 3.914062 2.828125 4.550781 v 5.21875 h 2 v -5.21875 c 1.8125 -0.636719 3.382812 -2.84375 2.828125 -4.550781 l -1.703125 -5.230469 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWineglasssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWineglasssymbolic;
