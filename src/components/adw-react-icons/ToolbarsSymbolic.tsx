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
      <path d="m 2.984375 0.00390625 c -1.648437 0 -3 1.35546875 -3 2.99999975 v 10 c 0 1.644532 1.351563 3 3 3 h 10 c 1.644531 0 3 -1.355468 3 -3 v -10 c 0 -1.644531 -1.355469 -2.99999975 -3 -2.99999975 z m -0.984375 1.99609375 h 2 v 2 h -2 z m 3 0 h 2 v 2 h -2 z m 3 0 h 2 v 2 h -2 z m -6.015625 3 h 12 v 8.003906 c 0 0.570313 -0.429687 1 -1 1 h -10 c -0.574219 0 -1 -0.429687 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwToolbarsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwToolbarsSymbolic;
