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
        <path d="m 4 1 c -1.660156 0 -3 1.339844 -3 3 v 6 c 0 1.660156 1.339844 3 3 3 h 8 c 1.660156 0 3 -1.339844 3 -3 v -6 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 0.261719 l -1.261719 1.261719 v -0.261719 c 0 -0.554688 0.445312 -1 1 -1 z m 2.738281 0 h 0.699219 l -4.4375 4.4375 v -0.699219 z m 2.824219 0 h 1.230469 l -7.585938 7.582031 c -0.121093 -0.164062 -0.207031 -0.359375 -0.207031 -0.582031 v -0.4375 z m 2.609375 0.035156 c 0.316406 0.054688 0.578125 0.246094 0.714844 0.523438 l -7.441407 7.441406 h -1.238281 z m 0.828125 1.121094 v 5.84375 c 0 0.554688 -0.445312 1 -1 1 h -5.84375 z m 0 0"/>
        <path d="m 8 14 c -5 0 -5 1 -5 1 c 0 1 1 1 1 1 h 8 c 1 0 1 -1 1 -1 s 0 -1 -5 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenPrivacySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacySymbolic;
