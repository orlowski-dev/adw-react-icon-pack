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
        <path d="m 3.5 0.0078125 c -0.257812 0 -0.511719 0.0976565 -0.707031 0.2929685 l -2.5 2.5 c -0.3906252 0.386719 -0.3906252 1.023438 0 1.414063 l 2.5 2.496094 c 0.390625 0.390624 1.023437 0.390624 1.414062 0 l 2.5 -2.496094 c 0.390625 -0.390625 0.390625 -1.027344 0 -1.414063 l -2.5 -2.5 c -0.195312 -0.195312 -0.449219 -0.2929685 -0.707031 -0.2929685 z m 0 1.9921875 l 1.503906 1.503906 l -1.503906 1.503906 l -1.503906 -1.503906 z m 0 0"/>
        <path d="m 12.5 0.00390625 c -1.929688 0 -3.496094 1.56640575 -3.496094 3.49999975 c 0 1.929688 1.566406 3.496094 3.496094 3.496094 c 1.933594 0 3.5 -1.566406 3.5 -3.496094 c 0 -1.933594 -1.566406 -3.49999975 -3.5 -3.49999975 z m 0 1.99609375 c 0.832031 0 1.503906 0.671875 1.503906 1.503906 c 0 0.828125 -0.671875 1.5 -1.503906 1.5 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 c 0 -0.832031 0.671875 -1.503906 1.5 -1.503906 z m 0 0"/>
        <path d="m 7.9375 9.003906 c -0.339844 0.015625 -0.644531 0.203125 -0.8125 0.496094 l -2.320312 4 c -0.386719 0.664062 0.09375 1.5 0.863281 1.5 h 4.644531 c 0.769531 0 1.25 -0.835938 0.863281 -1.5 l -2.320312 -4 c -0.1875 -0.328125 -0.542969 -0.519531 -0.917969 -0.496094 z m 0 0"/>
        <path d="m 2 7 h 12 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -12 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShapeBalanceSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShapeBalanceSymbolic;
