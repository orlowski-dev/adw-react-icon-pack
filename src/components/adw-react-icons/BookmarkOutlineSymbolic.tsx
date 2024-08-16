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
      <path d="m 5 0 c -1.332031 0 -2.273438 0.816406 -2.644531 1.554688 c -0.371094 0.738281 -0.355469 1.445312 -0.355469 1.445312 l 0.03125 12.472656 l 5.996094 -2.402344 l 6.003906 2.402344 l -0.03125 -12.476562 c 0 -0.003906 0.011719 -0.707032 -0.355469 -1.441406 c -0.371093 -0.738282 -1.3125 -1.554688 -2.644531 -1.554688 z m 0 2 h 6 c 0.695312 0.011719 1.003906 0.367188 1 1 l 0.023438 9.519531 l -3.996094 -1.601562 l -4.003906 1.601562 l -0.023438 -9.523437 c -0.007812 -0.648438 0.398438 -0.996094 1 -0.996094 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBookmarkOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBookmarkOutlineSymbolic;
