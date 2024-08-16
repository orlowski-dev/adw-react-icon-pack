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
      <path d="m 7.023438 3.003906 c -1.644532 0 -3 1.355469 -3 3 v 1.425782 l -3.316407 -3.429688 h -0.6835935 v 8 h 0.6445315 l 3.355469 -3.496094 v 1.5 c 0 1.644532 1.355468 3 3 3 h 5 c 1.644531 0 3 -1.355468 3 -3 v -4 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 5 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.574219 -0.429688 1 -1 1 h -5 c -0.570313 0 -1 -0.425781 -1 -1 v -4 c 0 -0.570312 0.429687 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameraSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraSmallSymbolic;
