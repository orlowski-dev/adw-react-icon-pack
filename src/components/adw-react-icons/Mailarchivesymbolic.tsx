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
        <path d="m 0 4 v 9.976562 c 0 1.199219 0.980469 2 2.1875 2 h 11.625 c 1.207031 0 2.1875 -1.019531 2.1875 -2.21875 v -9.757812 s 0 -2 -2 -2 v 12 h -12 v -12 c -2 0 -2 2 -2 2 z m 0 0"/>
        <path d="m 1 9 v 1 h 3.625 c 0.023438 0.300781 -0.007812 0.605469 0.300781 1.222656 c 0.4375 0.871094 1.40625 1.777344 3.074219 1.777344 s 2.636719 -0.90625 3.070312 -1.777344 c 0.308594 -0.617187 0.28125 -0.921875 0.304688 -1.222656 h 2.625 v -1 h -3.5 v 0.5 s -0.007812 0.648438 -0.324219 1.277344 c -0.3125 0.628906 -0.84375 1.222656 -2.175781 1.222656 s -1.863281 -0.59375 -2.179688 -1.222656 c -0.3125 -0.628906 -0.320312 -1.277344 -0.320312 -1.277344 v -0.5 z m 0 0"/>
        <path d="m 3 0 v 1 h 10 v -1 z m 0.5 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 5.5 h 1 v -4.375 l 4 3 l 4 -3 v 4.375 h 1 v -5.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 1.332031 1 h 6.332031 l -3.164062 2.375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailarchivesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailarchivesymbolic;
