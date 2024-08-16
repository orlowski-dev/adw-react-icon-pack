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
      <path d="m 5 1 c -1.644531 0 -3 1.355469 -3 3 v 6.996094 h 1 v -0.996094 h 1 v -6 c 0 -0.570312 0.429688 -1 1 -1 h 4 v 1.5 c 0 1 0.5 1.5 1.5 1.5 h 1.5 v 7 h 1 v 1 h 1 v -8.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 8 13 h -1 v 0.992188 h -1 v 1 h 1 v -0.992188 h 1 z m -2 0.992188 v -1 h -1 v 1 z m -1 0 h -1 v 1 h 1 z m -1 0 v -1 h -1 v 1 z m -1 0 h -1 v 1 h 1 z m -1 0 v -1 h -1 v 1 z m -1 0 h -1 v 1 h 1 z m -1 0 v -1 h -1 v 1 z m -1 0 h -1 v 1 h 1 z m -1 0 v -1 h -1 v 1 z m 0 -1 h 1 v -1 h -1 z m 0 -1 v -1 h -1 v 1 z m 0 -1 h 1 v -1 h -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFolderTemplatesSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFolderTemplatesSymbolic;
