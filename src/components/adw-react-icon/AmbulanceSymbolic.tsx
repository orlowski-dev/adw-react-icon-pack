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
      <path d="m 7 1 c -0.550781 0 -1 0.449219 -1 1 v 1 h -3 c -0.378906 0 -0.726562 0.214844 -0.894531 0.550781 l -2 4 l 0.011719 0.007813 c -0.0742192 0.136718 -0.11328175 0.289062 -0.117188 0.441406 v 3 s -0.015625 0.457031 0.230469 0.949219 c 0.246093 0.488281 0.9375 1.050781 1.769531 1.050781 h 0.050781 c 0.234375 1.132812 1.25 2 2.449219 2 s 2.214844 -0.867188 2.449219 -2 h 2.101562 c 0.234375 1.132812 1.25 2 2.449219 2 s 2.214844 -0.867188 2.449219 -2 h 0.050781 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -8 s 0.015625 -0.457031 -0.230469 -0.949219 c -0.246093 -0.488281 -0.9375 -1.050781 -1.769531 -1.050781 z m 3 2 h 2 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h -2 v -2 h 2 z m -6.382812 2 h 2.382812 v 2 h -3.382812 z m 0.882812 6 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 7 0 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAmbulanceSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAmbulanceSymbolic;
