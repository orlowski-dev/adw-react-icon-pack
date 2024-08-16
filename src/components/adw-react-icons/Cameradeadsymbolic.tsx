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
        <path d="m 2.402344 2 c -1.328125 0 -2.39843775 1.070312 -2.39843775 2.402344 v 7.199218 c 0 1.328126 1.07031275 2.398438 2.39843775 2.398438 h 7.199218 c 1.328126 0 2.402344 -1.070312 2.402344 -2.398438 v -7.199218 c 0 -1.332032 -1.074218 -2.402344 -2.402344 -2.402344 z m 0.574218 2.996094 l 0.003907 0.003906 h 0.023437 v 0.023438 l 0.5 0.5 l 0.5 -0.496094 v -0.027344 h 0.023438 l 0.007812 -0.007812 l 0.003906 0.007812 h 0.964844 v 0.96875 l 0.019532 0.019531 l -0.527344 0.523438 l 0.488281 0.488281 h 0.019531 v 0.019531 l 0.019532 0.019531 l -0.019532 0.019532 v 0.941406 h -0.941406 l -0.027344 0.027344 l -0.027344 -0.027344 h -0.003906 v -0.003906 l -0.5 -0.496094 l -0.527344 0.527344 l -0.027343 -0.027344 h -0.945313 v -0.945312 l -0.019531 -0.015626 l 0.019531 -0.019531 v -0.019531 h 0.019532 l 0.488281 -0.488281 l -0.527344 -0.523438 l 0.019531 -0.019531 v -0.96875 h 0.964844 z m 5 0 l 0.003907 0.003906 h 0.023437 v 0.023438 l 0.5 0.5 l 0.5 -0.496094 v -0.027344 h 0.023438 l 0.007812 -0.007812 l 0.003906 0.007812 h 0.964844 v 0.96875 l 0.019532 0.019531 l -0.527344 0.523438 l 0.488281 0.488281 h 0.019531 v 0.019531 l 0.019532 0.019531 l -0.019532 0.019532 v 0.941406 h -0.941406 l -0.027344 0.027344 l -0.027344 -0.027344 h -0.003906 v -0.003906 l -0.5 -0.496094 l -0.527344 0.527344 l -0.027343 -0.027344 h -0.945313 v -0.945312 l -0.019531 -0.015626 l 0.019531 -0.019531 v -0.019531 h 0.019532 l 0.488281 -0.488281 l -0.527344 -0.523438 l 0.019531 -0.019531 v -0.96875 h 0.964844 z m -5.972656 4.003906 h 8 v 1 h -4 v 1.667969 c 0 0.738281 -0.671875 1.332031 -1.5 1.332031 c -0.832031 0 -1.515625 -0.59375 -1.5 -1.332031 v -1.667969 h -1 z m 0 0"/>
        <path d="m 12.003906 8 l 3 -3 h 1 v 6 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameradeadsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameradeadsymbolic;
