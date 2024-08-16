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
      <path d="m 3.011719 1 c -1.644531 0 -3.0000002 1.355469 -3.0000002 3 v 6 c 0 1.644531 1.3554692 3 3.0000002 3 h 0.996093 c 0.546876 0 0.992188 -0.445312 0.992188 -0.992188 v -0.015624 c 0 -0.546876 -0.445312 -0.992188 -0.992188 -0.992188 h -0.996093 c -0.570313 0 -1 -0.429688 -1 -1 v -6 c 0 -0.570312 0.429687 -1 1 -1 h 8.976562 c 0.570313 0 1 0.429688 1 1 v 0.011719 c 0 0.546875 0.441407 0.988281 0.988281 0.988281 h 0.023438 c 0.546875 0 0.988281 -0.441406 0.988281 -0.988281 v -0.011719 c 0 -1.644531 -1.355469 -3 -3 -3 z m 6.488281 3 c -2.484375 0 -4.5 2.015625 -4.5 4.5 s 2.015625 4.5 4.5 4.5 c 0.847656 0 1.675781 -0.242188 2.390625 -0.695312 l 2.402344 2.402343 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -2.402343 -2.398438 c 0.453124 -0.71875 0.695312 -1.546875 0.695312 -2.394531 c 0 -2.484375 -2.015625 -4.5 -4.5 -4.5 z m 0 2 c 1.378906 0 2.5 1.121094 2.5 2.5 s -1.121094 2.5 -2.5 2.5 s -2.5 -1.121094 -2.5 -2.5 s 1.121094 -2.5 2.5 -2.5 z m -4.488281 8 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDiagnosticsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDiagnosticsSymbolic;
