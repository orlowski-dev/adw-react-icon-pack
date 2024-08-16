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
      <path d="m 11.125 1.25 l -0.84375 2.1875 l -1.84375 -0.75 l -0.75 1.875 l 1.875 0.75 l -2.1875 5.75 c -2.292969 0.476562 -3.542969 1.964844 -4.375 2.9375 h -1.53125 v 1.0625 h 13 v -1.0625 h -0.71875 c -0.414062 -0.988281 -1.914062 -2.605469 -4.21875 -3 l 1.90625 -4.96875 l 2.25 0.90625 l 0.75 -1.84375 l -2.28125 -0.90625 l 0.84375 -2.1875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGraveyardSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGraveyardSymbolic;
