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
      <path d="m 2.003906 13.492188 v -11 c 0 -1.5 1.265625 -1.492188 1.265625 -1.492188 h 0.132813 c 0.246094 0 0.484375 0.054688 0.699218 0.175781 l 9.796876 5.597657 c 0.433593 0.238281 0.65625 0.730468 0.65625 1.222656 c 0 0.492187 -0.222657 0.984375 -0.65625 1.226562 l -9.796876 5.597656 c -0.214843 0.121094 -0.453124 0.175782 -0.699218 0.171876 h -0.132813 s -1.265625 0 -1.265625 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlaylargesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaylargesymbolic;
