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
      <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m -0.523438 2 h 0.023438 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -3.832031 c 0.765625 -0.511719 1.664062 -0.84375 2.628906 -0.957031 c 0.054687 -0.023438 0.113281 -0.039063 0.179687 -0.042969 z m -3.957031 2 h 6.480469 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -7.203125 c 0.207031 -0.359375 0.449219 -0.695312 0.722656 -1 z m -1.183593 2 h 8.164062 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -8.417969 c 0.058594 -0.34375 0.144531 -0.679688 0.253907 -1 z m -0.335938 2 h 8.5 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -8.417969 c -0.054687 -0.324219 -0.082031 -0.660156 -0.082031 -1 z m 0.335938 2 h 7.664062 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -7.203125 c -0.183594 -0.316406 -0.335937 -0.648438 -0.460937 -1 z m 1.183593 2 h 4.980469 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -3.832031 c -0.425781 -0.28125 -0.8125 -0.621094 -1.148438 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwImageadjustshadowssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImageadjustshadowssymbolic;
