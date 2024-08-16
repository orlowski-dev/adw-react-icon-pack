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
      <path d="m 1 7 v 8 h 11 c 0.4375 0 0.875 -0.375 1 -1 l 1 -5.96875 v -2.03125 c 0 -0.535156 -0.40625 -1 -1 -1 h -3.898438 l 0.898438 -3.5 c 0.226562 -0.839844 -0.433594 -1.5 -1 -1.5 h -1 l -4.042969 7 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwThumbsUpSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwThumbsUpSymbolic;
