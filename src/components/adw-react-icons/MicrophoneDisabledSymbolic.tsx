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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -2.792969 -2.792969 c 0.789063 -1.011719 1.261719 -2.285156 1.261719 -3.664062 v -1.011719 h -1.5 v 1.011719 c 0 0.972656 -0.304688 1.871093 -0.824219 2.601562 l -1.09375 -1.089843 c 0.265625 -0.445313 0.417969 -0.964844 0.417969 -1.523438 v -4 c 0 -1.660156 -1.339844 -3 -3 -3 c -1.640625 0 -2.964844 1.308594 -2.996094 2.941406 z m 0.46875 6.53125 v 1.011719 c 0 2.964843 2.164062 5.429687 5 5.90625 v 2.082031 h 2 v -2.082031 c 0.5 -0.085938 0.976562 -0.230469 1.425781 -0.429688 l -1.164062 -1.164062 c -0.398438 0.113281 -0.824219 0.175781 -1.261719 0.175781 c -2.507812 0 -4.5 -1.988281 -4.5 -4.488281 v -1.011719 z m 3.003906 1.066406 c 0.035156 1.609375 1.320313 2.894532 2.929688 2.929688 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMicrophoneDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMicrophoneDisabledSymbolic;
