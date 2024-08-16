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
      <path d="m 2.1875 2 c -1.195312 0 -2.1875 0.992188 -2.1875 2.1875 v 3.644531 c 0 1.195313 0.992188 2.1875 2.1875 2.1875 h 4.625 c 0.433594 0 0.84375 -0.132812 1.1875 -0.355469 c 0.34375 0.222657 0.753906 0.355469 1.1875 0.355469 h 4.625 c 1.195312 0 2.1875 -0.992187 2.1875 -2.1875 v -3.644531 c 0 -1.195312 -0.992188 -2.1875 -2.1875 -2.1875 h -4.625 c -0.433594 0 -0.84375 0.132812 -1.1875 0.359375 c -0.34375 -0.226563 -0.753906 -0.359375 -1.1875 -0.359375 z m 0 2 h 4.625 c 0.121094 0 0.1875 0.066406 0.1875 0.1875 v 3.644531 c 0 0.121094 -0.066406 0.1875 -0.1875 0.1875 h -4.625 c -0.121094 0 -0.1875 -0.066406 -0.1875 -0.1875 v -3.644531 c 0 -0.121094 0.066406 -0.1875 0.1875 -0.1875 z m 7 0 h 4.625 c 0.121094 0 0.1875 0.066406 0.1875 0.1875 v 3.644531 c 0 0.121094 -0.066406 0.1875 -0.1875 0.1875 h -4.625 c -0.121094 0 -0.1875 -0.066406 -0.1875 -0.1875 v -3.644531 c 0 -0.121094 0.066406 -0.1875 0.1875 -0.1875 z m -4.6875 6.933594 c -2.5 0 -2.5 0.5 -2.5 0.5 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 s 0 -0.5 -2.5 -0.5 z m 7 0 c -2.5 0 -2.5 0.5 -2.5 0.5 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 s 0 -0.5 -2.5 -0.5 z m -7.03125 2.035156 l -3 3 h 6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMonitorPickSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMonitorPickSymbolic;
