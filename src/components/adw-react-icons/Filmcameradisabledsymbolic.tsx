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
        <path d="m 7 3.007812 c -1.367188 0 -2.53125 0.933594 -2.886719 2.195313 l 1.886719 1.886719 v -1.082032 c 0 -0.574218 0.429688 -1 1 -1 h 6 c 0.570312 0 1 0.425782 1 1 v 5 c 0 0.570313 -0.429688 1 -1 1 h -2.082031 l 2 2 h 0.082031 c 1.644531 0 3 -1.355468 3 -3 v -5 c 0 -1.648437 -1.355469 -3 -3 -3 z m -7 0.992188 v 9 h 0.644531 l 3.355469 -3.492188 v 1.5 c 0 1.644532 1.355469 3 3 3 h 3.792969 l -2 -2 h -1.792969 c -0.570312 0 -1 -0.429687 -1 -1 v -1.792968 l -5.210938 -5.214844 z m 0 0"/>
        <path d="m 1.5 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFilmcameradisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFilmcameradisabledsymbolic;
