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
      <path d="m 9 2 h -1 v 0.832031 c -0.105469 0.617188 0.375 1.175781 1 1.167969 h 1.585938 l -8.292969 8.292969 c -0.980469 0.941406 0.472656 2.394531 1.414062 1.414062 l 8.292969 -8.292969 v 1.585938 c -0.007812 0.621094 0.546875 1.097656 1.15625 1 h 0.84375 v -6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCallmadesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallmadesymbolic;
