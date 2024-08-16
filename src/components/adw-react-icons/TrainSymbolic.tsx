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
        <path d="m 11 3 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -7 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m -10 1 v 7 c 0 1.660156 1.339844 3 3 3 h 7 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 h -7 c -1.660156 0 -3 1.339844 -3 3 z m 0 0"/>
        <path d="m 3 8.003906 h 9 v 1 h -9 z m 0 0" fill-rule="evenodd"/>
        <path d="m 12.488281 12.992188 c -0.132812 0 -0.261719 0.050781 -0.355469 0.148437 c -0.195312 0.191406 -0.195312 0.511719 0 0.703125 l 1.980469 1.984375 c 0.195313 0.195313 0.515625 0.195313 0.710938 0 c 0.191406 -0.195313 0.191406 -0.511719 0 -0.707031 l -1.984375 -1.980469 c -0.09375 -0.097656 -0.222656 -0.148437 -0.351563 -0.148437 z m 0 0"/>
        <path d="m 2.472656 12.992188 c 0.132813 0 0.257813 0.050781 0.351563 0.148437 c 0.195312 0.191406 0.195312 0.511719 0 0.703125 l -1.980469 1.984375 c -0.195312 0.195313 -0.511719 0.195313 -0.707031 0 c -0.1953128 -0.195313 -0.1953128 -0.511719 0 -0.707031 l 1.980469 -1.980469 c 0.097656 -0.097656 0.222656 -0.148437 0.355468 -0.148437 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 3 4 h 9 v 1 h -9 z m 0 0"/>
            <path d="m 4.492188 10.003906 h 1.015624 c 0.273438 0 0.492188 0.21875 0.492188 0.492188 c 0 0.269531 -0.21875 0.488281 -0.492188 0.488281 h -1.015624 c -0.273438 0 -0.492188 -0.21875 -0.492188 -0.488281 c 0 -0.273438 0.21875 -0.492188 0.492188 -0.492188 z m 0 0"/>
            <path d="m 9.492188 10.003906 h 1.03125 c 0.273437 0 0.492187 0.21875 0.492187 0.492188 c 0 0.269531 -0.21875 0.488281 -0.492187 0.488281 h -1.03125 c -0.273438 0 -0.492188 -0.21875 -0.492188 -0.488281 c 0 -0.273438 0.21875 -0.492188 0.492188 -0.492188 z m 0 0"/>
            <path d="m 7 4 h 0.980469 v 5 h -0.980469 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwTrainSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTrainSymbolic;
