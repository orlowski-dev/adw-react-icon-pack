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
      <path d="m 8 1.007812 c -2.050781 0 -4.097656 0.777344 -5.65625 2.335938 c -3.117188 3.117188 -3.117188 8.195312 0 11.3125 c 0.390625 0.390625 1.023438 0.390625 1.414062 0 c 0.25 -0.253906 0.351563 -0.621094 0.257813 -0.964844 l 0.804687 -0.804687 l -0.707031 -0.707031 l -0.691406 0.691406 c -0.835937 -0.984375 -1.304687 -2.164063 -1.402344 -3.371094 h 0.980469 v -1 h -0.980469 c 0.09375 -1.148438 0.523438 -2.273438 1.28125 -3.226562 c 0.039063 0.097656 0.097657 0.183593 0.171875 0.257812 l 2.6875 2.6875 c -0.105468 0.246094 -0.160156 0.511719 -0.160156 0.78125 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 c -0.265625 0 -0.53125 0.054688 -0.777344 0.160156 l -2.691406 -2.691406 c -0.074219 -0.074219 -0.164062 -0.128906 -0.257812 -0.167969 c 0.953124 -0.761719 2.078124 -1.1875 3.226562 -1.28125 v 0.980469 h 1 v -0.980469 c 1.207031 0.097657 2.386719 0.566407 3.371094 1.402344 l -0.6875 0.691406 l 0.707031 0.707031 l 0.6875 -0.691406 c 0.835937 0.984375 1.304687 2.164063 1.40625 3.371094 h -0.984375 v 1 h 0.984375 c -0.101563 1.207031 -0.570313 2.386719 -1.40625 3.371094 l -0.6875 -0.691406 l -0.707031 0.707031 l 0.800781 0.804687 c -0.09375 0.34375 0.007813 0.710938 0.257813 0.964844 c 0.390624 0.390625 1.023437 0.390625 1.414062 0 c 3.117188 -3.117188 3.117188 -8.195312 0 -11.3125 c -1.558594 -1.558594 -3.605469 -2.335938 -5.65625 -2.335938 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSpeedometerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeedometerSymbolic;
