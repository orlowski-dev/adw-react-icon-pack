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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 0.53125 -0.53125 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.554688 0 -1 0.445312 -1 1 v 0.9375 l -1 -1 v -2.9375 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.535156 0 -0.964844 0.414062 -0.996094 0.941406 l -1.003906 -1.003906 v -1.9375 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.261719 0 -0.496094 0.101562 -0.671875 0.261719 l -1.328125 -1.324219 v -0.9375 c 0 -0.554688 -0.445312 -1 -1 -1 h -0.9375 z m -0.53125 3.59375 v 9.9375 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -6.9375 z m 4 4 v 5.9375 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -2.9375 z m 4 4 v 1.9375 c 0 0.554688 0.445312 1 1 1 h 1 c 0.261719 0 0.496094 -0.101562 0.671875 -0.261719 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkCellularDisabledRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkCellularDisabledRtlSymbolic;
