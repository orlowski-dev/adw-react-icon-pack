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
      <path d="m 3 -0.0117188 c -1.660156 0 -3 1.3398438 -3 2.9999998 v 10 c 0 1.664063 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.335937 3 -3 v -10 c 0 -1.660156 -1.339844 -2.9999998 -3 -2.9999998 z m 4.046875 2.9999998 h 5 c 0.027344 0.003907 0.058594 0.007813 0.085937 0.011719 c 0.039063 0.003906 0.082032 0.011719 0.121094 0.019531 c 0.054688 0.011719 0.105469 0.027344 0.15625 0.046875 c 0.039063 0.015625 0.078125 0.03125 0.113282 0.050782 c 0.066406 0.035156 0.128906 0.078124 0.183593 0.128906 c 0.015625 0.007812 0.03125 0.019531 0.046875 0.035156 c 0.0625 0.0625 0.113282 0.132812 0.15625 0.207031 c 0.046875 0.078125 0.078125 0.15625 0.101563 0.242188 c 0.023437 0.085937 0.035156 0.171875 0.035156 0.257812 v 5 c 0 0.554688 -0.449219 1 -1 1 s -1 -0.445312 -1 -1 v -2.585937 l -6.292969 6.292968 c -0.390625 0.390626 -1.023437 0.390626 -1.414062 0 c -0.390625 -0.390624 -0.390625 -1.023437 0 -1.414062 l 6.292968 -6.292969 h -2.585937 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSymboliclinksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSymboliclinksymbolic;
