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
      <path d="m 6.964844 14.035156 h 1 v -0.832031 c 0.105468 -0.617187 -0.375 -1.179687 -1 -1.167969 h -1.585938 l 8.292969 -8.292968 c 0.984375 -0.945313 -0.46875 -2.398438 -1.414063 -1.414063 l -8.292968 8.292969 v -1.585938 c 0.007812 -0.621094 -0.542969 -1.097656 -1.15625 -1 h -0.84375 v 6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCallreceivedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallreceivedsymbolic;
