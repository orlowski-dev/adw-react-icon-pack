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
      <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 3 v -2 h -3 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.570312 0.429688 -1 1 -1 h 10 c 0.570312 0 1 0.429688 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -1 v 2 h 1 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 z m 6 4 c -1.65625 0 -3 1.34375 -3 3 c 0 0.851562 0.363281 1.664062 1 2.234375 v 6.765625 l 2 -1.5 l 2 1.5 v -6.765625 c 0.636719 -0.570313 1 -1.382813 1 -2.234375 c 0 -1.65625 -1.34375 -3 -3 -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwApplicationcertificatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationcertificatesymbolic;
