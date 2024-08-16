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
      <path d="m 7.9375 2 l 0.785156 2.980469 l -2.222656 -1.980469 l -1.480469 2.625 l 2.957031 0.886719 l -2.976562 0.863281 l 1.457031 2.667969 l 2.257813 -2 l -0.777344 2.957031 h 3.351562 l -0.71875 -2.871094 l 2.179688 1.972656 l 1.5 -2.644531 l -2.878906 -0.898437 l 2.980468 -0.746094 l -1.476562 -2.644531 l -2.355469 1.90625 l 0.769531 -3.074219 z m -5.4375 9 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRegexsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRegexsymbolic;
