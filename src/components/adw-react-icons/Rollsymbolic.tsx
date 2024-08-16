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
      <path d="m 12.007812 0 c -0.519531 0 -1.035156 0.136719 -1.5 0.402344 c -0.925781 0.535156 -1.5 1.527344 -1.5 2.597656 v 1 l -7 0.007812 h -1.9999995 v 12 h 1.9999995 l 10 -0.007812 c 1.644532 0 3 -1.355469 3 -3 v -10 c 0 -1.070312 -0.574218 -2.0625 -1.5 -2.597656 c -0.464843 -0.265625 -0.980468 -0.402344 -1.5 -0.402344 z m 0 2 c 0.171876 0 0.34375 0.046875 0.5 0.136719 c 0.3125 0.175781 0.5 0.503906 0.5 0.863281 v 7.1875 c -0.316406 -0.113281 -0.648437 -0.1875 -1 -0.1875 c -0.351562 0 -0.683593 0.074219 -1 0.1875 v -7.1875 c 0 -0.359375 0.1875 -0.6875 0.5 -0.863281 c 0.15625 -0.089844 0.328126 -0.136719 0.5 -0.136719 z m -3 4 v 7 c 0 0.351562 0.070313 0.6875 0.1875 1 l -7.1875 0.007812 v -8 z m 3 6 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRollsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRollsymbolic;
