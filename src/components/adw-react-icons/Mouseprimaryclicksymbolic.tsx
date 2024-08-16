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
        <path d="m 5 2 l -3 1 l -1 3 v 4.5 h 6.5 v -8.5 z m 0 0" fill-opacity="0.35"/>
        <path d="m 5.5 1 c -1.59375 0 -3.007812 0.515625 -3.996094 1.503906 c -0.988281 0.988282 -1.503906 2.402344 -1.503906 3.996094 v 6.5 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -2 h 11 v 2 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -6.5 c 0 -1.59375 -0.515625 -3.007812 -1.503906 -3.996094 c -0.988282 -0.988281 -2.402344 -1.503906 -3.996094 -1.503906 z m 0 2 h 1.5 v 7 h -5 v -3.5 c 0 -1.175781 0.347656 -2.011719 0.917969 -2.582031 c 0.570312 -0.570313 1.40625 -0.917969 2.582031 -0.917969 z m 2.5 0 h 1.5 c 1.175781 0 2.011719 0.347656 2.582031 0.917969 c 0.570313 0.570312 0.917969 1.40625 0.917969 2.582031 v 3.5 h -5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMouseprimaryclicksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMouseprimaryclicksymbolic;
