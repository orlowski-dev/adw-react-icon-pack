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
      <path d="m 3 5 v 1 c 0 0.277344 0.113281 0.527344 0.292969 0.707031 l 4.707031 4.707031 l 4.707031 -4.707031 c 0.179688 -0.179687 0.292969 -0.429687 0.292969 -0.707031 v -1 h -1 c -0.277344 0 -0.527344 0.113281 -0.707031 0.292969 l -3.292969 3.292969 l -3.292969 -3.292969 c -0.179687 -0.179688 -0.429687 -0.292969 -0.707031 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboardHideSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardHideSymbolic;
