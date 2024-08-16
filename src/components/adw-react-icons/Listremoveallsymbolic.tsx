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
      <path d="m 15 1 v 2 h -14 v -2 z m 0 4 v 2 h -14 v -2 z m -7.875 3 c 0.492188 0 0.875 0.382812 0.875 0.875 v 6.25 c 0 0.492188 -0.382812 0.875 -0.875 0.875 h -6.25 c -0.492188 0 -0.875 -0.382812 -0.875 -0.875 v -6.25 c 0 -0.492188 0.382812 -0.875 0.875 -0.875 z m 7.875 1 v 2 h -6 v -2 z m -8.5 2 h -5 s -0.5 0 -0.5 0.5 v 1 c 0 0.5 0.5 0.5 0.5 0.5 h 5 s 0.5 0 0.5 -0.5 v -1 c 0 -0.5 -0.5 -0.5 -0.5 -0.5 z m 8.5 2 v 2 h -6 v -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwListremoveallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwListremoveallsymbolic;
