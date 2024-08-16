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
      <path d="m 8 0 l -4.375 7.582031 c -0.003906 0.007813 -0.011719 0.019531 -0.015625 0.03125 l -0.003906 0.003907 c -0.398438 0.730468 -0.605469 1.550781 -0.605469 2.382812 c 0 2.761719 2.238281 5 5 5 s 5 -2.238281 5 -5 c 0 -0.832031 -0.210938 -1.652344 -0.613281 -2.386719 h 0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBlursymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBlursymbolic;
