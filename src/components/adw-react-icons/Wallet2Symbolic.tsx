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
      <path d="m 10.882812 0.101562 c -0.375 0.007813 -0.765624 0.070313 -1.15625 0.1875 l -7.875 1.972657 c -0.128906 0.03125 -0.25 0.089843 -0.359374 0.167969 c -0.210938 0.164062 -0.574219 0.363281 -0.917969 0.789062 c -0.34375 0.421875 -0.574219 1.058594 -0.574219 1.78125 v 8 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.292969 -0.839844 -2.40625 -2 -2.824219 v -1.207031 c -0.03125 -0.980469 -0.527344 -1.898438 -1.34375 -2.410156 c -0.410156 -0.253906 -0.882812 -0.402344 -1.390625 -0.445313 c -0.125 -0.011719 -0.253906 -0.0156248 -0.382813 -0.011719 z m 0.03125 1.992188 c 0.308594 -0.007812 0.527344 0.066406 0.683594 0.164062 c 0.246094 0.152344 0.390625 0.375 0.402344 0.773438 v 0.96875 h -8.863281 l 7.074219 -1.769531 c 0.019531 -0.007813 0.039062 -0.011719 0.054687 -0.015625 c 0.25 -0.078125 0.464844 -0.113282 0.648437 -0.117188 z m -7.914062 3.90625 h 10 c 0.570312 0 1 0.429688 1 1 v 6 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -6 c 0 -0.570312 0.429688 -1 1 -1 z m 9 3 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWallet2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWallet2Symbolic;
