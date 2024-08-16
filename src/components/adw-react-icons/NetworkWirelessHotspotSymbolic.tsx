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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 4 c 0 1.644531 1.355469 3 3 3 h 1 v 1 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -1.644531 -1.355469 -3 -3 -3 h -1 v -1 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 6 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.570312 -0.429688 1 -1 1 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 1 c 1.644531 0 3 -1.355469 3 -3 v -1 h 1 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.570312 -0.429688 1 -1 1 h -6 c -0.570312 0 -1 -0.429688 -1 -1 v -4 c 0 -0.570312 0.429688 -1 1 -1 h 1 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -1 c -1.644531 0 -3 1.355469 -3 3 v 1 h -1 c -0.570312 0 -1 -0.429688 -1 -1 v -4 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkWirelessHotspotSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkWirelessHotspotSymbolic;
