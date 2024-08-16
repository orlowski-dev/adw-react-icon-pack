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
        <path d="m 4 9 c -1.089844 0 -2 -0.910156 -2 -2 v -5 c 0 -1.089844 0.910156 -2 2 -2 h 6.078125 c 0.578125 0 1.132813 0.246094 1.515625 0.679688 l 1.816406 2.046874 c 0.378906 0.429688 0.589844 0.980469 0.589844 1.550782 v 2.722656 c 0 1.089844 -0.910156 2 -2 2 z m 0 -2.980469 h 8 v -2.023437 l -1.933594 -1.996094 h -6.066406 z m 0 0"/>
        <path d="m 2 10.988281 c -1.109375 0 -2 -0.890625 -2 -2 v -1.988281 c 0 -1.109375 0.890625 -2 2 -2 h 1 v 2 c 0 0.554688 0.445312 1 1 1 h 8 c 0.554688 0 1 -0.445312 1 -1 v -2 h 1 c 1.109375 0 2 0.890625 2 2 v 1.988281 c 0 1.109375 -0.890625 2 -2 2 z m 0 0"/>
        <path d="m 7.992188 12 c -0.699219 0 -1.351563 0.371094 -1.710938 0.972656 h -3.289062 c -0.550782 0 -1 0.449219 -1 1 c 0 0.550782 0.449218 1 1 1 h 3.25 c 0.351562 0.640625 1.023437 1.035156 1.75 1.039063 c 0.730468 -0.003907 1.402343 -0.398438 1.753906 -1.039063 h 3.261718 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -3.296874 c -0.359376 -0.601562 -1.011719 -0.972656 -1.71875 -0.972656 z m 0 1 c 0.558593 0 1.007812 0.449219 1.007812 1.003906 c 0 0.558594 -0.449219 1.007813 -1.007812 1.007813 c -0.554688 0 -1.003907 -0.449219 -1.003907 -1.007813 c 0 -0.554687 0.449219 -1.003906 1.003907 -1.003906 z m 0 0"/>
        <path d="m 6.992188 10 h 2.007812 v 3 h -2.007812 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPrinterNetworkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPrinterNetworkSymbolic;
