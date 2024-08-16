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
      <g fill="#2e3436">
        <path d="m 1 4.765625 v 8.234375 h 14.222656 z m 2 3.46875 l 4.777344 2.765625 h -4.777344 z m 0 0" fill-rule="evenodd"/>
        <path d="m 1.175781 14 c 0.417969 1.160156 1.53125 2 2.824219 2 h 8 c 1.292969 0 2.40625 -0.839844 2.824219 -2 z m 0 0"/>
        <path d="m 4 0 c -1.644531 0 -3 1.355469 -3 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.570312 0.429688 -1 1 -1 h 5.585938 l 3.414062 3.414062 v 3.585938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -4 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -4 -4 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDocumentPageSetupSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDocumentPageSetupSymbolic;
