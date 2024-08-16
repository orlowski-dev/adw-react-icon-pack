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
        <path d="m 1 3 h 14 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -14 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 4 4 v -1.5 c 0 -1.386719 1.113281 -2.5 2.5 -2.5 h 2.980469 c 1.382812 0 2.5 1.113281 2.5 2.5 v 1.5 h -2 v -1.5 c 0 -0.269531 -0.230469 -0.5 -0.5 -0.5 h -2.980469 c -0.269531 0 -0.5 0.230469 -0.5 0.5 v 1.5 z m 0 0"/>
        <path d="m 4 4 v 9 c 0 0.546875 0.453125 1 1 1 h 6 c 0.546875 0 1 -0.453125 1 -1 v -9 h 2 v 9 c 0 1.660156 -1.339844 3 -3 3 h -6 c -1.660156 0 -3 -1.339844 -3 -3 v -9 z m 0 0"/>
        <path d="m 6.824219 12 h -1.355469 c -0.179688 0 -0.347656 -0.097656 -0.4375 -0.253906 c -0.085938 -0.160156 -0.082031 -0.351563 0.011719 -0.507813 l 1.195312 -1.957031 l 0.851563 0.523438 l -1.195313 1.957031 l -0.425781 -0.761719 h 1.355469 z m 3.300781 -1.996094 l 0.769531 1.230469 c 0.09375 0.15625 0.097657 0.351563 0.011719 0.507813 c -0.089844 0.160156 -0.257812 0.257812 -0.4375 0.257812 h -2.632812 v -1 h 2.632812 l -0.425781 0.765625 l -0.765625 -1.234375 z m -3.300781 -1.6875 l 0.644531 -1.074218 c 0.085938 -0.144532 0.242188 -0.238282 0.414062 -0.242188 c 0.171876 -0.003906 0.332032 0.078125 0.425782 0.222656 l 1.273437 1.886719 l -0.828125 0.558594 l -1.273437 -1.886719 l 0.84375 -0.023438 l -0.644531 1.074219 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRecyclingbinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRecyclingbinsymbolic;
