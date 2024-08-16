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
      <path d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.25 1.25 l -1.761719 1.730469 c -0.191406 0.199218 -0.28125 0.441406 -0.28125 0.75 c 0 0.976562 1 1 1 1 c 0.257812 0 0.527344 -0.128907 0.71875 -0.3125 l 1.28125 -1.28125 v 3.570312 s 0 1 1 1 s 1 -1 1 -1 v -3.570312 l 1.28125 1.28125 c 0.191406 0.183593 0.410156 0.3125 0.71875 0.3125 c 0 0 1 -0.023438 1 -1 c 0 -0.308594 -0.089844 -0.550782 -0.28125 -0.75 l -1.761719 -1.730469 l -1.25 -1.25 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m -5 9 c -1.644531 0 -3 1.355469 -3 3 v 4 h 2 v -3.800781 l 4.613281 3.078125 c 0.835938 0.558594 1.9375 0.558594 2.773438 0 l 4.613281 -3.078125 v 3.800781 h 2 v -4 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0.800781 2 h 8.398438 l -3.921875 2.613281 c -0.171875 0.113281 -0.382813 0.113281 -0.554688 0 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMailSendSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailSendSymbolic;
