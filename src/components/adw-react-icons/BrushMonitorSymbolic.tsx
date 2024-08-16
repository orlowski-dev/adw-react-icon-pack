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
      <path d="m 13.398438 0 l -3.46875 3.457031 c 0.683593 0.355469 1.234374 0.910157 1.589843 1.589844 l 0.171875 -0.171875 l 0.007813 0.007812 l 4.300781 -4.300781 v -0.582031 z m -10.398438 1 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -0.570312 -0.167969 -1.101562 -0.449219 -1.558594 l -1.550781 1.554688 v 6.003906 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -6 c 0 -0.570312 0.429688 -1 1 -1 h 5.96875 l 2.007812 -2 z m 5 3 c -1.65625 0 -3 1.339844 -3 3 v 3 h 3 c 1.660156 0.007812 3 -1.34375 3 -3 c 0 -1.660156 -1.339844 -3 -3 -3 z m -3 10 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBrushMonitorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrushMonitorSymbolic;
