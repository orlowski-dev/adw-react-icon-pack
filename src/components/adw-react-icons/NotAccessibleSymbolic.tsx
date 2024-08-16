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
        <path d="m 8 0.0625 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -1 4.9375 s -1 0 -1 1 v 0.9375 l 4 4 h 0.371094 l 0.554687 0.925781 l 3.605469 3.605469 l -0.457031 0.457031 c 0.132812 -0.019531 0.261719 -0.0625 0.375 -0.128906 c 0.476562 -0.285156 0.628906 -0.898437 0.34375 -1.375 l -3.289063 -5.484375 h -1.503906 v -0.9375 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2.585938 l -0.707031 -0.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -2.894531 2.167969 c -1.226563 0.398437 -2.253907 1.3125 -2.761719 2.546875 c -0.699219 1.679687 -0.308594 3.621094 0.976562 4.90625 c 1.28125 1.28125 3.222657 1.671875 4.902344 0.972656 c 1.234375 -0.507812 2.148438 -1.535156 2.546875 -2.765625 l -0.894531 -0.890625 h -0.929688 c -0.164062 0.804688 -0.710937 1.488281 -1.488281 1.8125 c -0.9375 0.386719 -2.007812 0.171875 -2.726562 -0.546875 c -0.714844 -0.714844 -0.929688 -1.785156 -0.542969 -2.722656 c 0.324219 -0.777344 1.007812 -1.324219 1.8125 -1.484375 v -0.933594 z m 1.894531 1.894531 c 0.039062 1.757812 1.640625 1.921875 1.9375 1.9375 z m 0 0"/>
        <path d="m 0.46875 1.53125 l 14 14 l 1.0625 -1.0625 l -14 -14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNotAccessibleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNotAccessibleSymbolic;
