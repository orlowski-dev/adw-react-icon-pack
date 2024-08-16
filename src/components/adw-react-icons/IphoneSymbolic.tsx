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
      <path d="m 4.199219 0 c -1.203125 0 -2.199219 1 -2.199219 2.199219 v 11.601562 c 0 1.199219 0.996094 2.199219 2.199219 2.199219 h 7.605469 c 1.203124 0 2.195312 -1 2.195312 -2.199219 v -11.601562 c 0 -1.199219 -0.992188 -2.199219 -2.195312 -2.199219 z m 0 2 h 1.824219 c 0.113281 0.570312 0.617187 1 1.222656 1 h 1.511718 c 0.605469 0 1.105469 -0.429688 1.21875 -1 h 1.828126 c 0.125 0 0.195312 0.070312 0.195312 0.199219 v 11.542969 c 0 0.132812 -0.070312 0.203124 -0.195312 0.203124 h -7.605469 c -0.125 0 -0.199219 -0.070312 -0.199219 -0.203124 v -11.542969 c 0 -0.128907 0.074219 -0.199219 0.199219 -0.199219 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwIphoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIphoneSymbolic;
