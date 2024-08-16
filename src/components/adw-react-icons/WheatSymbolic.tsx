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
      <path d="m 6 0 v 1 c 0 0.550781 0.449219 1 1 1 h 1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 v 1 h 1 c 0.550781 0 1 -0.449219 1 -1 v -1 z m -1.5 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 13 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -13 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -3.5 1 v 1 c 0 0.550781 0.449219 1 1 1 h 1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 6 0 c -0.550781 0 -1 0.449219 -1 1 v 1 h 1 c 0.550781 0 1 -0.449219 1 -1 v -1 z m -7 3 v 1.5 c 0 0.828125 0.671875 1.5 1.5 1.5 h 1.5 v -1.5 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 z m 7.5 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 v 1.5 h 1.5 c 0.828125 0 1.5 -0.671875 1.5 -1.5 v -1.5 z m -8.5 4 v 2 c 0 1.105469 0.894531 2 2 2 h 2 v -2 c 0 -1.105469 -0.894531 -2 -2 -2 z m 9 0 c -1.105469 0 -2 0.894531 -2 2 v 2 h 2 c 1.105469 0 2 -0.894531 2 -2 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWheatSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWheatSymbolic;
