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
      <path d="m 1.019531 7.988281 h 0.839844 c 0.613281 0.101563 1.167969 -0.378906 1.160156 -1 l -0.019531 -1.574219 l 4 4.03125 v 5.554688 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -6 c 0 -0.449219 -0.457031 -1 -1.019531 -1.40625 l -3.566407 -3.59375 l 1.605469 -0.011719 c 0.625 0.011719 1.105469 -0.550781 1 -1.167969 v -0.832031 l -6.019531 0.011719 z m 7.980469 -5.988281 v 0.832031 c -0.105469 0.617188 0.375 1.175781 1 1.167969 l 1.554688 0.011719 l -2.566407 2.5625 l 1.414063 1.414062 l 2.566406 -2.566406 l 0.03125 1.578125 c -0.007812 0.621094 0.546875 1.097656 1.160156 1 h 0.839844 v -6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCallsplitsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallsplitsymbolic;
