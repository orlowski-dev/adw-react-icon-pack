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
      <path d="m 13.917969 0.0898438 l -1 1.0000002 c 1 0 1.996093 1.003906 1.996093 2 l 1 -1 c 0 -0.996094 -0.75 -2.0000002 -1.996093 -2.0000002 z m -1.921875 1.9062502 l -6.992188 7 l -0.003906 2 h 2 l 6.996094 -7 c 0 -0.996094 -1 -2 -2 -2 z m -8.992188 8 l -1 4 h 11.992188 l -1 -4 h -3 l -2.488282 2 h -3.507812 v -2 z m -0.996094 5 v 1 h 11.992188 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEditorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditorSymbolic;
