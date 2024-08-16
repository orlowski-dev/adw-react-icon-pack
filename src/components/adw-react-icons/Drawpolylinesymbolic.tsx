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
      <path d="m 7 0 c -0.832031 0 -1.550781 0.519531 -1.851562 1.25 l -0.480469 0.167969 c -2.789063 0.988281 -4.667969 3.625 -4.667969 6.578125 v 0.007812 c 0 2.953125 1.878906 5.589844 4.667969 6.578125 l 0.332031 0.117188 v 1.300781 h 4 v -1 h 3.269531 c 0.347657 0.597656 0.996094 1 1.730469 1 c 1.097656 0 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 c -0.734375 0 -1.382812 0.402344 -1.730469 1 h -3.269531 v -1 h -4 v 0.5625 c -1.804688 -0.789062 -2.988281 -2.570312 -3 -4.5625 c 0.011719 -2.113281 1.339844 -3.984375 3.332031 -4.695312 l 0.121094 -0.042969 c 0.371094 0.449219 0.925781 0.738281 1.546875 0.738281 c 1.097656 0 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m -1 12 h 2 v 2 h -2 z m 8 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawpolylinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawpolylinesymbolic;
