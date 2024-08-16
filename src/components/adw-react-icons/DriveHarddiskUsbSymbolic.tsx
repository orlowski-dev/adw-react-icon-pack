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
      <path d="m 8.5 0 h -1 l -2 4 h 1.5 v 5 h -3 v -1.269531 c 0.617188 -0.359375 1 -1.015625 1 -1.730469 c 0 -1.105469 -0.894531 -2 -2 -2 s -2 0.894531 -2 2 c 0 0.714844 0.382812 1.375 1 1.730469 v 1.269531 c 0 2 2 2 2 2 h 3 v 1.269531 c -0.617188 0.359375 -1 1.015625 -1 1.730469 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 c 0 -0.714844 -0.382812 -1.375 -1 -1.730469 v -1.269531 h 3 s 2 0 2 -2 v -1 s 1.125 -0.1875 1 -1 v -2 c 0.125 -1.125 -1 -1 -1 -1 h -2 c -1.0625 0 -1 1 -1 1 v 2 c 0 1 1 1 1 1 v 1 h -3 v -5 h 1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDriveHarddiskUsbSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDriveHarddiskUsbSymbolic;
