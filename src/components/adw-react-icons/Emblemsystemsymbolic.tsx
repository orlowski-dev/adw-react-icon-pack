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
      <path d="m 8 0 c -0.550781 0 -1 0.449219 -1 1 v 0.238281 c 0 0.464844 -0.378906 0.902344 -0.820312 1.046875 c -0.023438 0.007813 -0.042969 0.011719 -0.0625 0.019532 c -0.445313 0.148437 -1.007813 0.015624 -1.28125 -0.359376 l -0.140626 -0.195312 c -0.15625 -0.214844 -0.390624 -0.359375 -0.652343 -0.398438 c -0.261719 -0.042968 -0.53125 0.019532 -0.742188 0.175782 c -0.449219 0.324218 -0.550781 0.949218 -0.222656 1.398437 l 0.140625 0.199219 c 0.277344 0.375 0.226562 0.953125 -0.050781 1.328125 c -0.011719 0.015625 -0.023438 0.035156 -0.035157 0.050781 c -0.273437 0.378906 -0.804687 0.601563 -1.25 0.457032 l -0.230468 -0.074219 c -0.523438 -0.171875 -1.089844 0.117187 -1.257813 0.640625 c -0.171875 0.527344 0.113281 1.089844 0.640625 1.261718 l 0.222656 0.074219 c 0.445313 0.144531 0.738282 0.636719 0.75 1.101563 v 0.070312 c 0.015626 0.464844 -0.304687 0.960938 -0.746093 1.105469 l -0.226563 0.070313 c -0.527344 0.171874 -0.8125 0.738281 -0.640625 1.261718 c 0.167969 0.523438 0.734375 0.8125 1.257813 0.640625 l 0.230468 -0.074219 c 0.445313 -0.144531 0.976563 0.078126 1.25 0.457032 c 0.011719 0.015625 0.027344 0.035156 0.039063 0.050781 c 0.277344 0.375 0.324219 0.953125 0.050781 1.328125 l -0.144531 0.203125 c -0.324219 0.445313 -0.226563 1.070313 0.222656 1.394531 c 0.445313 0.324219 1.070313 0.226563 1.394531 -0.21875 l 0.144532 -0.199218 c 0.273437 -0.378907 0.835937 -0.507813 1.277344 -0.359376 c 0.019531 0.007813 0.042968 0.011719 0.0625 0.019532 c 0.445312 0.140625 0.820312 0.578125 0.820312 1.046875 v 0.238281 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -0.238281 c 0 -0.46875 0.378906 -0.90625 0.820312 -1.046875 c 0.023438 -0.007813 0.042969 -0.015625 0.066407 -0.023438 c 0.441406 -0.144531 1.003906 -0.015625 1.277343 0.363282 l 0.144532 0.199218 c 0.324218 0.445313 0.949218 0.542969 1.394531 0.21875 c 0.445313 -0.324218 0.546875 -0.949218 0.222656 -1.394531 l -0.148437 -0.203125 c -0.273438 -0.375 -0.226563 -0.953125 0.050781 -1.328125 c 0.015625 -0.015625 0.027344 -0.035156 0.039063 -0.050781 c 0.273437 -0.378906 0.804687 -0.601563 1.25 -0.457032 l 0.234374 0.078126 c 0.523438 0.167968 1.085938 -0.121094 1.257813 -0.644532 c 0.171875 -0.523437 -0.117187 -1.089844 -0.640625 -1.257812 l -0.230469 -0.074219 c -0.445312 -0.144531 -0.734375 -0.640625 -0.746093 -1.105469 c 0 -0.023437 0 -0.046875 0 -0.070312 c -0.015626 -0.464844 0.300781 -0.957032 0.746093 -1.101563 l 0.230469 -0.074219 c 0.523438 -0.171874 0.8125 -0.734374 0.640625 -1.261718 c -0.171875 -0.523438 -0.734375 -0.8125 -1.257813 -0.640625 l -0.230468 0.074219 c -0.445313 0.144531 -0.980469 -0.078126 -1.253906 -0.457032 c -0.011719 -0.015625 -0.023438 -0.035156 -0.035157 -0.050781 c -0.277343 -0.375 -0.324219 -0.953125 -0.050781 -1.328125 l 0.144531 -0.199219 c 0.324219 -0.445312 0.226563 -1.074219 -0.222656 -1.398437 c -0.214844 -0.15625 -0.480469 -0.21875 -0.742187 -0.179688 c -0.265626 0.042969 -0.5 0.1875 -0.652344 0.402344 l -0.144532 0.195312 c -0.273437 0.378907 -0.835937 0.507813 -1.28125 0.363282 c -0.019531 -0.007813 -0.039062 -0.015625 -0.0625 -0.023438 c -0.441406 -0.140625 -0.820312 -0.578125 -0.820312 -1.046875 v -0.238281 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 4 c 0.871094 0 1.675781 0.273438 2.332031 0.742188 c 0.003907 0.007812 0.011719 0.015624 0.019531 0.023437 c 0.011719 0.003906 0.019532 0.007813 0.03125 0.015625 c 0.660157 0.484375 1.160157 1.171875 1.421876 1.976562 v 0.007813 s 0.003906 0.003906 0.003906 0.007813 c 0.292968 0.851562 0.15625 1.65625 0 2.457031 c 0 0 -0.003906 0.003906 -0.003906 0.007812 v 0.003907 c -0.261719 0.800781 -0.757813 1.488281 -1.414063 1.976562 c -0.015625 0.003906 -0.027344 0.011719 -0.039063 0.019531 c -0.007812 0.003907 -0.015624 0.011719 -0.019531 0.019531 c -0.65625 0.46875 -1.460937 0.742188 -2.332031 0.742188 c -0.855469 0 -1.644531 -0.265625 -2.289062 -0.714844 c -0.019532 -0.015625 -0.042969 -0.035156 -0.0625 -0.046875 c -0.011719 -0.007812 -0.023438 -0.015625 -0.035157 -0.019531 c -0.652343 -0.484375 -1.148437 -1.160156 -1.40625 -1.945312 c -0.003906 -0.015626 -0.007812 -0.023438 -0.011719 -0.035157 c -0.003906 -0.007812 -0.007812 -0.015625 -0.011718 -0.019531 c -0.285156 -0.847656 -0.148438 -1.644531 0 -2.4375 c 0.003906 -0.007812 0.007812 -0.011719 0.011718 -0.019531 c 0.003907 -0.011719 0.007813 -0.023438 0.011719 -0.039063 c 0.261719 -0.785156 0.757813 -1.460937 1.414063 -1.945312 c 0.007812 -0.003906 0.019531 -0.007813 0.027344 -0.015625 c 0.019531 -0.011719 0.042968 -0.03125 0.058593 -0.046875 c 0.648438 -0.449219 1.4375 -0.714844 2.292969 -0.714844 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmblemsystemsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmblemsystemsymbolic;
