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
      <path d="m 12.671875 13.289062 l -2.496094 -2.390624 l 4.207031 -4.113282 c 0.597657 -0.582031 0.679688 -1.476562 0.507813 -1.996094 c -0.171875 -0.519531 -0.507813 -0.832031 -0.507813 -0.832031 l -1.191406 -1.195312 l -1.195312 -1.191407 s -0.3125 -0.335937 -0.832032 -0.507812 c -0.519531 -0.171875 -1.398437 -0.074219 -1.996093 0.507812 l -4.140625 4.207032 l -2.34375 -2.5 c -0.429688 -0.433594 -1.074219 -0.359375 -1.4375 0.019531 c -0.164063 0.171875 -0.269532 0.410156 -0.269532 0.6875 v 8.597656 c 0 0.035157 0.003907 0.074219 0.007813 0.113281 c 0.070313 0.597657 0.347656 1.132813 0.753906 1.539063 s 0.941407 0.683594 1.539063 0.753906 c 0.039062 0.003907 0.078125 0.007813 0.113281 0.007813 h 8.574219 c 0.28125 0 0.515625 -0.105469 0.789062 -0.371094 c 0.277344 -0.261719 0.351563 -0.90625 -0.082031 -1.335938 z m -2.789063 -0.039062 c -2.171874 -0.09375 -4.164062 -0.167969 -6.382812 -0.253906 c -0.191406 -0.023438 -0.308594 -0.066406 -0.386719 -0.136719 c -0.070312 -0.078125 -0.113281 -0.195313 -0.136719 -0.386719 c -0.085937 -2.21875 -0.160156 -4.234375 -0.253906 -6.40625 l 1.597656 1.675782 l 0.707032 0.707031 l 5.554687 -5.464844 l 1.195313 1.191406 l 1.191406 1.195313 l -5.464844 5.574218 l 0.707032 0.707032 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowbottomleftsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowbottomleftsymbolic;
