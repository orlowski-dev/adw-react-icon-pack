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
      <path d="m 8 0 v 1.5 c 0 0.132812 -0.054688 0.261719 -0.144531 0.355469 c -0.09375 0.09375 -0.21875 0.144531 -0.347657 0.144531 h -3.011718 c -0.535156 0 -1.03125 0.289062 -1.296875 0.75 c -0.265625 0.464844 -0.265625 1.035156 0 1.5 c 0.265625 0.460938 0.761719 0.75 1.292969 0.75 h 3.011718 c 0.179688 0 0.339844 0.09375 0.429688 0.25 c 0.042968 0.074219 0.066406 0.164062 0.066406 0.25 v 0.5 h -5 c -1.644531 0 -3 1.355469 -3 3 v 4 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -0.867188 -0.378906 -1.648438 -0.976562 -2.199219 l -1.40625 1.402344 c 0.234374 0.179687 0.382812 0.460937 0.382812 0.796875 v 3 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -3 c 0 -0.570312 0.5 -1 1 -1 h 5.191406 l 1.988282 -2 h -1.179688 v -0.5 c 0 -0.257812 -0.066406 -0.515625 -0.199219 -0.75 c -0.265625 -0.460938 -0.761719 -0.75 -1.296875 -0.75 h -3.011718 c -0.175782 0 -0.335938 -0.09375 -0.425782 -0.25 c -0.089844 -0.152344 -0.089844 -0.347656 0 -0.5 c 0.089844 -0.15625 0.25 -0.25 0.429688 -0.25 h 3.011718 c 0.398438 0 0.777344 -0.160156 1.054688 -0.441406 c 0.28125 -0.28125 0.4375 -0.660156 0.4375 -1.058594 v -1.5 z m 7 3 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -6.292969 6.316406 v 1.390625 h 1.390625 l 6.316406 -6.292969 l -0.003906 -0.003906 c 0.191406 -0.183594 0.296875 -0.4375 0.296875 -0.703125 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTabletSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTabletSymbolic;
