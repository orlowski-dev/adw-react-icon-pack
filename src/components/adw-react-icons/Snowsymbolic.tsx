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
      <path d="m 7.492188 0.492188 c -0.277344 0.003906 -0.496094 0.230468 -0.492188 0.507812 v 1.53125 l -1.25 -0.714844 c -0.15625 -0.097656 -0.355469 -0.105468 -0.515625 -0.011718 c -0.160156 0.089843 -0.257813 0.257812 -0.253906 0.445312 c 0.003906 0.183594 0.109375 0.347656 0.269531 0.433594 l 1.75 1 v 3.449218 l -2.988281 -1.726562 l 0.007812 -2.011719 c 0.011719 -0.1875 -0.078125 -0.363281 -0.238281 -0.460937 s -0.359375 -0.097656 -0.519531 0 c -0.15625 0.09375 -0.25 0.269531 -0.238281 0.457031 l -0.007813 1.441406 l -1.328125 -0.765625 c -0.117188 -0.070312 -0.253906 -0.089844 -0.386719 -0.054687 c -0.128906 0.035156 -0.242187 0.121093 -0.304687 0.238281 v 0.003906 c -0.136719 0.242188 -0.050782 0.546875 0.191406 0.679688 l 1.328125 0.765625 l -1.246094 0.726562 c -0.164062 0.085938 -0.269531 0.253907 -0.273437 0.4375 c -0.003906 0.183594 0.097656 0.355469 0.261718 0.445313 c 0.160157 0.089844 0.359376 0.082031 0.515626 -0.019532 l 1.738281 -1.015624 l 2.988281 1.726562 l -2.988281 1.722656 l -1.738281 -1.011718 c -0.15625 -0.101563 -0.355469 -0.109376 -0.515626 -0.019532 c -0.164062 0.089844 -0.265624 0.261719 -0.261718 0.445313 c 0.003906 0.183593 0.109375 0.351562 0.273437 0.4375 l 1.246094 0.726562 l -1.328125 0.765625 c -0.117188 0.066406 -0.203125 0.175782 -0.238281 0.308594 c -0.035157 0.128906 -0.015625 0.269531 0.054687 0.382812 v 0.003907 c 0.140625 0.238281 0.445313 0.3125 0.683594 0.171875 l 1.328125 -0.765625 l 0.007813 1.441406 c -0.011719 0.1875 0.082031 0.363281 0.238281 0.457031 c 0.160156 0.097656 0.359375 0.097656 0.519531 0 s 0.25 -0.273437 0.238281 -0.460937 l -0.007812 -2.015625 l 2.988281 -1.722656 v 3.5 l -1.746094 0.988281 c -0.242187 0.132812 -0.324218 0.4375 -0.191406 0.679687 c 0.136719 0.242188 0.441406 0.324219 0.683594 0.191406 l 1.253906 -0.710937 v 1.484375 c -0.003906 0.179688 0.09375 0.347656 0.246094 0.4375 c 0.15625 0.09375 0.351562 0.09375 0.507812 0 c 0.152344 -0.089844 0.25 -0.257812 0.246094 -0.4375 v -1.484375 l 1.253906 0.710937 c 0.242188 0.132813 0.546875 0.050782 0.683594 -0.191406 c 0.132812 -0.242187 0.050781 -0.546875 -0.191406 -0.679687 l -1.746094 -0.988281 v -3.5 l 3.03125 1.75 l -0.019531 2.007812 c -0.003907 0.179688 0.085937 0.351562 0.242187 0.445312 s 0.351563 0.097657 0.511719 0.003907 c 0.15625 -0.089844 0.253906 -0.261719 0.246094 -0.441407 l 0.015625 -1.441406 l 1.285156 0.742188 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.136718 -0.238281 0.054687 -0.546875 -0.183594 -0.683594 l -1.285156 -0.742187 l 1.242187 -0.730469 c 0.226563 -0.144531 0.296875 -0.445312 0.160157 -0.675781 c -0.136719 -0.230469 -0.433594 -0.3125 -0.667969 -0.183594 l -1.730469 1.015625 l -3.03125 -1.75 l 3.03125 -1.75 l 1.730469 1.019531 c 0.152343 0.097657 0.347656 0.101563 0.507812 0.015625 c 0.160157 -0.089844 0.261719 -0.257812 0.261719 -0.441406 c -0.003906 -0.183594 -0.101562 -0.351562 -0.265625 -0.4375 l -1.238281 -0.730469 l 1.285156 -0.742187 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.136719 -0.238281 -0.445313 -0.320312 -0.683594 -0.183594 l -1.285156 0.742188 l -0.015625 -1.441406 c 0.007812 -0.179688 -0.089844 -0.351563 -0.246094 -0.441407 c -0.160156 -0.09375 -0.355469 -0.089843 -0.511719 0.003907 s -0.246094 0.265624 -0.242187 0.449218 l 0.019531 2.003906 l -3.03125 1.75 v -3.449218 l 1.746094 -1 c 0.164062 -0.082032 0.269531 -0.25 0.273437 -0.433594 c 0.003907 -0.1875 -0.09375 -0.355469 -0.253906 -0.445312 c -0.160156 -0.09375 -0.359375 -0.085938 -0.515625 0.011718 l -1.25 0.714844 v -1.53125 c 0.003906 -0.136719 -0.050781 -0.265625 -0.144531 -0.363281 c -0.097657 -0.09375 -0.226563 -0.148438 -0.363281 -0.144531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSnowsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSnowsymbolic;
