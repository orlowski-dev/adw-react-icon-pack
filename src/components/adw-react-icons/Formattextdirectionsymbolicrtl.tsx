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
      <path d="m 6 1 v 2 h 6 c 0.429688 0 1 0.613281 1 1 v 1 h -5 c -0.917969 0 -1.734375 0.382812 -2.25 0.96875 s -0.757812 1.3125 -0.75 2.03125 s 0.269531 1.453125 0.78125 2.03125 s 1.308594 0.96875 2.21875 0.96875 h 7 v -7 c 0 -1.632812 -1.320312 -3 -3 -3 z m 2 6 h 5 v 2 h -5 c -0.398438 0 -0.566406 -0.109375 -0.71875 -0.28125 s -0.277344 -0.4375 -0.28125 -0.71875 s 0.105469 -0.554688 0.25 -0.71875 s 0.328125 -0.28125 0.75 -0.28125 z m -5 3 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -2 2 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707031 0.289063 v 0.003906 h 1 v -2 h 11 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -11 v -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormattextdirectionsymbolicrtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormattextdirectionsymbolicrtl;
