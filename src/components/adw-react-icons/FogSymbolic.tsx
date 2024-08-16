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
      <path d="m 3.316406 11 c -0.621094 -0.003906 -1 0.328125 -1.273437 0.59375 c -0.273438 0.261719 -0.480469 0.539062 -0.675781 0.792969 c -0.191407 0.25 -0.371094 0.46875 -0.484376 0.582031 c -0.113281 0.109375 -0.121093 0.027344 0.113282 0.027344 c -0.359375 -0.007813 -0.699219 0.179687 -0.886719 0.492187 c -0.1835938 0.3125 -0.1835938 0.699219 0 1.011719 c 0.1875 0.3125 0.527344 0.503906 0.886719 0.492188 c 0.625 0 1.003906 -0.328126 1.273437 -0.59375 c 0.273438 -0.265626 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191407 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.671875 0.792969 c 0.273437 0.265624 0.652344 0.59375 1.277344 0.59375 c 0.625 0.003906 1 -0.328126 1.273437 -0.59375 c 0.273438 -0.261719 0.480469 -0.542969 0.675782 -0.792969 c 0.148437 -0.191407 0.261718 -0.324219 0.371093 -0.445313 c 0.109375 0.121094 0.222657 0.257813 0.367188 0.445313 c 0.195312 0.253906 0.402343 0.53125 0.675781 0.796875 s 0.652344 0.59375 1.273438 0.59375 c 0.625 0 1.003906 -0.328125 1.273437 -0.59375 c 0.273437 -0.265625 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191406 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253907 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.675781 0.792969 c 0.273437 0.265625 0.648437 0.59375 1.273437 0.59375 c 0.363282 0.011718 0.703126 -0.175782 0.886719 -0.488282 c 0.183594 -0.3125 0.183594 -0.699218 0 -1.011718 c -0.183593 -0.3125 -0.523437 -0.503906 -0.886719 -0.492188 c 0.238282 0 0.230469 0.078125 0.113282 -0.03125 c -0.113282 -0.109375 -0.292969 -0.332031 -0.484375 -0.582031 c -0.195313 -0.25 -0.402344 -0.527344 -0.675781 -0.792969 c -0.269532 -0.265625 -0.648438 -0.59375 -1.273438 -0.597656 c -0.621094 0 -1 0.332031 -1.273438 0.59375 c -0.273437 0.265625 -0.480468 0.542969 -0.675781 0.792969 c -0.144531 0.191406 -0.261719 0.324219 -0.371093 0.445312 c -0.105469 -0.121093 -0.222657 -0.253906 -0.371094 -0.445312 c -0.191406 -0.25 -0.398438 -0.527344 -0.671875 -0.792969 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 s -1.003906 0.328125 -1.277343 0.59375 c -0.269532 0.265625 -0.480469 0.542969 -0.671876 0.792969 c -0.148437 0.191406 -0.261718 0.324219 -0.371093 0.445312 c -0.109375 -0.121093 -0.222657 -0.253906 -0.371094 -0.445312 c -0.195313 -0.25 -0.402344 -0.53125 -0.675781 -0.792969 c -0.269532 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 z m 0 -5.003906 c -0.621094 0 -1 0.328125 -1.273437 0.59375 c -0.273438 0.265625 -0.480469 0.542968 -0.675781 0.792968 c -0.191407 0.25 -0.371094 0.472657 -0.484376 0.582032 c -0.113281 0.109375 -0.121093 0.03125 0.113282 0.03125 c -0.359375 -0.011719 -0.699219 0.179687 -0.886719 0.492187 c -0.1835938 0.3125 -0.1835938 0.699219 0 1.011719 c 0.1875 0.3125 0.527344 0.5 0.886719 0.488281 c 0.625 0.003907 1.003906 -0.328125 1.273437 -0.59375 c 0.273438 -0.261719 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.1875 0.261719 -0.320312 0.371094 -0.441406 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.441406 c 0.191406 0.253907 0.402344 0.53125 0.671875 0.796876 c 0.273437 0.265624 0.652344 0.59375 1.277344 0.59375 s 1 -0.328126 1.273437 -0.59375 c 0.273438 -0.265626 0.480469 -0.542969 0.675782 -0.792969 c 0.148437 -0.191407 0.261718 -0.324219 0.371093 -0.445313 c 0.109375 0.121094 0.222657 0.253906 0.367188 0.445313 c 0.195312 0.25 0.402343 0.53125 0.675781 0.792969 c 0.273438 0.265624 0.652344 0.59375 1.273438 0.59375 c 0.625 0.003906 1.003906 -0.328126 1.273437 -0.59375 c 0.273437 -0.261719 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.1875 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.253906 0.402344 0.53125 0.671875 0.796875 c 0.273437 0.265625 0.652343 0.59375 1.277343 0.59375 c 0.363282 0.011718 0.703126 -0.179688 0.886719 -0.492188 c 0.183594 -0.3125 0.183594 -0.699218 0 -1.011718 c -0.183593 -0.3125 -0.523437 -0.5 -0.886719 -0.492188 c 0.238282 0.003906 0.230469 0.082031 0.113282 -0.03125 c -0.113282 -0.109375 -0.292969 -0.328125 -0.484375 -0.582031 c -0.195313 -0.25 -0.402344 -0.527344 -0.675781 -0.792969 c -0.269532 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 c -0.621094 0 -1 0.328125 -1.273438 0.59375 c -0.273437 0.265625 -0.480468 0.542969 -0.675781 0.792969 c -0.144531 0.191406 -0.261719 0.324219 -0.371093 0.445312 c -0.105469 -0.121093 -0.222657 -0.253906 -0.371094 -0.445312 c -0.191406 -0.25 -0.398438 -0.53125 -0.671875 -0.792969 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 c -0.625 -0.003906 -1.003906 0.328125 -1.277343 0.59375 c -0.269532 0.261719 -0.480469 0.539062 -0.671876 0.792969 c -0.148437 0.1875 -0.261718 0.320312 -0.371093 0.441406 c -0.109375 -0.121094 -0.222657 -0.253906 -0.371094 -0.441406 c -0.195313 -0.253907 -0.402344 -0.53125 -0.675781 -0.796875 c -0.269532 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 z m 0 -5.003906 c -0.621094 0 -1 0.332031 -1.273437 0.59375 c -0.273438 0.265624 -0.480469 0.542968 -0.675781 0.796874 c -0.191407 0.25 -0.371094 0.46875 -0.484376 0.578126 c -0.113281 0.113281 -0.121093 0.03125 0.113282 0.03125 c -0.359375 -0.007813 -0.699219 0.179687 -0.886719 0.492187 c -0.1835938 0.3125 -0.1835938 0.699219 0 1.011719 c 0.1875 0.3125 0.527344 0.503906 0.886719 0.492187 c 0.625 0 1.003906 -0.328125 1.273437 -0.59375 c 0.273438 -0.265625 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191406 0.261719 -0.324218 0.371094 -0.445312 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445312 c 0.191406 0.25 0.402344 0.53125 0.671875 0.792969 c 0.273437 0.265625 0.652344 0.59375 1.277344 0.59375 c 0.625 0.003907 1 -0.328125 1.273437 -0.59375 c 0.273438 -0.261719 0.480469 -0.542969 0.675782 -0.792969 c 0.148437 -0.191406 0.261718 -0.324218 0.371093 -0.445312 c 0.109375 0.121094 0.222657 0.257812 0.367188 0.445312 c 0.195312 0.253907 0.402343 0.53125 0.675781 0.796876 c 0.273438 0.265624 0.652344 0.59375 1.273438 0.59375 c 0.625 0 1.003906 -0.328126 1.273437 -0.59375 c 0.273437 -0.265626 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191407 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.675781 0.792969 c 0.273437 0.265624 0.648437 0.59375 1.273437 0.59375 c 0.363282 0.011718 0.703126 -0.175782 0.886719 -0.488282 c 0.183594 -0.3125 0.183594 -0.699218 0 -1.011718 c -0.183593 -0.3125 -0.523437 -0.503907 -0.886719 -0.492188 c 0.238282 0 0.230469 0.078125 0.113282 -0.03125 c -0.113282 -0.109375 -0.292969 -0.332031 -0.484375 -0.582031 c -0.195313 -0.25 -0.402344 -0.53125 -0.675781 -0.792969 c -0.269532 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 c -0.621094 -0.003906 -1 0.328125 -1.273438 0.59375 c -0.273437 0.261719 -0.480468 0.539062 -0.675781 0.792969 c -0.144531 0.1875 -0.261719 0.320312 -0.371093 0.441406 c -0.105469 -0.121094 -0.222657 -0.253906 -0.371094 -0.441406 c -0.191406 -0.253907 -0.398438 -0.53125 -0.671875 -0.796875 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 s -1.003906 0.328125 -1.277343 0.59375 c -0.269532 0.265625 -0.480469 0.542968 -0.671876 0.792968 c -0.148437 0.191407 -0.261718 0.324219 -0.371093 0.441407 c -0.109375 -0.117188 -0.222657 -0.25 -0.371094 -0.441407 c -0.195313 -0.25 -0.402344 -0.53125 -0.675781 -0.796874 c -0.269532 -0.261719 -0.648438 -0.589844 -1.273438 -0.59375 z m 0 0" fill="currentColor" fill-opacity="0.35"/>
    </svg>
  );
};

const AdwFogSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFogSymbolic;
