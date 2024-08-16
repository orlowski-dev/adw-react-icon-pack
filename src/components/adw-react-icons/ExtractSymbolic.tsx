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
      <path d="m 8.015625 -0.0117188 c -0.257813 0 -0.515625 0.0976563 -0.707031 0.2929688 l -2 2 c -0.1875 0.1875 -0.292969 0.441406 -0.289063 0.707031 h -0.007812 v 1 l 1.988281 0.011719 v 7 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -7 l 2.015625 -0.015625 v -1 h -0.007813 c 0.003907 -0.261719 -0.101562 -0.515625 -0.289062 -0.707031 l -2 -2 c -0.191406 -0.1914065 -0.449219 -0.292969 -0.707031 -0.292969 z m -4.015625 7.0117188 c -1.644531 0 -3 1.355469 -3 3 v 3 c 0 1.644531 1.355469 3 3 3 h 8 c 1.644531 0 3 -1.355469 3 -3 v -3 c 0 -1.644531 -1.355469 -3 -3 -3 h -2 v 2 h 2 c 0.5625 0 1 0.4375 1 1 v 3 c 0 0.5625 -0.4375 1 -1 1 h -8 c -0.5625 0 -1 -0.4375 -1 -1 v -3 c 0 -0.5625 0.4375 -1 1 -1 h 2 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwExtractSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExtractSymbolic;
