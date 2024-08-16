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
      <path d="m 3.300781 2.683594 l 2.5 2.390625 l -4.207031 4.113281 c -0.597656 0.582031 -0.679688 1.476562 -0.507812 1.996094 c 0.171874 0.519531 0.507812 0.832031 0.507812 0.832031 l 1.191406 1.195313 l 1.191406 1.191406 s 0.316407 0.335937 0.835938 0.507812 c 0.515625 0.171875 1.398438 0.074219 1.996094 -0.507812 l 4.140625 -4.207032 l 2.339843 2.5 c 0.433594 0.433594 1.078126 0.359376 1.4375 -0.019531 c 0.164063 -0.171875 0.269532 -0.410156 0.269532 -0.6875 v -8.597656 c 0 -0.035156 0 -0.074219 -0.003906 -0.113281 c -0.070313 -0.597656 -0.351563 -1.132813 -0.753907 -1.539063 c -0.40625 -0.40625 -0.941406 -0.683593 -1.539062 -0.753906 c -0.039063 -0.003906 -0.078125 -0.007813 -0.117188 -0.007813 h -8.574219 c -0.277343 0 -0.511718 0.105469 -0.789062 0.371094 c -0.273438 0.261719 -0.347656 0.90625 0.082031 1.335938 z m 2.792969 0.039062 c 2.171875 0.09375 4.164062 0.167969 6.382812 0.253906 c 0.191407 0.023438 0.308594 0.066407 0.386719 0.136719 c 0.070313 0.078125 0.109375 0.195313 0.132813 0.386719 c 0.089844 2.21875 0.164062 4.234375 0.253906 6.40625 l -1.59375 -1.675781 l -0.707031 -0.707031 l -5.554688 5.464843 l -1.195312 -1.191406 l -1.191407 -1.195313 l 5.464844 -5.574218 l -0.707031 -0.707032 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrow5TopRightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrow5TopRightSymbolic;
