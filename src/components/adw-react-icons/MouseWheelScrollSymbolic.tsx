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
      <path d="m 5 0 c -2.753906 0 -5 2.246094 -5 5 v 6 c 0 2.753906 2.246094 5 5 5 h 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2 c -1.679688 0 -3 -1.320312 -3 -3 v -6 c 0 -1.679688 1.320312 -3 3 -3 h 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 7 0 c -0.25 0 -0.503906 0.09375 -0.699219 0.28125 l -3 2.917969 c -0.394531 0.386719 -0.402343 1.019531 -0.019531 1.414062 c 0.386719 0.398438 1.019531 0.40625 1.417969 0.023438 l 1.300781 -1.269531 v 7.183593 l -1.300781 -1.269531 c -0.398438 -0.382812 -1.03125 -0.375 -1.417969 0.019531 c -0.382812 0.398438 -0.375 1.03125 0.019531 1.417969 l 3 2.917969 c 0.390625 0.375 1.007813 0.375 1.398438 0 l 3 -2.917969 c 0.1875 -0.1875 0.296875 -0.441406 0.300781 -0.707031 c 0.003906 -0.261719 -0.097656 -0.519531 -0.28125 -0.710938 c -0.386719 -0.394531 -1.019531 -0.402343 -1.417969 -0.019531 l -1.300781 1.269531 v -7.183593 l 1.300781 1.269531 c 0.398438 0.382812 1.03125 0.375 1.417969 -0.023438 c 0.183594 -0.1875 0.285156 -0.445312 0.28125 -0.707031 c -0.003906 -0.265625 -0.113281 -0.519531 -0.300781 -0.707031 l -3 -2.917969 c -0.195313 -0.1875 -0.449219 -0.28125 -0.699219 -0.28125 z m -6 3 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMouseWheelScrollSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMouseWheelScrollSymbolic;
