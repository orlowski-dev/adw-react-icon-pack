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
      <path d="m 3 0 c -1.109375 0 -2 0.890625 -2 2 v 7 c 0 1.109375 0.890625 2 2 2 h 1 v 1 h -3 v 1 h 8.675781 l 1 -1 h -5.675781 v -1 h 1 c 1.109375 0 2 -0.890625 2 -2 v -7 c 0 -1.109375 -0.890625 -2 -2 -2 z m 8 0 c -1.109375 0 -2 0.890625 -2 2 v 7 c 0 1.109375 0.890625 2 2 2 h 3 c 1.109375 0 2 -0.890625 2 -2 v -7 c 0 -1.109375 -0.890625 -2 -2 -2 z m -8 2 h 3 v 1 h -3 z m 8 0 h 3 v 1 h -3 z m -8 2 h 3 v 5 h -3 z m 8 0 h 3 v 5 h -3 z m -7 1 v 1 h 1 v -1 z m 8 0 v 1 h 1 v -1 z m 0.503906 7 c -0.257812 0 -0.515625 0.097656 -0.710937 0.292969 l -2 2 c -0.183594 0.1875 -0.289063 0.441406 -0.285157 0.707031 h -0.007812 v 1 h 6.003906 v -1 h -0.003906 c 0 -0.265625 -0.101562 -0.519531 -0.289062 -0.707031 l -2 -2 c -0.195313 -0.195313 -0.449219 -0.292969 -0.707032 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwServerpicksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwServerpicksymbolic;
