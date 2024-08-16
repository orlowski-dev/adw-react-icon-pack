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
      <path d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.707.355 1.445C2.727 15.187 3.668 16 5 16h6s.707.016 1.45-.355C13.187 15.273 14 14.332 14 13V5c0-1.332-.813-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1Zm4 4c.555 0 1 .445 1 1v8c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1Z" fill="currentColor" style="fill:currentColor;fill-opacity:.34999999"/><path d="M9 4.992V5a.992.992 0 0 0-.707.285l-3 3A1 1 0 0 0 5 8.992v1L7.63 10l-1.462 1.445a.998.998 0 0 0-.16.555H6v1h1v-.004c.266 0 .52-.101.707-.289l3-3a.996.996 0 0 0 .29-.707H11V8H8.37l1.462-1.453c.11-.164.168-.36.168-.555v-1z" fill="currentColor"/>
    </svg>
  );
};

const AdwBatteryfullchargedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryfullchargedsymbolic;
