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
        <path d="m 14 3.175781 v 3.824219 c 0 2.179688 -1.820312 4 -4 4 h -3.585938 l -2 2 h 5.585938 l 3 3 v -3 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -1.292969 -0.839844 -2.40625 -2 -2.824219 z m 0 0"/>
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 4 c 0 1.644531 1.355469 3 3 3 v 3 l 3 -3 h 4 c 1.644531 0 3 -1.355469 3 -3 v -4 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwChatBubblesEmptyInvertedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChatBubblesEmptyInvertedSymbolic;
