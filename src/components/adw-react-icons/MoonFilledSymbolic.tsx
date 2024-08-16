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
      <path d="m 8 1 c -3.859375 0 -7 3.140625 -7 7 s 3.140625 7 7 7 s 7 -3.140625 7 -7 c 0 0 0 0 0 -0.003906 c 0 -0.429688 -0.042969 -0.863282 -0.125 -1.289063 c -0.101562 -0.53125 -0.855469 -0.542969 -0.976562 -0.015625 c -0.398438 1.742188 -1.945313 2.972656 -3.734376 2.972656 c -2.121093 0 -3.832031 -1.707031 -3.832031 -3.832031 c 0.003907 -1.785156 1.230469 -3.328125 2.96875 -3.730469 c 0.527344 -0.121093 0.515625 -0.878906 -0.019531 -0.980468 c -0.421875 -0.078125 -0.851562 -0.121094 -1.28125 -0.121094 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMoonFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoonFilledSymbolic;
