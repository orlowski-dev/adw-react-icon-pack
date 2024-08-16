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
        <path d="m 4.433594 13.988281 c -0.265625 0 -0.492188 -0.226562 -0.492188 -0.496093 c 0 -0.265626 0.226563 -0.492188 0.492188 -0.492188 c 0.269531 0 0.496094 0.226562 0.496094 0.492188 c 0 0.269531 -0.226563 0.496093 -0.496094 0.496093 z m 0 -2.988281 c -1.382813 0 -2.492188 1.113281 -2.492188 2.492188 c 0 1.382812 1.109375 2.496093 2.492188 2.496093 c 1.382812 0 2.496094 -1.113281 2.496094 -2.496093 c 0 -1.378907 -1.113282 -2.492188 -2.496094 -2.492188 z m 0 0"/>
        <path d="m 2.714844 12.496094 c -0.402344 0 -0.734375 -0.335938 -0.734375 -0.738282 v -2.734374 l -1 1 h 11.816406 c 0.65625 0 1.195313 0.539062 1.195313 1.195312 v 0.316406 c 0 0.523438 -0.433594 0.960938 -0.957032 0.960938 c -0.554687 0 -1 0.449218 -1 1 c 0 0.550781 0.449219 1 1 1 c 1.640625 0 2.957032 -1.324219 2.957032 -2.960938 v -0.316406 c 0 -1.769531 -1.425782 -3.195312 -3.195313 -3.195312 h -11.816406 c -0.550781 0 -1.0000002 0.449218 -1.0000002 1 v 2.730468 c -0.0039063 1.515625 1.2148432 2.738282 2.7304692 2.742188 c 0.550781 0 1 -0.445313 1 -1 c 0 -0.550782 -0.445313 -1 -0.996094 -1 z m 0 0"/>
        <path d="m 11.507812 13.988281 c -0.269531 0 -0.496093 -0.226562 -0.496093 -0.496093 c 0 -0.265626 0.226562 -0.492188 0.496093 -0.492188 c 0.265626 0 0.492188 0.226562 0.492188 0.492188 c 0 0.269531 -0.226562 0.496093 -0.492188 0.496093 z m 0 -2.988281 c -1.382812 0 -2.496093 1.113281 -2.496093 2.492188 c 0 1.382812 1.113281 2.496093 2.496093 2.496093 c 1.382813 0 2.492188 -1.113281 2.492188 -2.496093 c 0 -1.378907 -1.109375 -2.492188 -2.492188 -2.492188 z m 0 0"/>
        <path d="m 1.992188 11.964844 v -5.046875 c 0 -0.535157 0.441406 -0.976563 0.976562 -0.976563 h 5.011719 c 0.847656 0 1.632812 0.460938 2.042969 1.199219 l 0.753906 1.351563 c 0.175781 0.3125 0.5 0.507812 0.859375 0.515624 c 0.359375 0.003907 0.691406 -0.183593 0.875 -0.488281 c 0.183593 -0.308593 0.1875 -0.691406 0.011719 -1.003906 l -0.75 -1.347656 c -0.769532 -1.375 -2.21875 -2.226563 -3.792969 -2.226563 h -5.011719 c -1.648438 0 -2.9765625 1.328125 -2.9765625 2.976563 v 5.046875 c 0 0.550781 0.4453125 1 1.0000005 1 c 0.550781 0 1 -0.449219 1 -1 z m 0 0"/>
        <path d="m 12 0.515625 v 1.484375 h -1 v 1 c 0 1.105469 0.894531 2 2 2 v 1 c 0 0.550781 -0.449219 1 -1 1 h -1 v 1 h 1 c 1.105469 0 2 -0.894531 2 -2 v -1 c 1.105469 0 2 -0.894531 2 -2 v -1 h -1 v -1.484375 c 0 -0.285156 -0.230469 -0.515625 -0.515625 -0.515625 c -0.277344 0.0078125 -0.492187 0.242188 -0.484375 0.515625 v 1.484375 h -1 v -1.484375 c 0 -0.285156 -0.230469 -0.515625 -0.515625 -0.515625 c -0.277344 0.0078125 -0.492187 0.242188 -0.484375 0.515625 z m 0 0"/>
        <path d="m 6.5 13 h 3 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -3 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEvSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEvSymbolic;
