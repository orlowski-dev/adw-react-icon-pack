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
      <path d="m 2.96875 1 c -1.089844 0 -1.96875 0.878906 -1.96875 1.96875 v 9.0625 c 0 1.089844 0.878906 1.96875 1.96875 1.96875 h 3.027344 l 2.003906 2.007812 l 2.007812 -2.007812 h 3.023438 c 1.089844 0 1.96875 -0.878906 1.96875 -1.96875 v -9.0625 c 0 -1.089844 -0.878906 -1.96875 -1.96875 -1.96875 z m 7.445312 3 c 1.09375 0.03125 2.0625 0.734375 2.429688 1.765625 c 0.371094 1.035156 0.066406 2.191406 -0.761719 2.910156 l -4.078125 3.628907 l -4.074218 -3.628907 c -1.097657 -0.980469 -1.195313 -2.660156 -0.21875 -3.757812 c 0.976562 -1.097657 2.660156 -1.195313 3.757812 -0.21875 l 0.535156 0.476562 l 0.539063 -0.476562 c 0.507812 -0.464844 1.179687 -0.714844 1.871093 -0.699219 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPositivefeedbacksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPositivefeedbacksymbolic;
