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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 2 h 1 s 1 0 1 -1 v -1 c 0 -0.570312 0.429688 -1 1 -1 h 1 s 1 0 1 -1 v -1 z m 8 0 v 1 c 0 1 1 1 1 1 h 1 c 0.570312 0 1 0.429688 1 1 v 1 c 0 1 1 1 1 1 h 1 v -2 c 0 -1.644531 -1.355469 -3 -3 -3 z m -5 4.019531 c -0.550781 0 -1 0.445313 -1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.554687 -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.445313 -1 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.554687 -0.449219 -1 -1 -1 z m -5.574219 3.988281 c -0.050781 0.003907 -0.101562 0.023438 -0.148437 0.046876 c -0.246094 0.121093 -0.347656 0.421874 -0.226563 0.667968 c 0 0 1.183594 2.277344 3.949219 2.277344 s 3.949219 -2.277344 3.949219 -2.277344 c 0.121093 -0.246094 0.019531 -0.546875 -0.226563 -0.667968 c -0.246094 -0.125 -0.546875 -0.023438 -0.671875 0.222656 c 0 0 -0.816406 1.722656 -3.050781 1.722656 s -3.050781 -1.722656 -3.050781 -1.722656 c -0.097657 -0.195313 -0.308594 -0.304688 -0.523438 -0.269532 z m -4.425781 0.992188 v 2 c 0 1.644531 1.355469 3 3 3 h 2 v -2 h -2 c -0.570312 0 -1 -0.429688 -1 -1 v -1 c 0 -1 -1 -1 -1 -1 z m 15 0 c -1 0 -1 1 -1 1 v 1 c 0 0.570312 -0.429688 1 -1 1 h -2 v 2 h 2 c 1.644531 0 3 -1.355469 3 -3 v -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAuthfacesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAuthfacesymbolic;
