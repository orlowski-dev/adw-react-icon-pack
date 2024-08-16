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
      <path d="m 14 16 c 1.109375 0 2 -0.890625 2 -2 v -8.113281 c 0 -3.257813 -2.628906 -5.886719 -5.886719 -5.886719 h -0.152343 h 0.007812 c -3.28125 -0.0351562 -5.960938 2.589844 -5.996094 5.875 v 0.011719 l 0.027344 2.125 l 1.417969 -0.921875 l -1.300781 -0.59375 c -1.355469 -0.621094 -2.945313 -0.097656 -3.671876 1.203125 l -0.058593 0.105469 c -0.691407 1.238281 -0.3593752 2.777343 0.78125 3.621093 l 2.40625 1.78125 c 0.25 0.1875 0.398437 0.480469 0.398437 0.792969 v 0.003906 v 0.011719 c 0.015625 1.117187 0.925782 2 2.042969 1.984375 h -0.015625 z m -8.027344 -2.011719 v 0.011719 c 0 -0.945312 -0.449218 -1.835938 -1.210937 -2.398438 l -2.40625 -1.78125 c -0.316407 -0.238281 -0.417969 -0.691406 -0.222657 -1.039062 l 0.058594 -0.105469 c 0.210938 -0.382812 0.699219 -0.542969 1.09375 -0.359375 l 2.734375 1.25 l -0.046875 -3.695312 v 0.023437 c 0.023438 -2.167969 1.808594 -3.917969 3.976563 -3.894531 h 0.003906 h 0.160156 c 2.140625 0 3.886719 1.746094 3.886719 3.886719 v 8.113281 h -8.015625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMittenSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMittenSymbolic;
