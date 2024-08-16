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
      <g fill="#2e3436">
        <path d="m 3 5 v 0.003906 c -0.265625 0 -0.519531 0.105469 -0.707031 0.289063 l -2 2 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707031 0.285157 v 0.007812 h 1 v -2 h 5 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -5 v -2 z m 0 0"/>
        <path d="m 6.820312 1.097656 c 2.394532 -0.40625 4.910157 0.453125 6.546876 2.398438 c 2.175781 2.597656 2.175781 6.40625 0 9 c -2.179688 2.597656 -5.929688 3.257812 -8.863282 1.5625 c -0.230468 -0.132813 -0.398437 -0.351563 -0.46875 -0.605469 c -0.066406 -0.257813 -0.03125 -0.53125 0.101563 -0.761719 c 0.277343 -0.476562 0.886719 -0.640625 1.367187 -0.363281 c 2.105469 1.214844 4.765625 0.75 6.328125 -1.117187 c 1.5625 -1.863282 1.5625 -4.5625 0 -6.429688 c -1.5625 -1.863281 -4.222656 -2.332031 -6.328125 -1.113281 c -0.480468 0.273437 -1.089844 0.113281 -1.367187 -0.367188 c -0.132813 -0.226562 -0.167969 -0.5 -0.101563 -0.757812 c 0.070313 -0.257813 0.238282 -0.476563 0.46875 -0.609375 c 0.730469 -0.421875 1.515625 -0.699219 2.316406 -0.835938 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSystemlogoutsymbolicrtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemlogoutsymbolicrtl;
