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
      <path d="m 7.804688 0.0195312 c -0.128907 0.0273438 -0.25 0.0742188 -0.359376 0.1484378 l -6 4 c -0.277343 0.183593 -0.445312 0.496093 -0.445312 0.832031 v 6 c 0 0.335938 0.167969 0.648438 0.445312 0.832031 l 6 4 c 0.335938 0.222657 0.773438 0.222657 1.109376 0 l 6 -4 c 0.277343 -0.183593 0.445312 -0.496093 0.445312 -0.832031 v -6 c 0 -0.335938 -0.167969 -0.648438 -0.445312 -0.832031 l -6 -4 c -0.21875 -0.1484378 -0.488282 -0.199219 -0.75 -0.1484378 z m 0.195312 2.1796878 v 6.800781 l 5 -3.332031 v 4.796875 l -5 3.335937 v -4.800781 l -5 -3.332031 v -0.132813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFlatpakSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlatpakSymbolic;
