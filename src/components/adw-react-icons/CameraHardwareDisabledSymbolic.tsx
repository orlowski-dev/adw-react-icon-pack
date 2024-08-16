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
      <path d="m 6.5 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -1.707031 1.707031 h -1.085938 c -1.644531 0 -3 1.355469 -3 3 h 2 c 0 -0.570312 0.429688 -1 1 -1 h 1.5 c 0.265625 0 0.519531 -0.105469 0.707031 -0.292969 l 1.707031 -1.707031 h 2.171876 l 1.707031 1.707031 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 h 1.5 c 0.570312 0 1 0.429688 1 1 h 2 c 0 -1.644531 -1.355469 -3 -3 -3 h -1.085938 l -1.707031 -1.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 1.5 4 c -1.007812 0 -1.929688 0.378906 -2.636719 1 h 5.273438 c -0.707031 -0.621094 -1.628907 -1 -2.636719 -1 z m -8 7 v 1 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -1 h -2 v 1 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -1 z m 5.363281 0 c 0.707031 0.621094 1.628907 1 2.636719 1 s 1.929688 -0.378906 2.636719 -1 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 0 6 h 16 v 4 h -16 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwCameraHardwareDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraHardwareDisabledSymbolic;
