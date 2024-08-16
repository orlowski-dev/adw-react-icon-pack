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
      <path d="m 9.554688 0.0703125 c -0.195313 0.1953125 -0.300782 0.4609375 -0.292969 0.7343755 c 0.007812 0.261718 0.117187 0.507812 0.304687 0.6875 l 1.578125 1.582031 c -0.058593 0.15625 -0.089843 0.328125 -0.089843 0.496093 c 0 0.828126 0.671874 1.5 1.5 1.5 c 0.238281 0 0.476562 -0.058593 0.6875 -0.164062 l 2.167968 2.164062 c 0.191406 -0.195312 0.300782 -0.460937 0.292969 -0.738281 c -0.011719 -0.257812 -0.117187 -0.503906 -0.304687 -0.6875 l -1.46875 -1.46875 c 0.082031 -0.191406 0.125 -0.398437 0.125 -0.605469 c 0 -0.828124 -0.671876 -1.5 -1.5 -1.5 c -0.273438 0 -0.542969 0.078126 -0.777344 0.222657 z m -3.289063 0.2851565 c -0.261719 0.007812 -0.507813 0.113281 -0.6875 0.300781 l -1.472656 1.472656 c -0.191407 -0.085937 -0.398438 -0.128906 -0.605469 -0.128906 c -0.828125 0 -1.5 0.671875 -1.5 1.5 c 0 0.273438 0.078125 0.542969 0.222656 0.78125 l -2.222656 2.21875 c 0.195312 0.195312 0.460938 0.300781 0.738281 0.292969 c 0.257813 -0.007813 0.503907 -0.117188 0.6875 -0.304688 l 1.578125 -1.574219 c 0.15625 0.054688 0.328125 0.085938 0.496094 0.085938 c 0.828125 0 1.5 -0.671875 1.5 -1.5 c 0 -0.238281 -0.058594 -0.472656 -0.167969 -0.6875 l 2.167969 -2.167969 c -0.195312 -0.191406 -0.460938 -0.300781 -0.734375 -0.289062 z m -0.558594 3.9375 l -1.414062 1.414062 l 0.996093 0.992188 l 0.011719 0.011719 c 0.574219 0.566406 0.707031 0.960937 0.699219 1.292968 c -0.007812 0.332032 -0.191406 0.757813 -0.710938 1.292969 c -0.003906 0.003906 -0.003906 0.003906 -0.003906 0.007813 l -0.992187 0.988281 l 1.414062 1.414062 l 1.003907 -1.003906 h 0.003906 c 0.5625 -0.578125 0.957031 -0.710937 1.292968 -0.703125 c 0.332032 0.007812 0.757813 0.191406 1.296876 0.71875 l 0.988281 0.988281 l 1.414062 -1.414062 l -1.007812 -1.007813 h -0.003907 v -0.003906 c -0.597656 -0.582031 -0.710937 -0.960938 -0.695312 -1.292969 c 0.019531 -0.328125 0.222656 -0.769531 0.726562 -1.300781 l 0.980469 -0.980469 l -1.414062 -1.414062 l -0.992188 0.988281 c -0.535156 0.527344 -0.960937 0.710938 -1.296875 0.71875 c -0.332031 0.007812 -0.726562 -0.125 -1.289062 -0.703125 l -0.015625 -0.007813 z m -5.113281 4.636719 c -0.195312 0.195312 -0.304688 0.460937 -0.292969 0.738281 c 0.007813 0.257812 0.113281 0.503906 0.300781 0.6875 l 1.472657 1.46875 c -0.085938 0.191406 -0.128907 0.398437 -0.128907 0.605469 c 0 0.828124 0.671876 1.5 1.5 1.5 c 0.273438 0 0.542969 -0.078126 0.78125 -0.222657 l 2.21875 2.222657 c 0.195313 -0.195313 0.300782 -0.460938 0.292969 -0.734376 c -0.007812 -0.261718 -0.117187 -0.507812 -0.300781 -0.6875 l -1.578125 -1.582031 c 0.054687 -0.15625 0.085937 -0.328125 0.085937 -0.496093 c 0 -0.828126 -0.671874 -1.5 -1.5 -1.5 c -0.238281 0 -0.476562 0.058593 -0.6875 0.164062 z m 14.632812 0.277343 c -0.261718 0.007813 -0.507812 0.117188 -0.6875 0.304688 l -1.472656 1.46875 c -0.191406 -0.082031 -0.394531 -0.125 -0.601562 -0.125 c -0.832032 0 -1.5 0.667969 -1.5 1.5 c 0 0.273437 0.074218 0.542969 0.21875 0.777343 l -2.21875 2.222657 c 0.191406 0.191406 0.460937 0.300781 0.734375 0.289062 c 0.261719 -0.007812 0.507812 -0.113281 0.6875 -0.300781 l 1.578125 -1.578125 c 0.160156 0.058594 0.328125 0.085937 0.5 0.089844 c 0.828125 0 1.5 -0.671875 1.5 -1.5 c 0 -0.242188 -0.058594 -0.476563 -0.167969 -0.6875 l 2.167969 -2.167969 c -0.195313 -0.195312 -0.464844 -0.300781 -0.738282 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDroneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDroneSymbolic;
