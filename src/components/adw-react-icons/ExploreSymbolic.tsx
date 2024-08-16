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
      <path d="m 8.050781 1 l -1.050781 1 v 1 h -3 l -2 2.46875 l 2 2.53125 h 3 v 1 h -4 v 4 h 4 v 1.996094 h 2 v -1.996094 h 3 l 2 -2 l -2 -2 h -3 v -1 h 4 v -5 h -4 v -1 z m -3.550781 3 h 7.5 v 3 h -7.5 l -1.28125 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwExploreSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExploreSymbolic;
