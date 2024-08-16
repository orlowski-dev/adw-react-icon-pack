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
        <path d="m 16 2.1875 c 0 -1.207031 -0.800781 -2.1875 -2 -2.1875 h -9.976562 c -1.203126 0 -2 0.980469 -2 2.1875 v 11.625 c 0 1.207031 1.015624 2.1875 2.21875 2.1875 h 9.539062 c 1.199219 0 2.21875 -0.980469 2.21875 -2.1875 z m -2 -0.1875 v 12 h -10 v -12 z m 0 0"/>
        <path d="m 9 3.96875 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 z m -0.75 4 c -1.246094 0 -2.25 1.003906 -2.25 2.25 v 1.03125 c 0 0.414062 0.335938 0.75 0.75 0.75 h 4.5 c 0.414062 0 0.75 -0.335938 0.75 -0.75 v -1.03125 c 0 -1.246094 -1.003906 -2.25 -2.25 -2.25 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwAddressBookSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAddressBookSymbolic;
