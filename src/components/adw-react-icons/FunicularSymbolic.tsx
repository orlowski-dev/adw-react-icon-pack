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
        <path d="m 10.875 2.019531 l -4.082031 0.925781 c -2.15625 0.488282 -3.792969 2.265626 -3.792969 4.480469 v 3.484375 c 0 1.125 1.042969 2.007813 2.148438 1.824219 l 8.027343 -1.582031 c 1.046875 -0.175782 1.824219 -1.09375 1.824219 -2.152344 v -3.484375 c 0 -2.171875 -2.007812 -3.976563 -4.125 -3.496094 z m 0.332031 1.976563 c 0.945313 -0.214844 1.792969 0.546875 1.792969 1.519531 v 3.484375 c 0 0.09375 -0.054688 0.160156 -0.148438 0.175781 l -7.851562 1.554688 v -3.304688 c 0 -1.25 0.90625 -2.230469 2.125 -2.507812 z m 0 0" fill-rule="evenodd"/>
        <path d="m 0 14.957031 v 1.042969 h 16 v -4 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 4 8.503906 l 10 -2.089844 v 3.585938 l -10 2.089844 z m 0 0"/>
            <path d="m 10 3 h 1 v 6 h -1 z m 0 0"/>
            <path d="m 7 4.253906 h 1 v 6 h -1 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwFunicularSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFunicularSymbolic;
