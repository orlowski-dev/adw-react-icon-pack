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
      <path d="m 6 0 v 1.292969 c -2.300781 0.691406 -4.109375 2.53125 -4.75 4.851562 c -0.730469 0.300781 -1.25 1.019531 -1.25 1.855469 c 0 0.832031 0.519531 1.550781 1.25 1.851562 c 0.816406 2.960938 3.535156 5.148438 6.75 5.148438 s 5.933594 -2.1875 6.75 -5.148438 c 0.730469 -0.300781 1.25 -1.019531 1.25 -1.851562 c 0 -0.835938 -0.519531 -1.554688 -1.253906 -1.855469 c -0.636719 -2.320312 -2.445313 -4.160156 -4.746094 -4.851562 v -1.292969 z m 1 1 h 2 v 2 h -2 z m -1 2.425781 v 0.574219 h 4 v -0.574219 c 1.292969 0.566407 2.304688 1.664063 2.75 3.019531 c -0.457031 0.367188 -0.75 0.929688 -0.75 1.554688 s 0.292969 1.1875 0.746094 1.554688 c -0.65625 1.996093 -2.535156 3.445312 -4.746094 3.445312 s -4.089844 -1.449219 -4.75 -3.445312 c 0.457031 -0.367188 0.75 -0.929688 0.75 -1.554688 s -0.292969 -1.1875 -0.75 -1.554688 c 0.449219 -1.351562 1.457031 -2.449218 2.75 -3.019531 z m -4 3.574219 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 12 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawCircleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawCircleSymbolic;
