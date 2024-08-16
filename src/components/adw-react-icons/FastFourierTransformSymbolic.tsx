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
        <path d="m 12.019531 4 l -0.859375 -0.488281 l 2.980469 5 v -1.023438 l -2.980469 5 l 0.859375 -0.488281 h -7.96875 l 0.855469 0.480469 l -3.050781 -5 v 1.039062 l 3.050781 -5 l -0.855469 0.480469 z m -11.875 3.480469 c -0.1953122 0.320312 -0.1953122 0.71875 0 1.039062 l 3.054688 5 c 0.179687 0.300781 0.503906 0.480469 0.851562 0.480469 h 7.96875 c 0.351563 0 0.679688 -0.183594 0.859375 -0.488281 l 2.980469 -5 c 0.1875 -0.316407 0.1875 -0.707031 0 -1.023438 l -2.980469 -5 c -0.179687 -0.304687 -0.507812 -0.488281 -0.859375 -0.488281 h -7.96875 c -0.347656 0 -0.671875 0.179688 -0.851562 0.480469 z m 0 0"/>
        <path d="m 10.574219 6 l -0.421875 -0.230469 l 1.578125 2.472657 l -0.003907 -0.53125 l -1.578124 2.558593 l 0.425781 -0.238281 h -5.011719 l 0.429688 0.246094 l -1.527344 -2.5625 l -0.003906 0.519531 l 1.527343 -2.472656 l -0.425781 0.238281 z m -6.964844 1.710938 c -0.097656 0.15625 -0.097656 0.355468 -0.003906 0.515624 l 1.527343 2.5625 c 0.089844 0.152344 0.253907 0.242188 0.429688 0.242188 h 5.011719 c 0.175781 0 0.335937 -0.089844 0.425781 -0.234375 l 1.578125 -2.5625 c 0.101563 -0.164063 0.097656 -0.371094 -0.003906 -0.53125 l -1.578125 -2.472656 c -0.09375 -0.144531 -0.25 -0.230469 -0.421875 -0.230469 h -5.011719 c -0.175781 0 -0.335938 0.089844 -0.425781 0.238281 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFastFourierTransformSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFastFourierTransformSymbolic;
