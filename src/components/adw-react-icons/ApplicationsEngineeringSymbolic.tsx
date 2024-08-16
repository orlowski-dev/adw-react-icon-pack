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
        <path d="m 7.996094 8 c -3.996094 0 -5.996094 3 -5.996094 6 h -1.75 c -0.25 0 -0.25 0.15625 -0.25 0.25 v 1.5 c 0 0.25 0.136719 0.25 0.25 0.25 h 15.492188 c 0.195312 0.007812 0.25 -0.128906 0.25 -0.25 v -1.5 c 0.023437 -0.144531 0 -0.25 -0.25 -0.25 h -1.746094 c 0 -3 -2 -6 -6 -6 z m 0 3 c 2.351562 0 3 1.761719 3 3 h -5.996094 c 0 -1.199219 0.699219 -3 2.996094 -3 z m 0 0" fill-rule="evenodd"/>
        <path d="m 14.988281 0.601562 c -0.28125 -0.242187 -0.625 -0.421874 -0.964843 -0.5624995 l -0.023438 2.2304685 c -0.003906 0.460938 -0.453125 0.730469 -1.003906 0.730469 h -1 c -0.554688 -0.007812 -1.003906 -0.308594 -1 -0.769531 l 0.023437 -2.230469 c -0.347656 0.132812 -0.691406 0.304688 -0.976562 0.535156 c -1.378907 1.117188 -1.398438 2.949219 -0.042969 4.097656 c 0.285156 0.242188 0.625 0.421876 0.96875 0.5625 c 0.027344 0.011719 0.027344 2.054688 0.027344 2.054688 c 1.488281 0.75 2.351562 1.75 3 2.75 v -4.75 c 0.34375 -0.132812 0.664062 -0.320312 0.953125 -0.550781 c 1.378906 -1.117188 1.394531 -2.949219 0.039062 -4.097657 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwApplicationsEngineeringSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationsEngineeringSymbolic;
