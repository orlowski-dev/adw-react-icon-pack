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
      <path d="m 2.992188 1 c -1.070313 0 -2.0625 0.574219 -2.597657 1.5 c -0.535156 0.925781 -0.535156 2.074219 0 3 c 0.535157 0.925781 1.527344 1.5 2.597657 1.5 h 1 l 0.007812 7 v 2 h 12 v -2 l -0.007812 -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 7.183593 c -0.113281 0.316406 -0.183593 0.648438 -0.183593 1 s 0.070312 0.683594 0.183593 1 h -7.183593 c -0.359376 0 -0.6875 -0.1875 -0.867188 -0.5 c -0.175781 -0.3125 -0.175781 -0.6875 0 -1 c 0.179688 -0.3125 0.507812 -0.5 0.867188 -0.5 z m 10 0 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 1.003906 3.8125 l 0.003906 7.1875 h -8 l -0.007812 -7 h 7 c 0.351562 0 0.6875 -0.074219 1 -0.1875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRollVerticalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRollVerticalSymbolic;
