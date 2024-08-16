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
        <path d="m 5.015625 -0.00390625 v 2.00000025 h 8 c 0.574219 0 1 0.429687 1 1 v 8 h 2 v -8 c 0 -1.644532 -1.351563 -3.00000025 -3 -3.00000025 z m 0 0"/>
        <path d="m 3.019531 1.996094 c 0 -1.101563 0.894531 -1.996094 1.996094 -1.996094 v 1.996094 z m 0 0"/>
        <path d="m 16.015625 10.996094 c 0 1.101562 -0.894531 1.996094 -1.996094 1.996094 v -1.996094 z m 0 0"/>
        <path d="m 4.015625 3.996094 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 7.015625 3.996094 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 4.015625 13.996094 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 7.015625 13.996094 h 2 v 1 h -2 z m 0 0"/>
        <path d="m 1.015625 6.996094 h 1 v 2 h -1 z m 0 0"/>
        <path d="m 1.015625 9.996094 h 1 v 2 h -1 z m 0 0"/>
        <path d="m 11.015625 6.996094 h 1 v 2 h -1 z m 0 0"/>
        <path d="m 11.015625 9.996094 h 1 v 2 h -1 z m 0 0"/>
        <path d="m 3.015625 4.496094 c 0 0.828125 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 c 0.832031 0 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 13.015625 4.496094 c 0 0.828125 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 c 0.832031 0 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 3.015625 14.496094 c 0 0.828125 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 c 0.832031 0 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 13.015625 14.496094 c 0 0.828125 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 c 0.832031 0 1.5 0.671875 1.5 1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSelectionOpaque3Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSelectionOpaque3Symbolic;
