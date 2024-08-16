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
      <path d="m 2.484375 8 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 4 c 0 0.832031 0.667969 1.5 1.5 1.5 h 9.011719 c 0.832031 0 1.5 -0.667969 1.5 -1.5 v -4 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m 0.0625 1 c 3.1875 0.269531 6.117187 0.230469 8.886719 0 c 0.300781 -0.023438 0.5625 0.261719 0.5625 0.5625 v 2.875 c 0 0.300781 -0.261719 0.527344 -0.5625 0.5625 c -3.003906 0.339844 -5.964844 0.328125 -8.886719 0 c -0.300781 -0.035156 -0.5625 -0.261719 -0.5625 -0.5625 v -2.875 c 0 -0.300781 0.261719 -0.585938 0.5625 -0.5625 z m 7.945313 -9 c -0.832032 0 -1.5 0.667969 -1.5 1.5 v 4 c 0 0.832031 0.667968 1.5 1.5 1.5 h 4.003906 c 0.832031 0 1.503906 -0.667969 1.503906 -1.5 v -4 c 0 -0.832031 -0.671875 -1.5 -1.503906 -1.5 z m 0.0625 1 c 1.292968 0.125 2.589843 0.125 3.882812 0 c 0.300781 -0.027344 0.5625 0.261719 0.5625 0.5625 v 2.875 c 0 0.300781 -0.261719 0.527344 -0.5625 0.5625 c -1.257812 0.152344 -2.542969 0.179688 -3.882812 0 c -0.296876 -0.039062 -0.5625 -0.261719 -0.5625 -0.5625 v -2.875 c 0 -0.300781 0.261718 -0.589844 0.5625 -0.5625 z m -8.070313 0 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 3 c 0 0.832031 0.667969 1.5 1.5 1.5 h 4.003906 c 0.832031 0 1.503907 -0.667969 1.503907 -1.5 v -3 c 0 -0.832031 -0.671876 -1.5 -1.503907 -1.5 z m 0.0625 1 c 1.691406 0.199219 2.847656 0.128906 3.878906 0 c 0.300781 -0.039062 0.5625 0.261719 0.5625 0.5625 v 2.875 c 0 0.300781 -0.261719 0.523438 -0.5625 0.5625 c -1.285156 0.167969 -2.589843 0.167969 -3.878906 0 c -0.300781 -0.039062 -0.5625 -0.261719 -0.5625 -0.5625 v -2.875 c 0 -0.300781 0.261719 -0.597656 0.5625 -0.5625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboardshortcutssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardshortcutssymbolic;
