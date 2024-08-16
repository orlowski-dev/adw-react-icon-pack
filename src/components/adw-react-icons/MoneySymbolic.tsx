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
      <path d="m 7 1 v 2 h -2 c -1.070312 0 -2.0625 0.570312 -2.59375 1.496094 c -0.535156 0.925781 -0.535156 2.070312 0 2.996094 c 0.53125 0.925781 1.523438 1.5 2.59375 1.5 v 0.011718 h 2 v 2 h -4 v 2 h 4 v 2 h 2 v -2 h 2 v -0.011718 c 1.644531 0 2.996094 -1.351563 2.996094 -2.996094 c 0 -1.644532 -1.351563 -2.996094 -2.996094 -2.996094 h -2 v -2 h 4 v -2 h -4 v -2 z m -1.960938 4 h 1.960938 v 2 h -1.894531 c -0.039063 -0.003906 -0.074219 -0.007812 -0.109375 -0.011719 c -0.359375 0 -0.683594 -0.1875 -0.863282 -0.496093 c -0.179687 -0.308594 -0.179687 -0.6875 0 -0.996094 c 0.179688 -0.308594 0.503907 -0.5 0.863282 -0.5 c 0.015625 0.003906 0.027344 0.003906 0.042968 0 z m 3.960938 4 h 2 c 0.5625 0 0.996094 0.433594 0.996094 0.996094 s -0.433594 0.996094 -0.996094 0.996094 l -2 0.011718 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMoneySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoneySymbolic;
