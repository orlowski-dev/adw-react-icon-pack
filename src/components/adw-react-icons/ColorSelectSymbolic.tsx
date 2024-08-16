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
      <path d="m 12.957031 0.980469 c -0.519531 0.015625 -1.015625 0.234375 -1.375 0.605469 l -1.585937 1.585937 l -1.085938 -1.085937 c -0.097656 -0.09375 -0.226562 -0.148438 -0.363281 -0.148438 c -0.128906 0.003906 -0.253906 0.054688 -0.34375 0.148438 l -2.121094 2.121093 c -0.195312 0.195313 -0.195312 0.511719 0 0.707031 l 0.644531 0.648438 l -5.585937 5.582031 c -0.09375 0.097657 -0.144531 0.222657 -0.144531 0.355469 v 1.792969 l -0.855469 0.851562 c -0.1953125 0.195313 -0.1953125 0.515625 0 0.710938 l 1 1 c 0.195313 0.191406 0.511719 0.191406 0.707031 0 l 0.855469 -0.855469 h 1.792969 c 0.132812 0 0.257812 -0.050781 0.351562 -0.144531 l 5.585938 -5.585938 l 0.648437 0.644531 c 0.195313 0.195313 0.511719 0.195313 0.707031 0 l 2.121094 -2.121093 c 0.195313 -0.195313 0.195313 -0.511719 0 -0.707031 l -1.085937 -1.085938 l 1.585937 -1.585938 c 1.304688 -1.273437 0.367188 -3.488281 -1.453125 -3.433593 z m -5.023437 5.789062 l 1.292968 1.292969 l -2.9375 2.9375 h -2.585937 z m 0 0" fill="#2e3436" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwColorSelectSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwColorSelectSymbolic;
