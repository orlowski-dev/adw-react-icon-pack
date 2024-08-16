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
      <path d="m 13.300781 3.304688 l -2.390625 2.5 l -4.113281 -4.210938 c -0.582031 -0.59375 -1.480469 -0.679688 -1.996094 -0.507812 c -0.519531 0.175781 -0.832031 0.507812 -0.832031 0.507812 l -2.386719 2.386719 s -0.335937 0.316406 -0.507812 0.832031 c -0.171875 0.519531 -0.074219 1.402344 0.507812 1.996094 l 4.207031 4.140625 l -2.5 2.34375 c -0.433593 0.433593 -0.359374 1.078125 0.019532 1.4375 c 0.171875 0.164062 0.410156 0.269531 0.6875 0.269531 h 8.59375 c 0.039062 0 0.078125 -0.003906 0.117187 -0.007812 c 0.597657 -0.070313 1.132813 -0.347657 1.539063 -0.75 c 0.40625 -0.40625 0.683594 -0.945313 0.753906 -1.542969 c 0.003906 -0.035157 0.007812 -0.074219 0.007812 -0.113281 v -8.574219 c -0.003906 -0.277344 -0.105468 -0.515625 -0.371093 -0.789063 c -0.261719 -0.277344 -0.90625 -0.351562 -1.335938 0.082032 z m -0.039062 2.789062 c -0.09375 2.171875 -0.167969 4.164062 -0.253907 6.382812 c -0.023437 0.195313 -0.066406 0.3125 -0.136718 0.386719 c -0.078125 0.074219 -0.195313 0.113281 -0.386719 0.136719 c -2.21875 0.085938 -4.234375 0.160156 -6.40625 0.253906 l 1.675781 -1.597656 l 0.707032 -0.707031 l -5.464844 -5.554688 l 2.386718 -2.386719 l 5.574219 5.46875 l 0.707031 -0.707031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrow5BottomRightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow5BottomRightSymbolic;
