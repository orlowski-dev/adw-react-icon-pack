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
      <path d="m 4 1 v 1 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 8 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 v -1 h -2 v 1 h -4 v -1 z m 0 5 h 8 c 0.554688 0 1 0.445312 1 1 v 5 c 0 0.570312 -0.441406 0.886719 -1 1 h -8 c -0.570312 0 -1 -0.429688 -1 -1 v -5 c 0 -0.554688 0.445312 -1 1 -1 z m 3 1 v 1 h 2 v -1 z m 3 0 v 1 h 2 v -1 z m -6 2 v 1 h 2 v -1 z m 3 0 v 1 h 2 v -1 z m 3 0 v 1 h 2 v -1 z m -6 2 v 1 h 2 v -1 z m 3 0 v 1 h 2 v -1 z m 3 0 v 1 h 2 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwXofficecalendarsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwXofficecalendarsymbolic;
