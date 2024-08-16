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
        <path d="m 3.15625 10 h 10.6875 c 0.636719 0 1.15625 0.519531 1.15625 1.15625 v 1.6875 c 0 0.636719 -0.519531 1.15625 -1.15625 1.15625 h -10.6875 c -0.636719 0 -1.15625 -0.519531 -1.15625 -1.15625 v -1.6875 c 0 -0.636719 0.519531 -1.15625 1.15625 -1.15625 z m 0 0"/>
        <path d="m 9.15625 5 c -0.640625 0 -1.15625 0.515625 -1.15625 1.15625 v 1.6875 c 0 0.640625 0.515625 1.15625 1.15625 1.15625 h 4.6875 c 0.640625 0 1.15625 -0.515625 1.15625 -1.15625 v -1.6875 c 0 -0.640625 -0.515625 -1.15625 -1.15625 -1.15625 z m -0.046875 1 h 4.78125 c 0.0625 0 0.109375 0.046875 0.109375 0.109375 v 1.78125 c 0 0.0625 -0.050781 0.109375 -0.109375 0.109375 h -4.78125 c -0.0625 0 -0.109375 -0.046875 -0.109375 -0.109375 v -1.78125 c 0 -0.0625 0.046875 -0.109375 0.109375 -0.109375 z m 0 0"/>
        <path d="m 7.503906 1.882812 l -3.5 3.5 l -1.503906 -1.527343 l -1 0.976562 l 2.496094 2.535157 l 4.5 -4.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGeneralpropertiessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGeneralpropertiessymbolic;
