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
        <path d="m 8.066406 1.21875 c -0.285156 0 -0.5625 0.121094 -0.753906 0.335938 l -5.125 5.78125 c -0.261719 0.292968 -0.324219 0.714843 -0.164062 1.074218 c 0.164062 0.359375 0.519531 0.589844 0.914062 0.589844 h 10.25 c 0.394531 0 0.75 -0.230469 0.910156 -0.589844 c 0.164063 -0.359375 0.097656 -0.78125 -0.164062 -1.074218 l -5.125 -5.78125 c -0.1875 -0.210938 -0.457032 -0.335938 -0.742188 -0.335938 z m -0.003906 2.507812 l 2.902344 3.273438 h -5.804688 z m 0 0"/>
        <path d="m 6 10 c -0.550781 0 -1 0.449219 -1 1 v 3 c 0 0.550781 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 z m 1 2 h 2 v 1 h -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwKeyboardcapslocksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardcapslocksymbolic;
