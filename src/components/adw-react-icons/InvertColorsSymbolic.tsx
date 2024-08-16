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
      <path d="m 8 1 l -4.5 4.5 h 0.027344 c -0.984375 1.101562 -1.527344 2.523438 -1.527344 4 c 0 3.3125 2.6875 6 6 6 s 6 -2.6875 6 -6 c 0 -1.476562 -0.542969 -2.898438 -1.53125 -4 h 0.03125 z m -0.019531 2.691406 s 0.019531 0.019532 0.019531 0.019532 v 9.921874 c -0.007812 0 -0.011719 0 -0.019531 0 c -2.21875 0 -4.015625 -1.796874 -4.015625 -4.019531 c 0 -1.019531 0.382812 -1.953125 1.007812 -2.664062 c 0.738282 -0.828125 3.007813 -3.257813 3.007813 -3.257813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwInvertColorsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInvertColorsSymbolic;
