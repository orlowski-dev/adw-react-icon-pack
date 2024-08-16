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
      <path d="m 4 -0.03125 c -0.554688 0 -1 0.03125 -1 0.03125 v 2 h 2 v -1.03125 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3.03125 v 0.988281 c 0 0.554688 0.445312 0.996094 1 1 l 10 0.011719 v 5 h 2 v -6.003906 c 0 -0.550782 -0.445312 -0.996094 -1 -0.996094 h -0.003906 z m 3 3 v 6.003906 c 0 0.550782 0.445312 0.996094 1 0.996094 c 4.023438 0.007812 12 0 12 0 v -0.988281 c 0 -0.550781 -1 -0.996094 -1 -0.996094 l -10 -0.015625 v -5 z m 8 8 v 1.03125 c 0 0.554688 0.445312 1 1 1 h 0.003906 c 0.550782 0 0.996094 -0.03125 0.996094 -0.03125 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCropSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCropSymbolic;
