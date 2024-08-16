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
      <path d="m 7 0 v 6.269531 l -5.425781 -3.132812 l -1 1.726562 l 5.429687 3.136719 l -5.429687 3.136719 l 1 1.726562 l 5.425781 -3.132812 v 6.269531 h 2 v -6.269531 l 5.429688 3.132812 l 1 -1.726562 l -5.429688 -3.136719 l 5.429688 -3.136719 l -1 -1.726562 l -5.429688 3.132812 v -6.269531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEmergencynumbersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmergencynumbersymbolic;
