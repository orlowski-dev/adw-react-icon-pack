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
      <path d="m 2.992188 1 c -0.796876 0 -1.558594 0.316406 -2.121094 0.878906 s -0.8789065 1.324219 -0.8789065 2.121094 v 8 c 0 0.519531 0.1367185 1.035156 0.4023435 1.5 c 0.535157 0.925781 1.527344 1.5 2.597657 1.5 h 10 c 1.070312 0 2.066406 -0.574219 2.601562 -1.5 c 0.265625 -0.464844 0.398438 -0.980469 0.398438 -1.5 v -8 c 0 -0.796875 -0.316407 -1.558594 -0.878907 -2.121094 c -0.558593 -0.5625 -1.324219 -0.878906 -2.121093 -0.878906 h -3 v 4 h -4 v -4 z m 0 2 h 1 v 6 h -1 c -0.347657 0 -0.683594 0.066406 -1 0.175781 v -5.175781 c 0 -0.265625 0.105468 -0.519531 0.292968 -0.707031 s 0.441406 -0.292969 0.707032 -0.292969 z m 9 0 h 1 c 0.265624 0 0.519531 0.105469 0.707031 0.292969 s 0.292969 0.441406 0.292969 0.707031 v 5.175781 c -0.316407 -0.109375 -0.652344 -0.175781 -1 -0.175781 h -1 z m -6 4 h 4 v 4 h 3 c 0.359374 0 0.6875 0.1875 0.867187 0.5 c 0.085937 0.152344 0.128906 0.316406 0.132813 0.484375 v 0.015625 h 0.003906 c 0 0.171875 -0.046875 0.34375 -0.136719 0.5 c -0.179687 0.3125 -0.507813 0.5 -0.867187 0.5 h -10 c -0.359376 0 -0.6875 -0.1875 -0.863282 -0.5 c -0.179687 -0.3125 -0.179687 -0.6875 0 -1 c 0.175782 -0.3125 0.503906 -0.5 0.863282 -0.5 h 3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScrollsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScrollsymbolic;
