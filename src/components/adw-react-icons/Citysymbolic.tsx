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
      <path d="m 6 0 v 4 h -1 v 2 h -1 v 9 h -1 v -9 h -3 v 10 h 16 v -1 h -1 v -4 h -1 v -8 l -3 3 v 5 h -1 v 4 h -1 v -9 h -1 v -2 h -1 v -4 z m 6.5 6 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m -11.5 1 h 1 v 1 h -1 z m 4 0 h 3 v 1 h -3 z m 7.5 1 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m -11.5 1 h 1 v 1 h -1 z m 4 0 h 3 v 1 h -3 z m 7.5 1.007812 c 0.277344 0 0.5 0.222657 0.5 0.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 z m -11.5 0.992188 h 1 v 1 h -1 z m 4 0 h 3 v 1 h -3 z m 6 1 h 3 v 1 h -3 z m -10 1 h 1 v 1 h -1 z m 4 0 h 3 v 1 h -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCitysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCitysymbolic;
