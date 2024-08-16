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
      <path d="m 7.007812 0 c -0.519531 0 -1.035156 0.136719 -1.5 0.402344 c -0.925781 0.535156 -1.5 1.527344 -1.5 2.597656 v 7 h -3.9999995 v 3 c 0 1.070312 0.5742185 2.066406 1.4999995 2.601562 c 0.464844 0.265626 0.984376 0.398438 1.5 0.398438 v 0.007812 l 7 -0.003906 v -0.003906 h 0.015626 c 0.792968 0 1.558593 -0.316406 2.121093 -0.875 c 0.558594 -0.5625 0.878907 -1.328125 0.878907 -2.125 c 0 -0.058594 -0.003907 -0.117188 -0.015626 -0.175781 v -6.824219 h 3 v -3 c 0 -0.796875 -0.316406 -1.558594 -0.878906 -2.121094 s -1.324218 -0.878906 -2.121094 -0.878906 z m 0 2 c 0.171876 0 0.34375 0.046875 0.5 0.136719 c 0.3125 0.175781 0.5 0.503906 0.5 0.863281 v 3 h 3 v 7 h 0.015626 c 0 0.265625 -0.105469 0.519531 -0.292969 0.707031 c -0.191407 0.1875 -0.445313 0.292969 -0.707031 0.292969 c -0.023438 0 -0.050782 0 -0.070313 0.003906 l -4.125 0.003906 c 0.113281 -0.320312 0.179687 -0.660156 0.179687 -1.007812 v -10 c 0 -0.359375 0.1875 -0.6875 0.5 -0.863281 c 0.15625 -0.089844 0.328126 -0.136719 0.5 -0.136719 z m 2.820313 0 h 3.179687 c 0.265626 0 0.519532 0.105469 0.707032 0.292969 s 0.292968 0.441406 0.292968 0.707031 v 1 h -4 v -1 c 0 -0.347656 -0.066406 -0.683594 -0.179687 -1 z m -7.820313 10 h 2 v 1 c 0 0.359375 -0.1875 0.6875 -0.5 0.867188 c -0.3125 0.179687 -0.6875 0.179687 -1 0 c -0.3125 -0.179688 -0.5 -0.507813 -0.5 -0.867188 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPapyrusVerticalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPapyrusVerticalSymbolic;
