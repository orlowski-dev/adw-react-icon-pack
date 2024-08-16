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
        <path d="m 15 11 c 0 1.644531 -1.355469 3 -3 3 h -9 c -1.644531 0 -3 -1.355469 -3 -3 v -6 c 0 -1.644531 1.355469 -3 3 -3 h 7.5 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 3.5 3.5 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 z m -2 0 v -4 h -1.5 c -1 0 -1.5 -0.5 -1.5 -1.5 v -1.5 h -7 c -0.570312 0 -1 0.429688 -1 1 v 6 c 0 0.570312 0.429688 1 1 1 h 9 c 0.570312 0 1 -0.429688 1 -1 z m -8.5 -6.035156 c -0.824219 0 -1.5 0.675781 -1.5 1.5 c 0 0.820312 0.675781 1.5 1.5 1.5 s 1.5 -0.679688 1.5 -1.5 c 0 -0.824219 -0.675781 -1.5 -1.5 -1.5 z m 0 1 c 0.28125 0 0.5 0.21875 0.5 0.5 s -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 s 0.21875 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 13.382812 9.996094 h -2.417968 c -0.558594 0 -1.097656 -0.195313 -1.523438 -0.550782 l -1.128906 -0.941406 c -0.804688 -0.671875 -1.972656 -0.671875 -2.78125 -0.003906 l -1.09375 0.902344 c -0.449219 0.371094 -1.015625 0.574218 -1.597656 0.574218 h -1.339844 c -0.277344 0 -0.5 0.222657 -0.5 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1.339844 c 0.816406 0 1.605468 -0.285156 2.234375 -0.804687 l 1.09375 -0.902344 c 0.4375 -0.359375 1.070312 -0.359375 1.503906 0.003907 l 1.128906 0.941406 c 0.609375 0.503906 1.371094 0.78125 2.164063 0.78125 h 2.417968 c 0.277344 0 0.5 -0.222656 0.5 -0.5 c 0 -0.273438 -0.222656 -0.5 -0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPageOrientationLandscapeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPageOrientationLandscapeSymbolic;
