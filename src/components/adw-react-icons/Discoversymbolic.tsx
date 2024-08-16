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
        <path d="m 5 5 c -0.574219 0 -2 1 -2 5 c 0 0.5 0.488281 1 1 1 h 1.8125 l -1.832031 3.523438 c -0.253907 0.488281 -0.0625 1.09375 0.425781 1.347656 s 1.09375 0.066406 1.347656 -0.421875 l 2.015625 -3.824219 l -0.144531 -0.441406 l 0.230469 0.410156 l 2.0625 3.863281 c 0.25 0.488281 0.851562 0.683594 1.34375 0.4375 c 0.414062 -0.210937 0.628906 -0.679687 0.515625 -1.132812 l 0.007812 -0.003907 l -0.011718 -0.027343 c -0.019532 -0.0625 -0.042969 -0.125 -0.074219 -0.183594 l -2.03125 -3.996094 c -0.011719 -0.011719 -0.019531 -0.027343 -0.03125 -0.042969 l -0.632813 -1.25 v -1.695312 l 2.269532 2.027344 c 0.367187 0.382812 1.070312 0.367187 1.421874 -0.035156 c 0.351563 -0.402344 0.277344 -1.101563 -0.152343 -1.417969 l -2.988281 -2.65625 c -0.355469 -0.3125 -0.8125 -0.484375 -1.289063 -0.480469 l -1.265625 0.015625 v -0.015625 z m 0 0"/>
        <path d="m 10.054688 1.980469 c 0 1.066406 -0.867188 1.933593 -1.9375 1.933593 c -1.066407 0 -1.933594 -0.867187 -1.933594 -1.933593 c 0 -1.070313 0.867187 -1.9375002 1.933594 -1.9375002 c 1.070312 0 1.9375 0.8671872 1.9375 1.9375002 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDiscoversymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDiscoversymbolic;
