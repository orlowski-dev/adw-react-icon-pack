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
      <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 10 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -10 c 0 -1.660156 -1.339844 -3 -3 -3 z m 3 3 h 6 v 2 h -6 v 2 h 4 v 2 h -4 v 2 h 0.03125 h 5.96875 v 2 h -6 c -0.625 0 -0.992188 -0.242188 -1.34375 -0.5625 c -0.332031 -0.304688 -0.644531 -0.789062 -0.625 -1.4375 h -0.03125 v -6 h 0.03125 c -0.011719 -0.476562 0.109375 -1 0.46875 -1.40625 c 0.355469 -0.402344 0.933594 -0.582031 1.5 -0.5625 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkCellularEdgeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkCellularEdgeSymbolic;
