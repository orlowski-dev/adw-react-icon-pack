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
      <path d="m 2 1 v 6 h 11 v -6 z m 2 2 h 7 v 2 h -7 z m 3 5 v 1 h -5 v 2 h 1 v -1 h 4 v 1 h 1 v -1 h 4 v 1 h 1 v -2 h -5 v -1 z m -6 4 v 3 h 3 v -3 z m 5 0 v 3 h 3 v -3 z m 5 0 v 3 h 3 v -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwResourcesSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwResourcesSymbolic;
