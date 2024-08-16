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
      <path d="m 11 1 v 1.1875 c -4.527344 0.835938 -8.085938 4.425781 -8.847656 9 c -0.679688 0.324219 -1.152344 1.015625 -1.152344 1.8125 c 0 1.097656 0.902344 2 2 2 s 2 -0.902344 2 -2 c 0 -0.671875 -0.335938 -1.265625 -0.847656 -1.632812 c 0.652344 -3.554688 3.359375 -6.347657 6.847656 -7.140626 v 0.773438 h 4 v -4 z m 1 1 h 2 v 2 h -2 z m -9 10 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawarcsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawarcsymbolic;
