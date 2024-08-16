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
      <path d="m 1 1 v 11 l 2.5 4 l 2.5 -4 v -11 z m 8 0 v 15 h 6 v -15 z m 2 1 h 3 v 1 h -2 v 1 h 2 v 1 h -1 v 1 h 1 v 1 h -1 v 1 h 1 v 1 h -1 v 1 h 1 v 1 h -2 v 1 h 2 v 1 h -1 v 1 h 1 v 1 h -3 z m -9 10 h 3 l -1 1.5 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHigSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHigSymbolic;
