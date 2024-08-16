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
        <path d="m 7.417969 6.1875 l -7 5 c -0.355469 0.25 -0.5039065 0.703125 -0.371094 1.117188 c 0.132813 0.414062 0.519531 0.695312 0.953125 0.695312 h 14 c 0.433594 0 0.820312 -0.28125 0.953125 -0.695312 c 0.132813 -0.414063 -0.015625 -0.867188 -0.371094 -1.117188 l -7 -5 c -0.347656 -0.25 -0.816406 -0.25 -1.164062 0 z m 0.582031 2.042969 l 3.878906 2.769531 h -7.757812 z m 0 0"/>
        <path d="m 8.003906 1 c -1.640625 0 -2.992187 1.355469 -2.992187 2.996094 v 0.019531 c 0 0.550781 0.445312 1 1 1 c 0.550781 0 1 -0.449219 1 -1 v -0.019531 c 0 -0.5625 0.429687 -0.996094 0.992187 -0.996094 s 0.996094 0.433594 0.996094 0.996094 v 0.007812 c 0 0.5625 -0.433594 0.996094 -0.996094 0.996094 h -0.003906 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -0.414062 c 1.105469 -0.441407 2 -1.324219 2 -2.582032 v -0.007812 c 0 -1.640625 -1.355469 -2.996094 -2.996094 -2.996094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwClothingstoresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwClothingstoresymbolic;
