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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -0.53125 -0.53125 v -11.9375 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.554688 0 -1 0.445312 -1 1 v 8.9375 l -1 -1 v -4.9375 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.554688 0 -1 0.445312 -1 1 v 1.9375 z m 2.730469 6.855469 c -0.160157 0.179687 -0.261719 0.414062 -0.261719 0.675781 v 6 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3.9375 z m -3.261719 2.675781 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 7 1.0625 v 2.9375 c 0 0.554688 0.445312 1 1 1 h 1 c 0.535156 0 0.964844 -0.414062 0.996094 -0.941406 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNetworkCellularDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkCellularDisabledSymbolic;
