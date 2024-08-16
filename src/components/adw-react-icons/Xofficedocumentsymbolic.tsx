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
      <path d="m 5 1 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -7.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 4 v 1.5 c 0 1 0.5 1.5 1.5 1.5 h 1.5 v 7 c 0 0.570312 -0.429688 1 -1 1 h -6 c -0.570312 0 -1 -0.429688 -1 -1 v -9 c 0 -0.570312 0.429688 -1 1 -1 z m 1.5 2 c -0.824219 0 -1.5 0.675781 -1.5 1.5 s 0.675781 1.5 1.5 1.5 s 1.5 -0.675781 1.5 -1.5 s -0.675781 -1.5 -1.5 -1.5 z m 0 1 c 0.28125 0 0.5 0.21875 0.5 0.5 s -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 s 0.21875 -0.5 0.5 -0.5 z m 2.484375 1.988281 v 1 l 2.015625 0.011719 v -1 z m -3.984375 2.011719 v 1 h 6 v -1 z m 0 2 v 1 h 6 v -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwXofficedocumentsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwXofficedocumentsymbolic;
