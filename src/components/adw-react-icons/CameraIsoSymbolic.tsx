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
      <path d="m 2.5 0 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 11 c 0 1.367188 1.132812 2.5 2.5 2.5 h 11 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -11 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 1.5 2 h 2 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h -2 v -2 h 2 z m 9.859375 0.136719 c 0.089844 0.089843 0.140625 0.214843 0.140625 0.363281 v 11 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -11 c -0.148438 0 -0.273438 -0.050781 -0.359375 -0.136719 z m -5.859375 7.863281 v 2 h 5 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameraIsoSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraIsoSymbolic;
