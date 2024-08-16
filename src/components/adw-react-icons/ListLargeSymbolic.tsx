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
      <path d="m 1.386719 1 c -0.214844 0 -0.386719 0.167969 -0.386719 0.378906 v 3.242188 c 0 0.210937 0.171875 0.378906 0.386719 0.378906 h 3.230469 c 0.210937 0 0.382812 -0.167969 0.382812 -0.378906 v -3.242188 c 0 -0.210937 -0.171875 -0.378906 -0.382812 -0.378906 z m 5.613281 1 v 2 h 8 v -2 z m -5.613281 4.015625 c -0.214844 0 -0.386719 0.167969 -0.386719 0.378906 v 3.21875 c 0 0.210938 0.171875 0.378907 0.386719 0.378907 h 3.230469 c 0.210937 0 0.382812 -0.167969 0.382812 -0.378907 v -3.21875 c 0 -0.210937 -0.171875 -0.378906 -0.382812 -0.378906 z m 5.613281 0.984375 v 2 h 8 v -2 z m -5.613281 4 c -0.214844 0 -0.386719 0.167969 -0.386719 0.378906 v 3.222656 c 0 0.207032 0.171875 0.378907 0.386719 0.378907 h 3.230469 c 0.210937 0 0.382812 -0.171875 0.382812 -0.378907 v -3.222656 c 0 -0.210937 -0.171875 -0.378906 -0.382812 -0.378906 z m 5.613281 0.984375 v 2 h 8 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwListLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwListLargeSymbolic;
