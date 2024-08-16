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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 10 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 12.949219 1.109375 l -0.007813 5.902344 c 0 1.101562 -0.898437 2 -2 2 h -0.011718 v -2.011719 h -1 v 0.003906 c -0.265626 0 -0.519532 0.101563 -0.707032 0.289063 l -2 2 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707032 0.285157 v 0.007812 h 1 v -1.988281 h 0.011718 c 2.214844 0 4 -1.785157 4 -4 l 0.007813 -5.902344"/>
        <path d="m 5.050781 3.011719 v 1.988281 h -0.015625 c -2.210937 0 -4 1.785156 -4 4 v 5.070312 c 0 1.335938 2 1.335938 2 0 v -5.070312 c 0 -1.097656 0.902344 -2 2 -2 h 0.015625 v 2.011719 h 1 v -0.003907 c 0.265625 0 0.519531 -0.101562 0.707031 -0.289062 l 2 -2 c 0.390626 -0.390625 0.390626 -1.023438 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTaskRecurringSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTaskRecurringSymbolic;
