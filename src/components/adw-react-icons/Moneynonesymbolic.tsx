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
        <path d="m 7 1 v 2 h -2 c -0.820312 0 -1.59375 0.339844 -2.148438 0.910156 l 1.410157 1.417969 c 0.1875 -0.207031 0.449219 -0.328125 0.734375 -0.328125 h 0.042968 h 1.960938 v 2 h -1.0625 l 3.0625 3.0625 v -1.0625 h 2 c 0.5625 0 0.996094 0.433594 0.996094 0.996094 s -0.433594 0.996094 -0.996094 0.996094 l -1.0625 0.007812 l 1.867188 1.867188 c 1.253906 -0.359376 2.191406 -1.507813 2.191406 -2.871094 c 0 -1.644532 -1.351563 -2.996094 -2.996094 -2.996094 h -2 v -2 h 4 v -2 h -4 v -2 z m -4.90625 4.277344 c -0.183594 0.742187 -0.082031 1.539062 0.3125 2.21875 c 0.53125 0.925781 1.523438 1.496094 2.59375 1.496094 v 0.011718 h 0.820312 z m 4.90625 4.90625 v 0.816406 h -4 v 2 h 4 v 2 h 2 v -2 h 0.820312 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMoneynonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoneynonesymbolic;
