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
      <path d="m 6.820312 1 c -0.679687 0 -1.269531 0.457031 -1.449218 1.109375 l -3.789063 12.890625 h 3.109375 l 0.960938 -3 h 4.722656 l 0.9375 3 h 3.109375 l -3.75 -12.890625 c -0.175781 -0.65625 -0.769531 -1.109375 -1.449219 -1.109375 z m 1.179688 3 c 0.195312 0.003906 0.359375 0.035156 0.449219 0.363281 l 1.25 4.636719 h -3.394531 l 1.261718 -4.6875 c 0.078125 -0.289062 0.253906 -0.316406 0.433594 -0.3125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawTextSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawTextSymbolic;
