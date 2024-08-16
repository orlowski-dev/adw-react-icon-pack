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
        <path d="m 5 0 c -1.332031 0 -2.273438 0.8125 -2.644531 1.550781 c -0.371094 0.742188 -0.355469 1.449219 -0.355469 1.449219 l 0.03125 12.46875 l 4.734375 -1.894531 c -0.464844 -0.367188 -0.765625 -0.933594 -0.765625 -1.574219 v -0.269531 l -1.980469 0.789062 l -0.011719 -6.46875 c -0.003906 -0.027343 -0.003906 -0.058593 -0.007812 -0.085937 c 0 -0.027344 0.003906 -0.054688 0.003906 -0.082032 l -0.003906 -2.886718 c -0.007812 -0.648438 0.398438 -0.996094 1 -0.996094 h 6 c 0.695312 0.011719 1.003906 0.367188 1 1 l 0.019531 9.519531 l -2.019531 -0.808593 v 0.289062 c 0 0.632812 -0.292969 1.195312 -0.75 1.5625 l 4.777344 1.910156 l -0.027344 -12.476562 c 0 -0.003906 0.011719 -0.707032 -0.355469 -1.441406 c -0.371093 -0.742188 -1.3125 -1.554688 -2.644531 -1.554688 z m 0 0" fill-opacity="0.35"/>
        <path d="m 8.148438 3.007812 c -0.433594 -0.023437 -0.878907 0.046876 -1.300782 0.222657 c -1.117187 0.460937 -1.851562 1.558593 -1.851562 2.769531 h 2 c 0 -0.40625 0.242187 -0.765625 0.617187 -0.921875 c 0.378907 -0.15625 0.804688 -0.074219 1.089844 0.214844 c 0.289063 0.289062 0.375 0.714843 0.21875 1.089843 c -0.15625 0.378907 -0.515625 0.617188 -0.925781 0.617188 c -0.550782 0 -1 0.449219 -1 1 v 2 h 2 v -1.179688 c 0.789062 -0.277343 1.441406 -0.875 1.773437 -1.671874 c 0.464844 -1.117188 0.207031 -2.414063 -0.652343 -3.269532 c -0.535157 -0.535156 -1.238282 -0.835937 -1.96875 -0.871094 z m -0.152344 7.992188 c -0.550782 0 -1 0.449219 -1 1 c 0 0.554688 0.449218 1 1 1 c 0.554687 0 1 -0.445312 1 -1 c 0 -0.550781 -0.445313 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBookmarkmissingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBookmarkmissingsymbolic;
