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
      <path d="m 8 0 c -1.109375 0 -2 0.890625 -2 2 v 3.003906 c 0 0.632813 -0.480469 0.996094 -1 0.996094 h -1 c -1.109375 0 -2 0.890625 -2 2 v 2 h 1 v 3 c 0 2 -1.96875 3 -2.984375 3 h 10 c 0.921875 0 2.984375 -1 2.984375 -3.015625 v -2.984375 h 1 v -2 c 0 -1.109375 -0.890625 -2 -2 -2 h -0.976562 c -0.53125 0 -1.023438 -0.359375 -1.023438 -1 v -3 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 1.40625 c 0.328125 0 0.59375 0.265625 0.59375 0.59375 s -0.265625 0.59375 -0.59375 0.59375 s -0.59375 -0.265625 -0.59375 -0.59375 s 0.265625 -0.59375 0.59375 -0.59375 z m -3.3125 8.59375 h 0.3125 v 4 z m 2 0 h 0.3125 v 3 z m 2 0 h 0.3125 v 3 z m 2 0 h 0.3125 v 2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwLargeBrushSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLargeBrushSymbolic;
