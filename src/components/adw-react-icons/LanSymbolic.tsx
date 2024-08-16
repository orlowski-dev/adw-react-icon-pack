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
        <path d="m 3.742188 0.00390625 c -0.953126 0.00390625 -1.75 0.80078175 -1.75 1.74999975 v 5.496094 c 0 0.953125 0.796874 1.75 1.75 1.75 h 0.75 s 0.5 0.007812 0.5 0.507812 c 0 0.492188 -0.5 0.492188 -0.5 0.492188 h -0.5 v 1.992188 h 8 v -2 h -0.5 s -0.5 0.007812 -0.5 -0.492188 s 0.5 -0.507812 0.5 -0.507812 h 0.75 c 0.953124 0 1.75 -0.796876 1.75 -1.75 v -5.492188 c 0 -0.953125 -0.796876 -1.75 -1.75 -1.75 z m 0.25 1.99999975 l 8 -0.003906 v 4.992188 l -8 0.007812 z m 0 0"/>
        <path d="m 6.960938 10.003906 l 0.03125 3.996094 h -5.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 h 13 c 0.277343 0 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222657 -0.5 -0.5 -0.5 h -5.5 v -4 z m 0 0" fill-rule="evenodd"/>
    </g>
    </svg>
  );
};

const AdwLanSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLanSymbolic;
