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
      <path d="m 0 0 v 2 h 0.0859375 c 0.5000005 0 0.9140625 0.414062 0.9140625 0.914062 v 13.085938 h 2 v -2.007812 h 1 c 0 1.109374 0.890625 2 2 2 h 5 c 1.109375 0 2 -0.890626 2 -2 c 1.660156 0 3 -1.339844 3 -3 v -6 c 0 -1.660157 -1.339844 -3 -3 -3 h -10.152344 c -0.382812 -1.160157 -1.46875 -1.992188 -2.7617185 -1.992188 z m 3 3.992188 h 10 c 0.546875 0 1 0.453124 1 1 v 6 c 0 0.546874 -0.453125 1 -1 1 h -2 v 2 h -1 v -2 h -1 v 2 h -1 v -2 h -1 v 2 h -1 v -2 h -3 z m 3 1 v 1 h -1 v 3 h 1 v 1 h 1 v -1 h 1 v 1 h 1 v -1 h 1 v 1 h 1 v -1 h 1 v -3 h -1 v -1 h -1 v 1 h -1 v -1 h -1 v 1 h -1 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPcicardsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPcicardsymbolic;
