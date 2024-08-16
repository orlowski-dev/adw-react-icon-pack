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
        <path d="m 5 1 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -7.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 4 v 1.5 c 0 1 0.5 1.5 1.5 1.5 h 1.5 v 7 c 0 0.570312 -0.429688 1 -1 1 h -6 c -0.570312 0 -1 -0.429688 -1 -1 v -9 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 8 6 c -1.097656 0 -2 0.902344 -2 2 c 0 0.53125 0.210938 1.015625 0.550781 1.375 c -0.015625 0.011719 -0.03125 0.015625 -0.050781 0.027344 c -0.925781 0.535156 -1.5 1.527344 -1.5 2.597656 c 0 0.542969 0.441406 0.980469 0.980469 0.980469 h 4.039062 c 0.539063 0 0.980469 -0.4375 0.980469 -0.980469 c 0 -1.070312 -0.574219 -2.0625 -1.5 -2.597656 c -0.015625 -0.011719 -0.035156 -0.019532 -0.054688 -0.027344 c 0.34375 -0.359375 0.554688 -0.84375 0.554688 -1.375 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 3 c 0.34375 0 0.691406 0.089844 1 0.269531 c 0.566406 0.324219 0.933594 0.902344 0.992188 1.542969 c 0.007812 0.105469 -0.074219 0.1875 -0.179688 0.1875 h -3.605469 c -0.113281 0 -0.207031 -0.09375 -0.195312 -0.207031 c 0.0625 -0.632813 0.429687 -1.203125 0.988281 -1.523438 c 0.308594 -0.179687 0.65625 -0.269531 1 -0.269531 z m 0 0" fill-rule="evenodd"/>
    </g>
    </svg>
  );
};

const AdwPageorientationportraitsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPageorientationportraitsymbolic;
