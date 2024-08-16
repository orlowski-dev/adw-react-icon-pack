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
      <path d="m 1.082031 1.988281 c -0.554687 0 -0.9999998 0.445313 -0.9999998 1 c 0.0039063 0.507813 0.3945308 0.933594 0.9062498 0.984375 l 0.011719 8.027344 h 6 l -0.011719 1.742188 l -1.804687 1.378906 c -0.222656 0.167968 -0.261719 0.480468 -0.09375 0.703125 c 0.167968 0.21875 0.480468 0.257812 0.703125 0.089843 l 1.6875 -1.292968 l 1.695312 1.324218 c 0.21875 0.167969 0.535157 0.128907 0.707031 -0.085937 c 0.167969 -0.21875 0.128907 -0.535156 -0.089843 -0.703125 l -1.804688 -1.414062 l 0.011719 -1.742188 h 6 l -0.011719 -8.054688 c 0.425781 -0.125 0.722657 -0.515624 0.722657 -0.957031 c 0 -0.554687 -0.449219 -1 -1 -1 z m 6.90625 2 c 1.101563 0 2 0.894531 2 2 h -2 z m -1 1 v 2 h 2 c 0 1.101563 -0.898437 2 -2 2 c -1.105469 0 -2 -0.898437 -2 -2 c 0 -1.105469 0.894531 -2 2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwXofficepresentationsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwXofficepresentationsymbolic;
