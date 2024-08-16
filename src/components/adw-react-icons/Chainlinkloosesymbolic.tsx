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
        <path d="m 2.683594 9.777344 c -1.570313 -0.542969 -2.683594 -2.039063 -2.683594 -3.777344 c 0 -2.199219 1.800781 -4 4 -4 h 3 c 2.199219 0 4 1.800781 4 4 c 0 1.640625 -0.992188 3.070312 -2.421875 3.679688 l -0.785156 -1.839844 c 0.710937 -0.304688 1.207031 -1 1.207031 -1.839844 c 0 -1.125 -0.875 -2 -2 -2 h -3 c -1.125 0 -2 0.875 -2 2 c 0 0.890625 0.558594 1.621094 1.339844 1.890625 z m 0 0"/>
        <path d="m 8 14 c -2.199219 0 -4 -1.800781 -4 -4 c 0 -1.621094 0.96875 -3.03125 2.367188 -3.65625 l 0.816406 1.828125 c -0.699219 0.3125 -1.183594 1 -1.183594 1.828125 c 0 1.125 0.875 2 2 2 h 3 c 1.125 0 2 -0.875 2 -2 c 0 -0.867188 -0.53125 -1.582031 -1.277344 -1.867188 l 0.714844 -1.867187 c 1.503906 0.574219 2.5625 2.039063 2.5625 3.734375 c 0 2.199219 -1.800781 4 -4 4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwChainlinkloosesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChainlinkloosesymbolic;
