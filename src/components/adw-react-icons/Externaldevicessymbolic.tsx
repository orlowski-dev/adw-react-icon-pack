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
        <path d="m 6 4 v 3.828125 c 0 2.070313 -1.339844 3.738281 -3 3.738281 s -3 -1.667968 -3 -3.738281 v -3.828125 z m 0 0"/>
        <path d="m 1 1 v 2 h 4 v -2 z m 0 0"/>
        <path d="m 9.578125 1.949219 c -0.320313 0 -0.582031 0.257812 -0.582031 0.578125 v 0.46875 h -1.539063 c -0.320312 0 -0.582031 0.261718 -0.582031 0.582031 v 4.839844 c 0 0.320312 0.261719 0.582031 0.582031 0.582031 h 6.960938 c 0.320312 0 0.582031 -0.261719 0.582031 -0.582031 v -4.839844 c 0 -0.320313 -0.261719 -0.582031 -0.582031 -0.582031 h -1.40625 v -0.46875 c 0 -0.320313 -0.261719 -0.578125 -0.582031 -0.578125 z m 1.414063 1.921875 c 1.195312 0 2.160156 0.96875 2.160156 2.160156 c 0 1.195312 -0.964844 2.160156 -2.160156 2.160156 c -1.191407 0 -2.160157 -0.964844 -2.160157 -2.160156 c 0 -1.191406 0.96875 -2.160156 2.160157 -2.160156 z m 0 1 c -0.640626 0 -1.160157 0.519531 -1.160157 1.160156 s 0.519531 1.160156 1.160157 1.160156 c 0.640624 0 1.160156 -0.519531 1.160156 -1.160156 s -0.519532 -1.160156 -1.160156 -1.160156 z m 0 0"/>
        <path d="m 2.96875 15 c 0.003906 1.007812 1 1 1 1 h 11 c 1 0 1 -1 1 -1 v -4 c 0 -1 -1 -1 -1 -1 h -8 c -0.554688 0 -1 0.445312 -1 1 v 3 h -2 s -0.996094 0.007812 -1 1 z m 4 0 v -4 h 3.03125 l -0.03125 4 z m 4 0 v -1 h 1 v -1 h -1 v -1 h 1 v -1 h 1 v 1 h 1 v -1 h 1 v 1 h -1 v 1 h 1 v 1 h -1 v 1 h -1 v -1 h -1 v 1 z m 2 -1 h 1 v -1 h -1 z m 0 -1 v -1 h -1 v 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwExternaldevicessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExternaldevicessymbolic;
