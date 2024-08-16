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
        <path d="m 9.640625 1.074219 c -2.632813 -0.234375 -5.316406 0.046875 -7.074219 0.921875 c -0.4375 0.21875 -0.8125 0.46875 -1.105468 0.816406 c -0.292969 0.347656 -0.503907 0.84375 -0.453126 1.351562 c 0.097657 1.007813 0.902344 1.5625 1.832032 1.96875 c 1.859375 0.804688 4.613281 1.042969 7.199218 0.75 c 1.296876 -0.144531 2.394532 -0.414062 3.257813 -0.8125 c 0.429687 -0.203124 0.808594 -0.433593 1.121094 -0.753906 c 0.316406 -0.320312 0.582031 -0.785156 0.582031 -1.316406 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 c 0 -0.105469 0.058594 -0.152344 -0.011719 -0.082031 c -0.066406 0.070312 -0.25 0.203125 -0.535156 0.335937 c -0.5625 0.261719 -1.496094 0.511719 -2.636719 0.640625 c -2.28125 0.257813 -4.910156 -0.046875 -6.179687 -0.597656 c -0.523438 -0.226563 -0.515625 -0.316406 -0.527344 -0.273437 c 0.074219 -0.0625 0.144531 -0.136719 0.347656 -0.234376 c 1.097657 -0.550781 3.675781 -0.929687 6.007813 -0.71875 c 0.550781 0.046876 1.035156 -0.359374 1.082031 -0.90625 c 0.023437 -0.265624 -0.058594 -0.53125 -0.226563 -0.734374 c -0.171874 -0.203126 -0.414062 -0.332032 -0.679687 -0.351563 z m 0 0"/>
        <path d="m 4.035156 7.527344 c -0.527344 -0.15625 -1.082031 0.148437 -1.238281 0.679687 c -0.074219 0.253907 -0.042969 0.527344 0.082031 0.761719 c 0.128906 0.230469 0.34375 0.40625 0.597656 0.480469 c 1.261719 0.367187 2.855469 0.550781 4.523438 0.550781 s 3.261719 -0.183594 4.523438 -0.550781 c 0.53125 -0.15625 0.835937 -0.710938 0.679687 -1.242188 s -0.710937 -0.835937 -1.242187 -0.679687 c -0.988282 0.289062 -2.445313 0.472656 -3.960938 0.472656 s -2.972656 -0.183594 -3.964844 -0.472656 z m 0 0"/>
        <path d="m 10.765625 10.6875 c -1.242187 0.300781 -2.785156 0.390625 -4.207031 0.230469 c -0.550782 -0.0625 -1.042969 0.332031 -1.105469 0.882812 c -0.0625 0.546875 0.335937 1.042969 0.882813 1.105469 c 1.652343 0.183594 3.382812 0.09375 4.894531 -0.269531 c 0.261719 -0.0625 0.484375 -0.226563 0.621093 -0.453125 c 0.140626 -0.226563 0.183594 -0.496094 0.121094 -0.757813 c -0.0625 -0.257812 -0.222656 -0.480469 -0.449218 -0.617187 c -0.226563 -0.136719 -0.5 -0.179688 -0.757813 -0.121094 z m 0 0"/>
        <path d="m 6.324219 13.886719 c -0.546875 -0.070313 -1.046875 0.316406 -1.121094 0.863281 c -0.03125 0.261719 0.039063 0.53125 0.199219 0.738281 c 0.160156 0.210938 0.402344 0.351563 0.664062 0.386719 c 0.769532 0.097656 1.570313 0.136719 2.371094 0.113281 c 0.550781 -0.015625 0.984375 -0.472656 0.96875 -1.027343 c -0.011719 -0.550782 -0.472656 -0.984376 -1.027344 -0.972657 c -0.695312 0.023438 -1.394531 -0.011719 -2.054687 -0.101562 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWeatherTornadoSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWeatherTornadoSymbolic;
