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
      <path d="m 4 0 c -2.175781 0 -3.875 1.960938 -3.566406 4.113281 l 1.363281 9.53125 c 0.183594 1.339844 1.339844 2.347657 2.691406 2.355469 h 0.003907 c 1.375 0 2.507812 -1.132812 2.507812 -2.507812 v -2.492188 c 0 -0.5625 0.4375 -1 1 -1 s 1 0.4375 1 1 v 2.488281 c -0.007812 1.367188 1.117188 2.503907 2.484375 2.511719 h 0.007813 c 1.355468 0 2.519531 -1.011719 2.710937 -2.351562 l 1.363281 -9.535157 c 0.308594 -2.152343 -1.390625 -4.113281 -3.566406 -4.113281 h -1 c -1.09375 0 -2 0.90625 -2 2 h -2 c 0 -1.09375 -0.90625 -2 -2 -2 z m 0 2 h 1 c 0 1.09375 0.90625 2 2 2 h 2 c 1.09375 0 2 -0.90625 2 -2 h 1 c 0.992188 0 1.726562 0.84375 1.585938 1.828125 l -1.363282 9.535156 c -0.054687 0.371094 -0.355468 0.632813 -0.726562 0.636719 c -0.285156 -0.003906 -0.496094 -0.214844 -0.496094 -0.5 c 0 -0.003906 0 -0.007812 0 -0.007812 v -2.492188 c 0 -1.644531 -1.355469 -3 -3 -3 s -3 1.355469 -3 3 v 2.492188 c 0 0.292968 -0.214844 0.503906 -0.503906 0.507812 c -0.371094 -0.003906 -0.667969 -0.261719 -0.71875 -0.628906 c 0 -0.003906 0 -0.003906 0 -0.007813 l -1.363282 -9.535156 c -0.140624 -0.984375 0.59375 -1.828125 1.585938 -1.828125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDentistSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDentistSymbolic;
