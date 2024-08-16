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
      <path d="m 6.707031 0 c -0.316406 0.0273438 -0.53125 0.335938 -0.4375 0.640625 l 0.425781 1.542969 c -0.425781 0.109375 -0.839843 0.261718 -1.238281 0.457031 l -1.023437 -1.765625 c -0.09375 -0.164062 -0.269532 -0.261719 -0.457032 -0.253906 c -0.378906 0.011718 -0.605468 0.429687 -0.410156 0.757812 l 1.015625 1.757813 c -0.335937 0.214843 -0.664062 0.449219 -0.976562 0.703125 l -1.25 -1.253906 c -0.097657 -0.097657 -0.226563 -0.152344 -0.363281 -0.152344 c -0.445313 0.003906 -0.664063 0.546875 -0.347657 0.859375 l 1.222657 1.21875 c -0.28125 0.265625 -0.546876 0.523437 -0.792969 0.792969 l -0.71875 -0.71875 c -0.097657 -0.097657 -0.226563 -0.152344 -0.363281 -0.152344 c -0.445313 0.003906 -0.664063 0.546875 -0.347657 0.859375 l 0.765625 0.761719 c -0.886718 1.078124 -1.410156 1.945312 -1.410156 1.945312 s 3.582031 6 8 6 s 8 -6 8 -6 s -0.523438 -0.867188 -1.410156 -1.945312 l 0.765625 -0.761719 c 0.324219 -0.320313 0.089843 -0.871094 -0.367188 -0.859375 c -0.128906 0.003906 -0.25 0.058594 -0.34375 0.152344 l -0.71875 0.71875 c -0.199219 -0.21875 -0.410156 -0.425782 -0.632812 -0.644532 l 1.101562 -1.414062 c 0.269531 -0.335938 0.015625 -0.835938 -0.414062 -0.8125 c -0.148438 0.007812 -0.285157 0.078125 -0.375 0.199218 l -1.050781 1.34375 c -0.261719 -0.21875 -0.527344 -0.433593 -0.808594 -0.628906 l 1.074218 -1.738281 c 0.21875 -0.34375 -0.046874 -0.792969 -0.453124 -0.765625 c -0.164063 0.007812 -0.3125 0.097656 -0.398438 0.242188 l -1.074219 1.738281 c -0.367187 -0.203125 -0.742187 -0.371094 -1.128906 -0.503907 l 0.570313 -1.648437 c 0.117187 -0.324219 -0.117188 -0.6640625 -0.460938 -0.671875 c -0.21875 -0.00390625 -0.414062 0.136719 -0.480469 0.34375 l -0.601562 1.722656 c -0.257813 -0.042968 -0.523438 -0.066406 -0.792969 -0.066406 c -0.105469 0 -0.207031 0.019531 -0.3125 0.027344 l -0.457031 -1.652344 c -0.054688 -0.21875 -0.25 -0.37109375 -0.472657 -0.375 c -0.019531 0 -0.035156 0 -0.054687 0 z m 1.292969 4 c 3.867188 0 6 4 6 4 s -2.132812 4 -6 4 s -6 -4 -6 -4 s 2.132812 -4 6 -4 z m 0 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEyeOpenSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEyeOpenSymbolic;
