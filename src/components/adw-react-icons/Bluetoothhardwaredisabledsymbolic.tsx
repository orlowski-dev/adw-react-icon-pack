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
      <path d="m 7.957031 0 c -0.128906 0.0078125 -0.253906 0.0390625 -0.371093 0.0898438 c -0.355469 0.1640622 -0.585938 0.5195312 -0.585938 0.9101562 v 4 h 2 v -1.796875 l 1.480469 1.296875 l -0.570313 0.5 h 2.953125 c 0.238281 -0.414062 0.152344 -0.9375 -0.207031 -1.25 l -4 -3.5 c -0.191406 -0.171875 -0.445312 -0.2578125 -0.699219 -0.25 z m -3.867187 4.007812 c -0.316406 -0.03125 -0.632813 0.09375 -0.839844 0.335938 c -0.15625 0.183594 -0.242188 0.414062 -0.238281 0.65625 h 2.507812 l -0.863281 -0.75 c -0.15625 -0.140625 -0.355469 -0.226562 -0.566406 -0.242188 z m -1.078125 6.992188 c -0.003907 0.242188 0.082031 0.472656 0.238281 0.65625 c 0.363281 0.417969 0.992188 0.457031 1.40625 0.09375 l 0.863281 -0.75 z m 3.988281 0 v 4 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.359374 0.160156 0.777343 0.101563 1.070312 -0.160156 l 4 -3.5 c 0.359375 -0.3125 0.445312 -0.835938 0.207031 -1.25 h -2.953125 l 0.570313 0.5 l -1.480469 1.296875 v -1.796875 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 0 6 h 16 v 4 h -16 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwBluetoothhardwaredisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothhardwaredisabledsymbolic;
