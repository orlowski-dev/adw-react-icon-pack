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
        <path d="m 3.058594 9 c -1.105469 0 -2 -0.894531 -2 -2 v -1 h 13.960937 v 1 c 0 1.105469 -0.894531 2 -2 2 z m 0 0"/>
        <path d="m 4 7 v -4 c 0 -0.546875 0.453125 -1 1 -1 h 6 c 0.546875 0 1 0.453125 1 1 v 4 h 2 v -4 c 0 -1.660156 -1.339844 -3 -3 -3 h -6 c -1.660156 0 -3 1.339844 -3 3 v 4 z m 0 0"/>
        <path d="m 2 6 v 2.5 c 0 1.382812 1.117188 2.5 2.5 2.5 h 7.976562 c 0.5625 0 1.023438 0.460938 1.023438 1.015625 c -0.007812 0.550781 -0.464844 0.992187 -1.023438 0.984375 h -6.476562 v 1 h 6.46875 c 1.105469 0.015625 2.015625 -0.863281 2.03125 -1.976562 c 0 -1.121094 -0.902344 -2.023438 -2.023438 -2.023438 h -7.976562 c -0.824219 0 -1.5 -0.675781 -1.5 -1.5 v -2.5 z m 0 0"/>
        <path d="m 2.5 13 h 4 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 h -4 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDockusbsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDockusbsymbolic;
