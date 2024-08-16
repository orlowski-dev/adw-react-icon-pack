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
        <path d="m 0 7 c 0 2.40625 1.058594 3.65625 2.5 4.492188 l -0.5 -0.867188 v 2.875 c 0 1.382812 1.117188 2.5 2.5 2.5 s 2.5 -1.117188 2.5 -2.5 v -0.5 h -2 v 0.5 c 0 1.382812 1.117188 2.5 2.5 2.5 s 2.5 -1.117188 2.5 -2.5 v -0.5 h -2 v 0.5 c 0 1.382812 1.117188 2.5 2.5 2.5 s 2.5 -1.117188 2.5 -2.496094 l 0.007812 -1.9375 l -0.558593 0.894532 c 2.941406 -1.445313 3.550781 -3.140626 3.550781 -5.460938 c 0 -3.960938 -3.65625 -7 -8 -7 s -8 3.039062 -8 7 z m 14 0 c 0 1.710938 -0.3125 2.621094 -2.433594 3.667969 c -0.183594 0.089843 -0.367187 0.175781 -0.554687 0.253906 l -0.011719 2.578125 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -0.5 h -2 v 0.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -0.5 h -2 v 0.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -3.480469 c -0.171875 -0.082031 -0.335938 -0.167969 -0.5 -0.261719 c -0.925781 -0.535156 -1.5 -1.164062 -1.5 -2.757812 c 0 -2.6875 2.589844 -5 6 -5 s 6 2.3125 6 5 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 6 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
            <path d="m 12 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwSkullsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSkullsymbolic;
