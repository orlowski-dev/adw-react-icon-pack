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
      <path d="m 2.992188 0 c -0.796876 0 -1.558594 0.316406 -2.121094 0.878906 s -0.8789065 1.324219 -0.8789065 2.121094 v 6 c 0 0.519531 0.1367185 1.035156 0.4023435 1.5 c 0.535157 0.925781 1.527344 1.5 2.597657 1.5 h 7 v 4 h 3 c 1.070312 0 2.066406 -0.574219 2.601562 -1.5 c 0.265625 -0.464844 0.398438 -0.984375 0.398438 -1.5 h 0.007812 l -0.007812 -7 c 0 -0.003906 0 -0.007812 0 -0.015625 c 0 -0.792969 -0.316407 -1.558594 -0.878907 -2.121094 c -0.558593 -0.558593 -1.324219 -0.878906 -2.121093 -0.878906 c -0.058594 0 -0.117188 0.003906 -0.179688 0.015625 h -6.820312 v -3 z m 0 2 h 1 v 4 h -1 c -0.347657 0 -0.683594 0.066406 -1 0.175781 v -3.175781 c 0 -0.265625 0.105468 -0.519531 0.292968 -0.707031 s 0.441406 -0.292969 0.707032 -0.292969 z m 10 2.988281 c 0.265624 0 0.519531 0.101563 0.707031 0.292969 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 c 0 0.023438 0 0.046875 0.003906 0.066407 l 0.003906 4.125 c -0.320312 -0.113282 -0.660156 -0.179688 -1.007812 -0.179688 h -10 c -0.359376 0 -0.6875 -0.1875 -0.867188 -0.5 c -0.085938 -0.15625 -0.132812 -0.328125 -0.132812 -0.5 s 0.046874 -0.34375 0.132812 -0.5 c 0.179688 -0.3125 0.507812 -0.5 0.867188 -0.5 h 3 v -3 h 7 z m -1 7.011719 h 1 c 0.359374 0 0.6875 0.1875 0.867187 0.5 s 0.179687 0.6875 0 1 s -0.507813 0.5 -0.867187 0.5 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPapyrussymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPapyrussymbolic;
