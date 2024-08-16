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
      <path d="m 2.992188 1 c -0.796876 0 -1.558594 0.316406 -2.121094 0.878906 s -0.8789065 1.324219 -0.8789065 2.121094 v 8 c 0 0.519531 0.1367185 1.035156 0.4023435 1.5 c 0.535157 0.925781 1.527344 1.5 2.597657 1.5 h 10 c 1.644531 0 3 -1.355469 3 -3 v -8 c 0 -1.070312 -0.574219 -2.0625 -1.5 -2.597656 c -0.925782 -0.535156 -2.074219 -0.535156 -3 0 c -0.925782 0.535156 -1.5 1.527344 -1.5 2.597656 v 1 h -4 v -4 z m 0 2 h 1 v 6 h -1 c -0.347657 0 -0.683594 0.066406 -1 0.175781 v -5.175781 c 0 -0.265625 0.105468 -0.519531 0.292968 -0.707031 s 0.441406 -0.292969 0.707032 -0.292969 z m 10 0 c 0.171874 0 0.34375 0.046875 0.5 0.136719 c 0.3125 0.175781 0.5 0.503906 0.5 0.863281 v 5.1875 c -0.316407 -0.113281 -0.648438 -0.1875 -1 -0.1875 c -0.351563 0 -0.683594 0.074219 -1 0.1875 v -5.1875 c 0 -0.359375 0.1875 -0.6875 0.5 -0.863281 c 0.15625 -0.089844 0.328124 -0.136719 0.5 -0.136719 z m -7 4 h 4 v 5 c 0 0.351562 0.070312 0.683594 0.183593 1 h -7.183593 c -0.359376 0 -0.6875 -0.1875 -0.867188 -0.5 c -0.175781 -0.3125 -0.175781 -0.6875 0 -1 c 0.179688 -0.3125 0.507812 -0.5 0.867188 -0.5 h 3 z m 7 4 c 0.5625 0 1 0.4375 1 1 s -0.4375 1 -1 1 s -1 -0.4375 -1 -1 s 0.4375 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScrollonarollsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScrollonarollsymbolic;
