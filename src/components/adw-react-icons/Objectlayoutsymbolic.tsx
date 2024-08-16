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
      <g fill="currentColor">
        <path d="m 1 4 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 8.96875 0 v 1 h 1 v -1 z m 2.03125 0 v 1 h 1 v -1 z m -13 8 v 1 h 1 v -1 z m 2 0 v 1 h 1 v -1 z m 8.96875 0 v 1 h 1 v -1 z m 2.03125 0 v 1 h 1 v -1 z m 0 0"/>
        <path d="m 5 2 h 6 v 12 h -6 z m 0 0"/>
        <path d="m 2.324219 6.292969 l -2.2656252 2.222656 l 2.2265622 2.148437 c 0.476563 0.550782 1.171875 0.503907 1.683594 -0.007812 l -2.214844 -2.140625 l 2.261719 -2.214844 c -0.511719 -0.574219 -1.222656 -0.46875 -1.691406 -0.007812 z m 0 0"/>
        <path d="m 13.65625 6.292969 l 2.265625 2.222656 l -2.226563 2.148437 c -0.476562 0.550782 -1.167968 0.503907 -1.683593 -0.007812 l 2.21875 -2.140625 l -2.265625 -2.214844 c 0.511718 -0.574219 1.226562 -0.46875 1.691406 -0.007812 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwObjectlayoutsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwObjectlayoutsymbolic;
