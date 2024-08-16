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
      <path d="m 3 -0.0117188 c -1.660156 0 -3 1.3398438 -3 2.9999998 v 10 c 0 1.664063 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.335937 3 -3 v -10 c 0 -1.660156 -1.339844 -2.9999998 -3 -2.9999998 z m 1 2.9999998 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 3.292969 3.292969 l 3.292969 -3.292969 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 s 0.519531 0.105469 0.707031 0.292969 c 0.390625 0.390625 0.390625 1.023438 0 1.414062 l -3.292969 3.292969 l 3.292969 3.292969 c 0.390625 0.390625 0.390625 1.023438 0 1.414062 c -0.390625 0.390626 -1.023437 0.390626 -1.414062 0 l -3.292969 -3.292968 l -3.292969 3.292968 c -0.390625 0.390626 -1.023437 0.390626 -1.414062 0 c -0.390625 -0.390624 -0.390625 -1.023437 0 -1.414062 l 3.292969 -3.292969 l -3.292969 -3.292969 c -0.390625 -0.390624 -0.390625 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwUnreadablesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUnreadablesymbolic;
