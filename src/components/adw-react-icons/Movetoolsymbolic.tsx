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
      <path d="m 8.019531 0 l -3.019531 3.015625 h 2.03125 v 4.019531 c -1.34375 -0.011718 -2.6875 -0.019531 -4.03125 -0.027344 v -1.996093 l -3 2.976562 l 3 3.019531 v -2.007812 c 1.34375 0.003906 2.6875 0.007812 4.03125 0.011719 v 3.992187 h -2.03125 l 3.019531 2.996094 l 2.980469 -2.996094 h -2 v -3.992187 c 1.332031 0.003906 2.667969 0 4 -0.007813 v 2 l 3 -3.019531 l -3 -2.972656 v 2.007812 c -1.332031 0.023438 -2.667969 0.03125 -4 0.027344 v -4.03125 h 2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMovetoolsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMovetoolsymbolic;
