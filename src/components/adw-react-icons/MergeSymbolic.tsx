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
      <path d="m 9 0 l -4 3 l 4 3 v -2 h 2 c 0.167969 0 0.449219 0.113281 0.667969 0.332031 s 0.332031 0.5 0.332031 0.667969 v 6.273438 c -0.617188 0.355468 -0.996094 1.015624 -1 1.726562 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 c 0 -0.714844 -0.382812 -1.375 -1 -1.730469 v -6.269531 c 0 -0.832031 -0.386719 -1.550781 -0.917969 -2.082031 s -1.25 -0.917969 -2.082031 -0.917969 h -2 z m -4 3 c 0 -1.105469 -0.894531 -2 -2 -2 s -2 0.894531 -2 2 c 0.003906 0.710938 0.382812 1.371094 1 1.726562 v 6.546876 c -0.617188 0.355468 -0.996094 1.015624 -1 1.726562 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 c 0 -0.714844 -0.382812 -1.375 -1 -1.730469 v -6.542969 c 0.617188 -0.355468 0.996094 -1.015624 1 -1.726562 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMergeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMergeSymbolic;
