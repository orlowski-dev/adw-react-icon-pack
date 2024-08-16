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
        <path d="m 8.152344 3.007812 c 0.726562 0.035157 1.433594 0.335938 1.96875 0.871094 c 0.855468 0.855469 1.113281 2.152344 0.652344 3.269532 c -0.332032 0.796874 -0.988282 1.390624 -1.773438 1.671874 v 1.179688 h -2 v -2 c 0 -0.550781 0.449219 -1 1 -1 c 0.40625 0 0.769531 -0.242188 0.925781 -0.617188 c 0.152344 -0.375 0.070313 -0.800781 -0.21875 -1.089843 c -0.289062 -0.289063 -0.714843 -0.371094 -1.089843 -0.214844 c -0.375 0.152344 -0.617188 0.515625 -0.617188 0.921875 h -2 c 0 -1.210938 0.734375 -2.308594 1.851562 -2.769531 c 0.417969 -0.175781 0.863282 -0.246094 1.300782 -0.222657 z m -0.152344 7.992188 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 13.648438 2.375 c -3.113282 -3.117188 -8.179688 -3.117188 -11.296876 0 c -3.113281 3.113281 -3.113281 8.179688 0 11.292969 c 3.117188 3.113281 8.183594 3.113281 11.296876 0 c 3.113281 -3.113281 3.113281 -8.179688 0 -11.292969 z m -1.609376 1.609375 c 2.25 2.25 2.25 5.824219 0 8.074219 c -2.25 2.253906 -5.828124 2.253906 -8.078124 0 c -2.25 -2.25 -2.25 -5.824219 0 -8.078125 c 2.25 -2.25 5.828124 -2.25 8.078124 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwQuestionroundoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwQuestionroundoutlinesymbolic;
