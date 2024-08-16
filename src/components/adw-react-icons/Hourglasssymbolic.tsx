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
      <path d="m 5 0 c -0.96875 0 -2 1.050781 -2 2 v 2.988281 c 0 0.429688 0.222656 0.675781 0.554688 1.007813 l 2.023437 2.003906 l -2.007813 1.992188 c -0.367187 0.363281 -0.570312 0.6875 -0.570312 1 v 3.007812 c 0 1.011719 0.988281 2 2 2 h 6 c 1.007812 0 2 -1.011719 2 -2.003906 v -3.003906 c 0 -0.3125 -0.222656 -0.628907 -0.570312 -0.976563 l -2.015626 -2.015625 l 1.988282 -1.988281 c 0.261718 -0.261719 0.585937 -0.6875 0.597656 -1.015625 v -2.996094 c 0 -1.003906 -1.007812 -2 -2 -2 z m 6 4 h -6 v -2 h 6 m -3.589844 7 h 1.175782 l 2.414062 2.414062 v 1.585938 h -6 v -1.613281 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHourglasssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHourglasssymbolic;
