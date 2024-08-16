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
      <path d="m 11.121094 0.0117188 c -0.464844 0.0039062 -0.945313 0.2812502 -0.996094 0.9609372 c 0 0.269532 0.105469 0.527344 0.300781 0.71875 l 1.707031 1.792969 s 0 0.5 -0.5 0.5 h -2.351562 c -0.066406 -0.015625 -0.132812 -0.023437 -0.199219 -0.023437 h -7.085937 c -0.550782 0 -1 0.449218 -1 1 c 0 0.550781 0.449218 0.996093 1 1 l 5.636718 0.023437 s 0.5 0 0.5 0.5 c 0 0.34375 -0.238281 0.449219 -0.386718 0.484375 h -6.734375 c -0.550781 0 -1.0000002 0.445312 -1.0000002 1 c 0 0.550781 0.4609372 1.035156 1.0117192 1.035156 l 6.609374 -0.007812 s 0.5 -0.015625 0.5 0.484375 s -0.5 0.515625 -0.5 0.515625 h -0.671874 c -0.550782 -0.003906 -1 0.472656 -1 1.023437 s 0.449218 1 1 1 h 0.855468 c 0.144532 0.050781 0.316406 0.167969 0.316406 0.460938 c 0 0.5 -0.5 0.5 -0.5 0.5 h -0.367187 c -0.554687 0 -1 0.449219 -1 1 c 0 0.554687 0.445313 1 1 1 h 5.867187 s 3 0 3 -3 v -6 c -0.003906 -0.949219 -0.5 -2 -1.292968 -2.707031 l -3 -3 c -0.167969 -0.167969 -0.441406 -0.2656255 -0.71875 -0.2617192 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSignLanguageSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSignLanguageSymbolic;
