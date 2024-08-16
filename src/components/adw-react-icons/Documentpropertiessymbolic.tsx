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
      <path d="m 4 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 h 5.585938 l 3.414062 3.414062 v 6.585938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -7 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -4 -4 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 4.640625 6.167969 c -0.199219 0.003906 -0.402344 0.019531 -0.597656 0.046875 l 1.171875 2.074218 c 0.242187 0.425782 -0.027344 0.914063 -0.539063 1.210938 l -0.925781 0.53125 c -0.515625 0.289062 -1.089844 0.25 -1.332031 -0.175781 l -1.171875 -2.074219 c -0.25 0.308594 -0.476563 0.648438 -0.617188 1.019531 c -0.679687 1.761719 0.285156 3.46875 2.152344 3.804688 c 0.386719 0.074219 0.800781 0.054687 1.191406 0.007812 c 0.03125 -0.007812 1.859375 3.386719 1.859375 3.386719 l 4.167969 0.003906 l -3.199219 -4.957031 c 0.246094 -0.308594 0.445313 -0.652344 0.585938 -1.019531 c 0.679687 -1.765625 -0.285157 -3.472656 -2.148438 -3.808594 c -0.195312 -0.039062 -0.398437 -0.050781 -0.597656 -0.046875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDocumentpropertiessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDocumentpropertiessymbolic;
