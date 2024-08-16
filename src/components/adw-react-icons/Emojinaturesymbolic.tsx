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
      <path d="m 6 1 s -3 0 -3 3 v 5 s 0.042969 1.417969 0.027344 2 c 0 1 -0.535156 1.414062 -1.402344 2.121094 c -0.628906 0.488281 -0.773438 1.308594 -0.308594 1.699218 c 0.429688 0.351563 1.164063 0.300782 1.660156 -0.34375 l 1.019532 -1.476562 c 0.699218 -1.015625 0.984375 -1.875 1 -3 l 0.003906 -6 c 0 -1 0.996094 -1 0.996094 -1 v 6.574219 l 3.003906 -3.074219 v -2.5 c 0 -1 0.996094 -1 0.996094 -1 l 0.003906 2.5 l 1.996094 -2.035156 c 0.339844 -0.3125 0.503906 -0.464844 1 -0.464844 l 0.003906 1 l -4.003906 4 h 4 s 0.003906 1 -1 1 h -4 l -2 2 c 0 0.425781 0 2.007812 2 2.007812 l 4.003906 -0.007812 s 3 0 2.996094 -2.992188 v -9.007812 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojinaturesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojinaturesymbolic;
