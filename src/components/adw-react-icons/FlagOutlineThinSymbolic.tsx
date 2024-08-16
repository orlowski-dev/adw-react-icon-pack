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
      <path d="m 2 1 v 14 h 1 v -6 l 3.363281 0.003906 l 0.722657 1.449219 c 0.171874 0.335937 0.519531 0.550781 0.894531 0.550781 h 5 c 0.554687 0 1 -0.449218 1 -1 v -6 c 0 -0.550781 -0.445313 -1 -1 -1 h -3.382813 l -0.722656 -1.445312 c -0.167969 -0.339844 -0.515625 -0.554688 -0.894531 -0.554688 l -4.980469 -0.003906 z m 1 1 l 4.980469 0.003906 l 1 2 h 4 v 6 h -5 l -1 -2 l -3.980469 -0.003906 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFlagOutlineThinSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlagOutlineThinSymbolic;
