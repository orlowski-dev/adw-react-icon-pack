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
        <path d="m 9 14 c -0.546875 0 -1 -0.453125 -1 -1 s 0.453125 -1 1 -1 s 1 0.453125 1 1 s -0.453125 1 -1 1 z m 0 -4 c -1.660156 0 -3 1.339844 -3 3 s 1.339844 3 3 3 s 3 -1.339844 3 -3 s -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 15 14 h -4 v -2 h 4 z m 0 0"/>
        <path d="m 7 14 h -6 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 h 6 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 z m 0 0"/>
        <path d="m 3 13 v -6 c 0 -3.320312 2.679688 -6 6 -6 h 6 v 2 h -6 c -2.203125 0 -4 1.796875 -4 4 v 6 z m 0 0"/>
        <path d="m 3.777344 11.457031 l -2.617188 -1.339843 c -1.339844 -0.6875 -1.59375 -2.480469 -0.496094 -3.511719 l 4.238282 -3.96875 l 0.683594 0.726562 l -4.238282 3.972657 c -0.585937 0.546874 -0.449218 1.523437 0.265625 1.890624 l 2.621094 1.339844 z m 0 0"/>
        <path d="m 9.4375 9 h -1.355469 c -0.179687 0 -0.347656 -0.097656 -0.433593 -0.253906 c -0.089844 -0.160156 -0.085938 -0.351563 0.007812 -0.507813 l 1.195312 -1.957031 l 0.855469 0.523438 l -1.195312 1.957031 l -0.429688 -0.761719 h 1.355469 z m 3.304688 -1.996094 l 0.765624 1.230469 c 0.097657 0.15625 0.101563 0.351563 0.011719 0.507813 c -0.085937 0.160156 -0.253906 0.257812 -0.4375 0.257812 h -2.628906 v -1 h 2.628906 l -0.421875 0.765625 l -0.769531 -1.234375 z m -3.304688 -1.6875 l 0.644531 -1.074218 c 0.089844 -0.144532 0.246094 -0.238282 0.414063 -0.242188 c 0.171875 -0.003906 0.332031 0.078125 0.429687 0.222656 l 1.273438 1.886719 l -0.828125 0.558594 l -1.273438 -1.886719 l 0.84375 -0.023438 l -0.644531 1.074219 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEmptyTrashSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmptyTrashSymbolic;
