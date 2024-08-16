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
      <path d="m 9 4 h 0.003906 c -0.003906 0.011719 -0.003906 0.019531 -0.003906 0.03125 v 4.339844 c -0.457031 -0.21875 -0.964844 -0.339844 -1.5 -0.339844 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 1.914062 0 3.492188 -1.570312 3.5 -3.484375 c 0 -0.003906 0 -0.011719 0 -0.015625 v -7 c 0 -0.277344 0.222656 -0.5 0.5 -0.503906 l 3.5 -0.027344 c 0 -1.65625 -1.34375 -3 -3 -3 s -3 1.34375 -3 3 z m -1.5 6.03125 c 0.839844 0 1.5 0.660156 1.5 1.5 v 0.015625 c -0.007812 0.832031 -0.664062 1.484375 -1.5 1.484375 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMusicnotesingleoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicnotesingleoutlinesymbolic;
