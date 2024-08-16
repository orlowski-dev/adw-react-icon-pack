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
      <path d="m 5 0 c -1.292969 0 -2.40625 0.839844 -2.824219 2 h -1.175781 v 2 h 1 v 1 h -1 v 2 h 1 v 1 h -1 v 2 h 1 v 1 h -1 v 2 h 1.175781 c 0.417969 1.160156 1.53125 2 2.824219 2 h 1 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -1 c -0.554688 0 -1 -0.445312 -1 -1 v -9 c 0 -0.554688 0.445312 -1 1 -1 h 7 c 0.570312 0 0.886719 0.441406 1 1 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -1.644531 -1.355469 -3 -3 -3 z m 3.523438 4 c -0.078126 0 -0.15625 0.003906 -0.238282 0.011719 c -0.214844 0.011719 -0.429687 0.046875 -0.640625 0.101562 c -1.710937 0.433594 -2.839843 2.082031 -2.617187 3.832031 c 0.152344 1.214844 0.925781 2.222657 1.972656 2.722657 v -0.667969 h 1.332031 c -1.1875 -0.078125 -2.160156 -0.980469 -2.3125 -2.179688 c -0.160156 -1.257812 0.640625 -2.425781 1.867188 -2.738281 c 0.617187 -0.15625 1.28125 -0.078125 1.808593 0.164063 c 0.527344 0.242187 0.890626 0.628906 1.003907 1.058594 c 0.0625 0.230468 0.082031 0.472656 0.070312 0.695312 h 1.007813 c 0.011718 -0.320312 -0.03125 -0.644531 -0.109375 -0.953125 c -0.210938 -0.785156 -0.820313 -1.371094 -1.554688 -1.710937 c -0.484375 -0.21875 -1.027343 -0.339844 -1.589843 -0.335938 z m -0.023438 2.007812 c -0.824219 0 -1.5 0.675782 -1.5 1.5 c 0 0.820313 0.675781 1.5 1.5 1.5 c 0.175781 0 0.34375 -0.039062 0.5 -0.09375 v 0.042969 l 0.449219 0.046875 c 0.191406 0.019532 0.375 0.015625 0.550781 -0.003906 v -1.492188 c 0 -0.824218 -0.675781 -1.5 -1.5 -1.5 z m 0 1 c 0.28125 0 0.5 0.214844 0.5 0.5 c 0 0.28125 -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 c 0 -0.285156 0.21875 -0.5 0.5 -0.5 z m 2.5 0.992188 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m -1.15625 1.78125 s -0.605469 0.191406 -1.1875 0.21875 h 1.257812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAddressBookNewSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAddressBookNewSymbolic;
