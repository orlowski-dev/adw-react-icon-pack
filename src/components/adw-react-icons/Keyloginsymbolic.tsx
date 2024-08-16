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
        <path d="m 2.5 2 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 7 c 0 1.367188 1.132812 2.5 2.5 2.5 h 4 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -0.5 h 0.085938 l 2.414062 2.414062 l 2 -2 l 0.792969 0.792969 l 1.414062 -1.414062 l -2.207031 -2.207031 l -2 2 l -1.585938 -1.585938 h -2.914062 v 2.5 c 0 0.289062 -0.210938 0.5 -0.5 0.5 h -4 c -0.289062 0 -0.5 -0.210938 -0.5 -0.5 v -7 c 0 -0.289062 0.210938 -0.5 0.5 -0.5 h 4 c 0.289062 0 0.5 0.210938 0.5 0.5 v 2.5 h 8 v -2 h -6 v -0.5 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 0"/>
        <path d="m 13 3.5 v 2.5 h 2 v 4 h -2 v 2.5 c 0 0.828125 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 v -9 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 s -1.5 0.671875 -1.5 1.5 z m 0 0"/>
        <path d="m 3.5 6 c 0.277344 0 0.5 0.222656 0.5 0.5 v 3 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -3 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwKeyloginsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyloginsymbolic;
