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
      <path d="m 7.992188 0 c -1.660157 0 -3 1.339844 -3 3 v 5 c 0 1.660156 1.339843 3 3 3 c 1.664062 0 3 -1.339844 3 -3 v -5 c 0 -1.660156 -1.335938 -3 -3 -3 z m -6 6 v 2.011719 c 0 2.964843 2.167968 5.421875 5 5.898437 v 2.089844 h 2 v -2.089844 c 2.835937 -0.476562 5 -2.933594 5 -5.898437 v -2.011719 h -1.5 v 2.011719 c 0 2.5 -1.992188 4.488281 -4.5 4.488281 c -2.503907 0 -4.5 -1.988281 -4.5 -4.488281 v -2.011719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMicrophoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMicrophoneSymbolic;
