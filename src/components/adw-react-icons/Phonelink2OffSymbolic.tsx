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
        <path d="m 4 2 c -0.800781 0 -1.519531 0.476562 -1.835938 1.210938 l 1.835938 1.839843 v -1.050781 h 9 v 2 h 2 v -2 c 0 -1.105469 -0.894531 -2 -2 -2 z m -2 3.167969 v 5.832031 h -2 c 0 1.105469 0.894531 2 2 2 h 7.832031 l -2 -2 h -3.832031 v -3.832031 z m 7.953125 5.832031 l 1.046875 1.046875 v -1.046875 z m 0 0"/>
        <path d="m 12 7 c -0.550781 0 -1 0.449219 -1 1 v 4.046875 l 1.953125 1.953125 h 2.046875 c 0.550781 0 1 -0.449219 1 -1 v -5 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 1 h 3 v 4 h -3 z m 0 0"/>
        <path d="m 1.53125 0.457031 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonelink2OffSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonelink2OffSymbolic;
