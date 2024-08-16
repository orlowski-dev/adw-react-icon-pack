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
      <path d="m 8 1 c -1.660156 0 -3 1.339844 -3 3 v 1 h 6 v -1 c 0 -1.660156 -1.339844 -3 -3 -3 z m -5.199219 10 c 0.878907 1.515625 2.40625 2.613281 4.199219 2.917969 v 2.082031 h 2 v -2.082031 c 1.792969 -0.304688 3.320312 -1.402344 4.199219 -2.917969 h -1.832031 c -0.820313 0.921875 -2.019532 1.5 -3.367188 1.5 s -2.546875 -0.578125 -3.367188 -1.5 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 0 6 h 16 v 4 h -16 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMicrophonehardwaredisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMicrophonehardwaredisabledsymbolic;
