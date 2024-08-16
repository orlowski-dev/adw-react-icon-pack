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
      <path d="m 8 0 c -0.296875 -0.00390625 -0.578125 0.125 -0.773438 0.347656 c -0.191406 0.226563 -0.273437 0.523438 -0.226562 0.816406 v 2.835938 h 2 v -1.914062 c 2.378906 0.398437 4.320312 2.195312 4.855469 4.613281 c 0.613281 2.753906 -0.765625 5.546875 -3.320313 6.738281 c -2.554687 1.191406 -5.578125 0.453125 -7.296875 -1.785156 c -1.714843 -2.238282 -1.644531 -5.351563 0.167969 -7.507813 c 0.351562 -0.425781 0.296875 -1.054687 -0.125 -1.410156 c -0.425781 -0.355469 -1.054688 -0.300781 -1.410156 0.121094 c -2.40625 2.871093 -2.496094 7.042969 -0.214844 10.011719 c 2.277344 2.972656 6.332031 3.964843 9.726562 2.382812 c 3.390626 -1.582031 5.238282 -5.324219 4.429688 -8.980469 c -0.8125 -3.660156 -4.066406 -6.269531 -7.8125 -6.269531 z m -3.011719 3.988281 c -0.40625 0.003907 -0.769531 0.25 -0.925781 0.625 c -0.152344 0.378907 -0.0625 0.808594 0.230469 1.09375 l 1.777343 1.777344 c -0.183593 0.6875 0.011719 1.425781 0.515626 1.929687 c 0.78125 0.78125 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.503906 -0.503907 -1.242187 -0.699219 -1.929687 -0.515626 l -1.777344 -1.777343 c -0.1875 -0.195313 -0.445312 -0.300781 -0.71875 -0.304688 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTimerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTimerSymbolic;
