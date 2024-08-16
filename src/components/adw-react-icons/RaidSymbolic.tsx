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
      <path d="m 3.996094 0 c -1.648438 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.351562 3 3 3 h 5 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 5 c 0.570312 0 0.886718 0.441406 1 1 v 5 c 0 0.472656 -0.429688 1 -1 1 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -5 c 0 -0.554688 0.445312 -1 1 -1 z m 2.5 1.003906 c -1.371094 0 -2.515625 1.128906 -2.496094 2.496094 l -0.007812 2.5 h 2.503906 c 1.371094 0 2.496094 -1.125 2.496094 -2.5 c 0 -1.371094 -1.125 -2.496094 -2.496094 -2.496094 z m 6.5 1.171875 v 7.824219 c 0 0.472656 -0.429688 1 -1 1 h -8 c 0 1.644531 1.351562 3 3 3 h 5 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.292969 -0.84375 -2.40625 -2 -2.824219 z m -6.496094 0.324219 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRaidSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRaidSymbolic;
