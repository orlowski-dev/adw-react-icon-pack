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
        <path d="m 11 15 c 0.828125 0 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 c -3.882812 0 -7 -3.117188 -7 -7 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 s -1.5 0.671875 -1.5 1.5 c 0 5.503906 4.496094 10 10 10 z m 0 0"/>
        <path d="m 15.003906 11 c 0 -0.554688 -0.445312 -1 -1 -1 h -4 c -0.550781 0 -1 0.445312 -1 1 v 1.710938 l 2 2.289062 h 1.5 c 1.382813 0 2.5 -1.121094 2.5 -2.5 z m 0 0"/>
        <path d="m 5.003906 1 c 0.554688 0 1 0.445312 1 1 v 4 c 0 0.554688 -0.445312 1 -1 1 h -1.710937 l -2.289063 -2 v -1.5 c 0 -1.378906 1.121094 -2.5 2.5 -2.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhoneRightFacingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhoneRightFacingSymbolic;
