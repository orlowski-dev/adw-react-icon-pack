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
      <g fill="currentColor">
        <path d="m 3 4 c -0.546875 0 -1 -0.453125 -1 -1 s 0.453125 -1 1 -1 s 1 0.453125 1 1 s -0.453125 1 -1 1 z m 0 -4 c -1.660156 0 -3 1.339844 -3 3 s 1.339844 3 3 3 s 3 -1.339844 3 -3 s -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 5 8 l 0.285156 -0.699219 l -0.988281 1.015625 c -0.832031 0.855469 -1.296875 2 -1.296875 3.191406 v 0.035157 l 0.003906 0.035156 c 0.175782 2.625 2.4375 4.597656 5.0625 4.417969 l -0.066406 0.003906 h 7.972656 v -3 c 0 -2.214844 -1.785156 -4 -4 -4 h -0.972656 l 1 1 v -1.355469 c 0 -2.179687 -1.378906 -4.113281 -3.441406 -4.824219 l -3.558594 -1.222656 z m 2.90625 -2.285156 c 1.25 0.425781 2.09375 1.609375 2.09375 2.929687 v 2.355469 h 1.972656 c 1.097656 0 2 0.902344 2 2 v 2 l 1 -1 h -7.007812 l -0.03125 0.003906 c -1.515625 0.101563 -2.832032 -1.050781 -2.9375 -2.5625 l 0.003906 0.066406 c 0 -0.671874 0.261719 -1.316406 0.730469 -1.796874 l 1.269531 -1.304688 v -4.40625 l -1.324219 0.945312 z m 0 0"/>
        <path d="m 7.976562 15 h 2.945313 c 0.027344 -0.164062 0.039063 -0.332031 0.039063 -0.5 c 0 -1.734375 -1.476563 -2.46875 -2.984376 -2.46875 c -0.273437 0 -0.5 0.226562 -0.5 0.5 c 0 0.277344 0.226563 0.5 0.5 0.5 c 1.132813 0 1.984376 0.449219 1.984376 1.46875 l 0.5 -0.5 h -2.484376 c -0.273437 0 -0.5 0.222656 -0.5 0.5 s 0.226563 0.5 0.5 0.5 z m 0 0"/>
        <path d="m 9 7.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 s 0.5 0.222656 0.5 0.5 z m 0 0" fill-rule="evenodd"/>
    </g>
    </svg>
  );
};

const AdwSealsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSealsymbolic;
