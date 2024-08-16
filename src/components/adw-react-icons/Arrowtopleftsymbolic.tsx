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
      <path d="m 2.707031 12.695312 l 2.390625 -2.5 l 4.113282 4.210938 c 0.582031 0.59375 1.476562 0.679688 1.996093 0.507812 c 0.515625 -0.175781 0.832031 -0.507812 0.832031 -0.507812 l 1.191407 -1.195312 l 1.195312 -1.191407 s 0.332031 -0.316406 0.507813 -0.832031 c 0.171875 -0.519531 0.074218 -1.402344 -0.507813 -1.996094 l -4.207031 -4.140625 l 2.5 -2.34375 c 0.429688 -0.433593 0.355469 -1.078125 -0.023438 -1.4375 c -0.171874 -0.164062 -0.40625 -0.269531 -0.683593 -0.269531 h -8.597657 c -0.039062 0 -0.078124 0.003906 -0.113281 0.007812 c -0.597656 0.070313 -1.136719 0.347657 -1.542969 0.75 c -0.402343 0.40625 -0.679687 0.945313 -0.75 1.542969 c -0.003906 0.035157 -0.007812 0.074219 -0.007812 0.113281 v 8.574219 c 0 0.277344 0.105469 0.515625 0.367188 0.789063 c 0.261718 0.277344 0.90625 0.351562 1.339843 -0.082032 z m 0.039063 -2.789062 c 0.09375 -2.171875 0.164062 -4.164062 0.253906 -6.382812 c 0.023438 -0.195313 0.0625 -0.3125 0.136719 -0.386719 s 0.191406 -0.113281 0.386719 -0.136719 c 2.21875 -0.085938 4.230468 -0.160156 6.402343 -0.253906 l -1.671875 1.597656 l -0.707031 0.707031 l 5.464844 5.554688 l -1.195313 1.191406 l -1.191406 1.195313 l -5.574219 -5.46875 l -0.707031 0.707031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowtopleftsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowtopleftsymbolic;
