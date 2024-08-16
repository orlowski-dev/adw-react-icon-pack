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
        <path d="m 6 1 c -0.996094 0 -2 0.820312 -2 2 h 9 c 0.554688 0 1 0.445312 1 1 v 5 c 0 0.554688 -0.445312 1 -1 1 h -2.035156 v 2 h 2.035156 c 1.660156 0 3 -1.339844 3 -3 v -5 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 11 12.984375 h 0.972656 c 0.550782 0 1 0.445313 1 1 v 1.015625 h -1.972656 z m 0 0"/>
        <path d="m 3 5 c -1.660156 0 -3 1.339844 -3 3 h 2 c 0 -0.546875 0.453125 -1 1 -1 h 4 c 0.546875 0 1 0.453125 1 1 v 4 h -2 v 3 h 2 c 1.105469 0 2 -0.894531 2 -2 v -5 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 0 10 h 1.375 l 1.125 1.09375 l 1.09375 -1.09375 h 1.40625 v 1.46875 l -1.09375 1.0625 l 1.09375 1.0625 v 1.40625 h -1.4375 l -1.0625 -1.0625 l -1.0625 1.0625 h -1.4375 v -1.40625 l 1.0625 -1.0625 l -1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwExternaldisplaynointernalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExternaldisplaynointernalsymbolic;
