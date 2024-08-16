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
      <path d="m 5.105469 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -4.101563 4.101562 c -0.1875 0.1875 -0.29296875 0.441407 -0.2890625 0.707031 v 5.796876 c -0.00390625 0.265624 0.1015625 0.519531 0.2929685 0.707031 l 4.097657 4.101562 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 h 5.800781 c 0.265625 0 0.519531 -0.105469 0.707031 -0.292969 l 4.101563 -4.101562 c 0.1875 -0.1875 0.292968 -0.441407 0.292968 -0.707031 v -5.796876 c 0 -0.265624 -0.105468 -0.519531 -0.296874 -0.707031 l -4.097657 -4.101562 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0.414062 2 h 4.96875 l 3.519531 3.511719 v 4.972656 l -3.515624 3.515625 h -4.972657 l -3.511719 -3.511719 v -4.972656 z m 1.480469 2 v 3 l 0.28125 2 h 1.46875 l 0.25 -2 v -3 z m 1 5.75 c -0.691406 0 -1.25 0.558594 -1.25 1.25 s 0.558594 1.25 1.25 1.25 s 1.25 -0.558594 1.25 -1.25 s -0.558594 -1.25 -1.25 -1.25 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMailMarkJunkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailMarkJunkSymbolic;
