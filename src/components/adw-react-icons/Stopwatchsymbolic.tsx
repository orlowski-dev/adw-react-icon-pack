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
        <path d="m 12.824219 2.78125 l -1.5 1.488281 c -1.074219 -0.785156 -2.394531 -1.257812 -3.824219 -1.257812 c -3.578125 0 -6.5 2.921875 -6.5 6.5 s 2.921875 6.5 6.5 6.5 s 6.5 -2.921875 6.5 -6.5 c 0 -1.429688 -0.472656 -2.75 -1.261719 -3.824219 l 1.496094 -1.488281 z m -5.324219 2.230469 c 2.496094 0 4.5 2.003906 4.5 4.5 c 0 2.496093 -2.003906 4.5 -4.5 4.5 s -4.5 -2.003907 -4.5 -4.5 c 0 -2.496094 2.003906 -4.5 4.5 -4.5 z m 0 0"/>
        <path d="m 4.878906 0.00390625 c -0.359375 -0.00390625 -0.695312 0.18359375 -0.875 0.49609375 c -0.183594 0.3125 -0.183594 0.699219 0 1.007812 c 0.179688 0.3125 0.515625 0.503907 0.875 0.496094 h 5.242188 c 0.359375 0.007813 0.695312 -0.183594 0.875 -0.496094 c 0.183594 -0.308593 0.183594 -0.695312 0 -1.007812 c -0.179688 -0.3125 -0.515625 -0.5 -0.875 -0.49609375 z m 0 0"/>
        <path d="m 7 10 h 1 v -4 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStopwatchsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStopwatchsymbolic;
