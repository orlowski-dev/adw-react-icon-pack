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
      <path d="m 0.933594 12.953125 c 0 1.644531 1.359375 3 3.007812 3 h 7.019532 c 1.648437 0 3.007812 -1.355469 3.007812 -3 v -10 c 0 -1.644531 -1.359375 -3 -3.007812 -3 h -7.019532 c -1.648437 0 -3.007812 1.355469 -3.007812 3 z m 2.007812 0 v -10 c 0 -0.570313 0.429688 -1 1 -1 h 7.019532 c 0.574218 0 1.003906 0.429687 1.003906 1 v 10 c 0 0.570313 -0.429688 1 -1.003906 1 h -7.019532 c -0.570312 0 -1 -0.429687 -1 -1 z m 2.085938 -5 c 0 0.261719 0.101562 0.511719 0.285156 0.699219 l 2.925781 3 c 0.183594 0.1875 0.433594 0.292968 0.570313 0.296875 l 1.148437 0.003906 v -8 l -1.148437 0.003906 c -0.136719 0.003907 -0.386719 0.113281 -0.570313 0.300781 l -2.925781 3 c -0.183594 0.183594 -0.285156 0.4375 -0.285156 0.695313 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwBoxLeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBoxLeftSymbolic;
