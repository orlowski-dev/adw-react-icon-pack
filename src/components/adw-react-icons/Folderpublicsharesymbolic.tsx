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
      <path d="m 13.03125 -0.00390625 c -1.65625 0 -3 1.33984425 -3 3.00000025 c 0 0.121094 0.011719 0.246094 0.027344 0.367187 l -4.945313 2.472657 c -0.558593 -0.539063 -1.304687 -0.839844 -2.082031 -0.839844 c -1.65625 0 -3 1.339844 -3 3 c 0 1.65625 1.34375 3 3 3 c 0.773438 -0.003906 1.519531 -0.308594 2.074219 -0.84375 l 4.953125 2.472656 c -0.015625 0.121094 -0.027344 0.246094 -0.027344 0.371094 c 0 1.65625 1.34375 3 3 3 s 3 -1.34375 3 -3 c 0 -1.660156 -1.34375 -3 -3 -3 c -0.773438 0 -1.519531 0.304687 -2.074219 0.84375 l -4.953125 -2.476563 c 0.015625 -0.121093 0.027344 -0.246093 0.027344 -0.367187 c 0 -0.125 -0.007812 -0.25 -0.023438 -0.371094 l 4.945313 -2.472656 c 0.558594 0.535156 1.304687 0.839844 2.078125 0.84375 c 1.65625 0 3 -1.34375 3 -3 c 0 -1.660156 -1.34375 -3.00000025 -3 -3.00000025 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFolderpublicsharesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFolderpublicsharesymbolic;
