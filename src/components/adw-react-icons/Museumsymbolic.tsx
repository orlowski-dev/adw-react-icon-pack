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
      <path d="m 7.460938 3 l -6.460938 2 v 2 h 1 v 1 h 1 v 5 h -1 v 1 h -1 v 1 h -1 v 1 h 16 v -1 h -1 v -1 h -0.996094 v -1 h -1.003906 v -5 h 1.007812 v -1 h 0.992188 v -2 z m -2.492188 5 h 2.03125 v 5 h -2.03125 z m 4.011719 0 h 2.019531 v 5 h -2.019531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMuseumsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMuseumsymbolic;
