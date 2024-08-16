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
        <path d="m 6 5.113281 v 5.773438 h 0.578125 c 0.101563 0 0.199219 -0.023438 0.289063 -0.074219 l 4.039062 -2.308594 c 0.175781 -0.097656 0.269531 -0.300781 0.269531 -0.503906 s -0.09375 -0.40625 -0.269531 -0.503906 l -4.039062 -2.308594 c -0.089844 -0.050781 -0.1875 -0.074219 -0.289063 -0.074219 z m 0 0"/>
        <path d="m 8 0 c -4.40625 0 -7.99609375 3.59375 -7.99609375 8 s 3.58984375 8 7.99609375 8 s 7.996094 -3.59375 7.996094 -8 s -3.589844 -8 -7.996094 -8 z m 0 2 c 3.324219 0 5.996094 2.675781 5.996094 6 s -2.671875 6 -5.996094 6 s -5.996094 -2.675781 -5.996094 -6 s 2.671875 -6 5.996094 -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPlaybackSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaybackSymbolic;
