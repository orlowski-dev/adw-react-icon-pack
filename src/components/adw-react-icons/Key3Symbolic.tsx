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
      <path d="m 3.980469 5.386719 c 0 0.695312 0.265625 1.390625 0.796875 1.921875 l 3.9375 3.9375 c 1.0625 1.0625 2.785156 1.0625 3.847656 0 l 2.648438 -2.648438 c 1.0625 -1.0625 1.0625 -2.785156 0 -3.847656 l -3.9375 -3.9375 c -1.0625 -1.0625 -2.785157 -1.0625 -3.847657 0 l -2.648437 2.648438 c -0.53125 0.535156 -0.796875 1.230468 -0.796875 1.925781 z m 2.210937 0.507812 c -0.226562 -0.222656 -0.226562 -0.792969 0 -1.019531 l 2.648438 -2.648438 c 0.226562 -0.222656 0.792968 -0.222656 1.019531 0 l 3.9375 3.9375 c 0.226563 0.226563 0.226563 0.792969 0 1.019532 l -2.648437 2.648437 c -0.226563 0.226563 -0.792969 0.226563 -1.019532 0 z m 0 0"/>
    <path d="m 0 14.292969 c 0 0.433593 0.160156 0.890625 0.484375 1.214843 c 0.328125 0.324219 0.785156 0.484376 1.214844 0.484376 h 3.300781 c 0.550781 0 1 -0.445313 1 -1 v -0.992188 h 1 c 0.550781 0 1 -0.449219 1 -1 v -1 h 1 c 0.265625 0 0.519531 -0.105469 0.707031 -0.292969 l 0.632813 -0.632812 l -1.414063 -1.417969 l -0.339843 0.34375 h -1.585938 c -0.550781 0 -1 0.449219 -1 1 v 1 h -1 c -0.550781 0 -1 0.449219 -1 1 v 0.992188 h -2 v -2.601563 l 4.269531 -4.4375 l -1.4375 -1.386719 l -4.554687 4.726563 c -0.175782 0.1875 -0.277344 0.433593 -0.277344 0.691406 z m 0 0"/>
    <path d="m 9.5 4 c 0 0.132812 0.050781 0.257812 0.144531 0.351562 l 2 2 c 0.195313 0.195313 0.511719 0.195313 0.707031 0 c 0.195313 -0.191406 0.195313 -0.511718 0 -0.707031 l -2 -2 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 c -0.09375 0.09375 -0.144531 0.222657 -0.144531 0.355469 z m 0 0"/>
    </svg>
  );
};

const AdwKey3Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKey3Symbolic;
