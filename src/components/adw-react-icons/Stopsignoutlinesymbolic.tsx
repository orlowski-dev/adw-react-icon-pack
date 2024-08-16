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
      <path d="m 6 2 c -0.296875 0 -0.582031 0.117188 -0.792969 0.332031 l -2.855469 2.851563 c -0.214843 0.210937 -0.332031 0.496094 -0.332031 0.796875 v 4.039062 c 0 0.296875 0.117188 0.582031 0.332031 0.792969 l 2.851563 2.855469 c 0.210937 0.214843 0.496094 0.332031 0.796875 0.332031 h 4.039062 c 0.296876 0 0.582032 -0.117188 0.792969 -0.332031 l 2.855469 -2.855469 c 0.214844 -0.210938 0.332031 -0.496094 0.332031 -0.792969 v -4.039062 c 0 -0.296875 -0.117187 -0.582031 -0.332031 -0.792969 l -2.855469 -2.855469 c -0.210937 -0.214843 -0.496093 -0.332031 -0.792969 -0.332031 z m -2 5 h 8 v 2 h -8 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStopsignoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStopsignoutlinesymbolic;
