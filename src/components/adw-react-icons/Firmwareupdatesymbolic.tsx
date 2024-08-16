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
      <path d="m 4.035156 0.0117188 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2.175781 c -1.179687 0.410156 -2.023437 1.527344 -2.023437 2.847656 v 0.976563 h 2 v -0.976563 c 0 -0.566406 0.457031 -1.023437 1.023437 -1.023437 h 7.960938 c 0.5625 0 1.015625 0.457031 1.015625 1.023437 h 2 c 0 -1.316406 -0.832031 -2.425781 -2 -2.84375 v -2.179687 c 0 -0.550781 -0.445313 -1.0000002 -1 -1.0000002 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2 h -2 v -2 c 0 -0.550781 -0.445313 -1.0000002 -1 -1.0000002 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2 h -1.976563 v -2 c 0 -0.550781 -0.449218 -1.0000002 -1 -1.0000002 z m -0.023437 6.0000002 v 1.988281 h -0.011719 c -2.214844 0 -4 1.785156 -4 4 v 2 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -2 c 0 -1.097656 0.902344 -2 2 -2 h 0.011719 v 2.011719 h 1 v -0.003907 c 0.265625 0 0.519531 -0.101562 0.707031 -0.289062 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023438 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 9.988281 1 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 1.101562 -0.902344 2 -2 2 h -0.015625 v -2.011719 h -1 v 0.007812 c -0.261719 -0.003906 -0.515625 0.101563 -0.707031 0.285157 l -2 2 c -0.386719 0.390625 -0.386719 1.023437 0 1.414062 l 2 2 c 0.191406 0.183594 0.445312 0.289063 0.707031 0.289063 v 0.003906 h 1 v -1.984375 h 0.015625 c 2.214844 0 4 -1.789063 4 -4 v -2 c 0 -0.554687 -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFirmwareupdatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFirmwareupdatesymbolic;
