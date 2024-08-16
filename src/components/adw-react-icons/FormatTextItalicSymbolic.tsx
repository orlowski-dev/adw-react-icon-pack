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
      <path d="m 5 3 v 2 h 6 c 0.429688 0 0.609375 0.28125 0.480469 0.730469 l -0.347657 1.269531 h -5.242187 c -1.839844 0 -3.132813 1.34375 -3.503906 2.738281 c -0.1875 0.699219 -0.175781 1.480469 0.238281 2.15625 c 0.410156 0.675781 1.25 1.105469 2.15625 1.105469 h 6.761719 l 1.863281 -6.730469 c 0.4375 -1.570312 -0.726562 -3.269531 -2.40625 -3.269531 z m 0.890625 6 h 4.683594 l -0.554688 2 h -5.238281 c -0.394531 0 -0.40625 -0.070312 -0.449219 -0.144531 c -0.046875 -0.074219 -0.097656 -0.292969 -0.015625 -0.59375 c 0.160156 -0.605469 0.730469 -1.261719 1.574219 -1.261719 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormatTextItalicSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormatTextItalicSymbolic;
