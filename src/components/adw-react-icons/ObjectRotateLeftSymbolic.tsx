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
      <path d="m 8.914062 2 c -0.574218 0.007812 -1.152343 0.085938 -1.726562 0.238281 c -3.054688 0.820313 -5.1875 3.597657 -5.1875 6.761719 h -2 v 1 h 0.0078125 c -0.00390625 0.265625 0.1015625 0.519531 0.2851565 0.707031 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 2 -2 c 0.183594 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -2 c 0 -2.269531 1.515625 -4.242188 3.707031 -4.832031 c 2.1875 -0.585938 4.488281 0.367187 5.625 2.332031 c 1.132813 1.964844 0.808594 4.429688 -0.796875 6.035156 c -0.390625 0.390625 -0.390625 1.023438 0 1.414063 s 1.023438 0.390625 1.414063 0 c 2.238281 -2.238281 2.695312 -5.710938 1.113281 -8.449219 c -1.1875 -2.054688 -3.304688 -3.324219 -5.578125 -3.480469 c -0.191406 -0.015625 -0.378906 -0.023437 -0.570313 -0.019531 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwObjectRotateLeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwObjectRotateLeftSymbolic;
