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
      <defs
     id="defs165735" />
  <sodipodi:namedview
     id="namedview165733"
     pagecolor="#505050"
     bordercolor="#ffffff"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#505050"
     showgrid="false"
     inkscape:current-layer="svg165731" />
  <g
     fill="#2e3436"
     id="g165729">
    <path
       d="M 9.5,6 C 9.777344,6 10,6.222656 10,6.5 v 1 C 10,7.777344 9.777344,8 9.5,8 h -5 C 4.222656,8 4,7.777344 4,7.5 v -1 C 4,6.222656 4.222656,6 4.5,6 Z m 0,3 C 9.777344,9 10,9.222656 10,9.5 v 1 C 10,10.777344 9.777344,11 9.5,11 h -7 C 2.222656,11 2,10.777344 2,10.5 v -1 C 2,9.222656 2.222656,9 2.5,9 Z m 0,3 c 0.277344,0 0.5,0.222656 0.5,0.5 v 1 C 10,13.777344 9.777344,14 9.5,14 h -9 C 0.222656,14 0,13.777344 0,13.5 v -1 C 0,12.222656 0.222656,12 0.5,12 Z m 0,0"
       id="path165725" />
    <path
       d="m 13 16 c 0.550781 0 1 -0.449219 1 -1 v -11 h 2 v -1 h -0.007812 c 0.003906 -0.265625 -0.101563 -0.519531 -0.285157 -0.707031 l -2 -2 c -0.390625 -0.3906252 -1.023437 -0.3906252 -1.414062 0 l -2 2 c -0.183594 0.1875 -0.289063 0.441406 -0.289063 0.707031 h -0.003906 v 1 h 2 v 11 c 0 0.550781 0.449219 1 1 1 z m 0 0"
       id="path165727" />
  </g>
    </svg>
  );
};

const AdwViewSortAscendingRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewSortAscendingRtlSymbolic;
