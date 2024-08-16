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
      <path d="m 7.992188 1 c -3.867188 0.003906 -6.996094 3.140625 -6.992188 7.007812 v 5.988282 c 0 0.554687 0.449219 1.003906 1.003906 1.003906 c 0.550782 -0.003906 1 -0.453125 0.996094 -1.003906 v -0.992188 c 0 -0.554687 0.449219 -1.003906 1.003906 -1.003906 c 0.550782 0.003906 1 0.453125 0.996094 1.003906 v 0.992188 c 0 0.554687 0.449219 1.003906 1.003906 1.003906 c 0.550782 -0.003906 1 -0.453125 0.996094 -1.003906 v -0.992188 c 0 -0.554687 0.449219 -1.003906 1.003906 -1.003906 c 0.550782 0.003906 1 0.453125 0.996094 1.003906 v 0.992188 c 0 0.554687 0.449219 1.003906 1.003906 1.003906 c 0.550782 -0.003906 1 -0.453125 0.996094 -1.003906 v -0.992188 c 0 -0.554687 0.449219 -1.003906 1.003906 -1.003906 c 0.550782 0.003906 1 0.453125 0.996094 1.003906 v 0.992188 c 0 0.554687 0.449219 1.003906 1.003906 1.003906 c 0.550782 -0.003906 1 -0.453125 0.996094 -1.003906 v -5.988282 c 0 -3.871093 -3.136719 -7.007812 -7.007812 -7.007812 z m -1.992188 4 c 0.554688 0 1 0.445312 1 1 v 1 c 0 0.554688 -0.445312 1 -1 1 s -1 -0.445312 -1 -1 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m 4 0 c 0.554688 0 1 0.445312 1 1 v 1 c 0 0.554688 -0.445312 1 -1 1 s -1 -0.445312 -1 -1 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBackgroundAppGhostSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBackgroundAppGhostSymbolic;
