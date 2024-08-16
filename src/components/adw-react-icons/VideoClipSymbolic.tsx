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
      <path d="m 13.925781 0 l -1.914062 0.585938 l 0.585937 1.90625 l 1.914063 -0.582032 z m -2.871093 0.878906 l -1.910157 0.582032 l 0.582031 1.910156 l 1.914063 -0.585938 z m -2.867188 0.875 l -1.914062 0.585938 l 0.585937 1.90625 l 1.914063 -0.585938 z m -2.871094 0.875 l -1.910156 0.585938 l 0.582031 1.90625 l 1.914063 -0.582032 z m -2.867187 0.878906 l -1.914063 0.582032 l 0.585938 1.910156 l 1.914062 -0.585938 z m -1.445313 3.492188 v 5.933594 c 0 1.664062 1.367188 3.035156 3.03125 3.035156 h 7.917969 c 1.660156 0 3.03125 -1.371094 3.03125 -3.035156 v -5.933594 h -2 v 5.933594 c 0 0.589844 -0.441406 1.035156 -1.03125 1.035156 h -7.917969 c -0.589844 0 -1.03125 -0.445312 -1.03125 -1.035156 v -5.933594 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwVideoClipSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVideoClipSymbolic;
