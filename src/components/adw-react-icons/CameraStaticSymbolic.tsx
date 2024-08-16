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
        <path d="m 2.402344 2 c -1.328125 0 -2.39843775 1.070312 -2.39843775 2.402344 v 7.199218 c 0 1.328126 1.07031275 2.398438 2.39843775 2.398438 h 7.199218 c 1.328126 0 2.402344 -1.070312 2.402344 -2.398438 v -7.199218 c 0 -1.332032 -1.074218 -2.402344 -2.402344 -2.402344 z m 2.582031 3.988281 l 0.015625 0.011719 h 0.003906 v 0.003906 l 1 0.996094 l 0.996094 -0.996094 v -0.003906 h 0.003906 l 0.015625 -0.011719 l 0.011719 0.011719 h 0.96875 v 0.972656 l 0.007812 0.007813 l -0.007812 0.003906 v 0.015625 h -0.015625 l -0.992187 0.988281 l 1.015624 1.007813 l -0.003906 0.003906 v 1 h -1 v -0.027344 l -1 -0.996094 l -1.003906 0.996094 v 0.027344 h -1 v -1 l -0.003906 -0.003906 l 1.015625 -1.007813 l -0.992188 -0.988281 h -0.015625 v -0.015625 l -0.007812 -0.007813 l 0.007812 -0.003906 v -0.972656 h 0.96875 z m 0 0"/>
        <path d="m 12.003906 8 l 3 -3 h 1 v 6 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameraStaticSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraStaticSymbolic;
