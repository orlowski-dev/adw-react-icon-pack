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
        <path d="m 4.027344 0.996094 c -1.660156 0 -3.027344 1.367187 -3.027344 3.027344 v 7.910156 c 0 1.660156 1.367188 3.027344 3.027344 3.027344 h 7.945312 c 1.660156 0 3.027344 -1.367188 3.027344 -3.027344 v -7.910156 c 0 -1.660157 -1.367188 -3.027344 -3.027344 -3.027344 z m 0 2 h 7.945312 c 0.585938 0 1.027344 0.441406 1.027344 1.027344 v 7.910156 c 0 0.585937 -0.441406 1.027344 -1.027344 1.027344 h -7.945312 c -0.589844 0 -1.027344 -0.441407 -1.027344 -1.027344 v -7.910156 c 0 -0.585938 0.4375 -1.027344 1.027344 -1.027344 z m 0 0"/>
        <path d="m 4.027344 1 c -1.660156 0 -3.027344 1.367188 -3.027344 3.027344 v 0.945312 s 1.386719 2.03125 3.027344 2.03125 h 7.945312 c 1.46875 0 3.027344 -2.03125 3.027344 -2.03125 v -0.945312 c 0 -1.660156 -1.367188 -3.027344 -3.027344 -3.027344 z m 0 2 h 7.945312 c 0.585938 0 1.027344 0.441406 1.027344 1.027344 v 0.945312 c 0 0.585938 -0.441406 1.027344 -1.027344 1.027344 h -7.945312 c -0.589844 0 -1.027344 -0.441406 -1.027344 -1.027344 v -0.945312 c 0 -0.585938 0.4375 -1.027344 1.027344 -1.027344 z m 0 0"/>
        <path d="m 7 0.996094 h 2 v 10.03125 l -2 -0.988282 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPackageXGenericSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPackageXGenericSymbolic;
