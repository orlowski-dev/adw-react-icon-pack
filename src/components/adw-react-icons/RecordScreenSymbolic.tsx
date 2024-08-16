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
      <path d="m 2.175781 0 c -1.207031 0 -2.175781 0.96875 -2.175781 2.175781 v 2.648438 c 0 1.207031 0.96875 2.175781 2.175781 2.175781 h 3.648438 c 1.207031 0 2.175781 -0.96875 2.175781 -2.175781 v -0.332031 l 1.851562 1.378906 c 0.214844 0.160156 0.5 0.183594 0.738282 0.066406 c 0.242187 -0.121094 0.390625 -0.367188 0.390625 -0.636719 v -3.601562 c 0.003906 -0.269531 -0.148438 -0.515625 -0.390625 -0.636719 c -0.238282 -0.121094 -0.527344 -0.097656 -0.742188 0.0625 l -1.847656 1.375 v -0.324219 c 0 -1.207031 -0.96875 -2.175781 -2.175781 -2.175781 z m 6.867188 7 c -0.578125 0 -1.042969 0.445312 -1.042969 1 h -0.988281 c -1.113281 0 -2.011719 0.898438 -2.011719 2.011719 v 3.976562 c 0 1.113281 0.898438 2.011719 2.011719 2.011719 h 6.976562 c 1.113281 0 2.011719 -0.898438 2.011719 -2.011719 v -3.976562 c 0 -1.113281 -0.898438 -2.011719 -2.011719 -2.011719 h -0.988281 c 0 -0.554688 -0.464844 -1 -1.042969 -1 z m 1.457031 2 c 1.378906 0 2.5 1.121094 2.5 2.5 s -1.121094 2.5 -2.5 2.5 s -2.5 -1.121094 -2.5 -2.5 s 1.121094 -2.5 2.5 -2.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRecordScreenSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRecordScreenSymbolic;
