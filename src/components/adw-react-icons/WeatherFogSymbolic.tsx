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
      <path d="m 3.316406 0.992188 c -0.621094 0 -1 0.332031 -1.273437 0.59375 c -0.273438 0.265624 -0.480469 0.542968 -0.675781 0.796874 c -0.191407 0.25 -0.371094 0.46875 -0.484376 0.578126 c -0.113281 0.113281 -0.121093 0.03125 0.113282 0.03125 c -0.546875 0 -0.996094 0.449218 -0.996094 0.996093 c 0 0.265625 0.105469 0.519531 0.292969 0.707031 s 0.441406 0.292969 0.703125 0.292969 c 0.625 0 1.003906 -0.328125 1.273437 -0.59375 c 0.273438 -0.265625 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191406 0.261719 -0.324218 0.371094 -0.445312 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445312 c 0.191406 0.25 0.402344 0.53125 0.671875 0.792969 c 0.273437 0.265625 0.652344 0.59375 1.277344 0.59375 c 0.625 0.003907 1 -0.328125 1.273437 -0.59375 c 0.273438 -0.261719 0.484375 -0.542969 0.675782 -0.792969 c 0.148437 -0.191406 0.261718 -0.324218 0.371093 -0.445312 c 0.109375 0.121094 0.222657 0.257812 0.367188 0.445312 c 0.195312 0.253907 0.402343 0.53125 0.675781 0.796876 c 0.273438 0.265624 0.652344 0.59375 1.273438 0.59375 c 0.625 0 1.003906 -0.328126 1.273437 -0.59375 c 0.273437 -0.265626 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191407 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.675781 0.792969 c 0.273437 0.265624 0.648437 0.59375 1.273437 0.59375 c 0.550782 0.003906 0.996094 -0.445313 0.996094 -0.996094 c 0 -0.480469 -0.34375 -0.894532 -0.820312 -0.980469 c -0.011719 -0.007813 -0.03125 -0.019531 -0.058594 -0.046875 c -0.117188 -0.109375 -0.296875 -0.332031 -0.488281 -0.582031 c -0.191407 -0.25 -0.402344 -0.53125 -0.671875 -0.796875 c -0.273438 -0.261719 -0.652344 -0.589844 -1.273438 -0.59375 c -0.625 0 -1.003906 0.332031 -1.277344 0.59375 c -0.273437 0.265625 -0.480468 0.542968 -0.671874 0.792968 c -0.148438 0.191407 -0.265626 0.324219 -0.371094 0.445313 c -0.109375 -0.121094 -0.226563 -0.253906 -0.371094 -0.445313 c -0.195312 -0.25 -0.402344 -0.527343 -0.675781 -0.792968 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 s -1.003906 0.328125 -1.273437 0.59375 c -0.273438 0.265625 -0.484375 0.542968 -0.675782 0.792968 c -0.148437 0.191407 -0.261718 0.324219 -0.371093 0.441407 c -0.109375 -0.117188 -0.222657 -0.25 -0.371094 -0.441407 c -0.191406 -0.25 -0.402344 -0.53125 -0.671875 -0.796874 c -0.273438 -0.261719 -0.652344 -0.589844 -1.273438 -0.59375 z m 0 5.003906 c -0.621094 0 -1 0.328125 -1.273437 0.59375 c -0.273438 0.265625 -0.480469 0.542968 -0.675781 0.792968 c -0.191407 0.25 -0.371094 0.472657 -0.484376 0.582032 c -0.113281 0.109375 -0.121093 0.03125 0.113282 0.03125 c -0.546875 0 -0.996094 0.445312 -0.996094 0.996094 c 0 0.265624 0.105469 0.519531 0.292969 0.707031 s 0.441406 0.292969 0.703125 0.289062 c 0.625 0.003907 1.003906 -0.328125 1.273437 -0.59375 c 0.273438 -0.261719 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.1875 0.261719 -0.320312 0.371094 -0.441406 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.441406 c 0.191406 0.253907 0.402344 0.53125 0.671875 0.796876 c 0.273437 0.265624 0.652344 0.59375 1.277344 0.59375 s 1 -0.328126 1.273437 -0.59375 c 0.273438 -0.265626 0.484375 -0.542969 0.675782 -0.792969 c 0.148437 -0.191407 0.261718 -0.324219 0.371093 -0.445313 c 0.109375 0.121094 0.222657 0.253906 0.367188 0.445313 c 0.195312 0.25 0.402343 0.53125 0.675781 0.792969 c 0.273438 0.265624 0.652344 0.59375 1.273438 0.59375 c 0.625 0.003906 1.003906 -0.328126 1.273437 -0.59375 c 0.273437 -0.261719 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.1875 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.253906 0.402344 0.53125 0.671875 0.796875 c 0.273437 0.265625 0.652343 0.59375 1.277343 0.59375 c 0.550782 0 0.996094 -0.445313 0.996094 -0.996094 c 0 -0.484375 -0.34375 -0.894531 -0.820312 -0.980469 c -0.011719 -0.007812 -0.03125 -0.023437 -0.058594 -0.046875 c -0.117188 -0.113281 -0.296875 -0.332031 -0.488281 -0.582031 c -0.191407 -0.253906 -0.402344 -0.53125 -0.671875 -0.796875 c -0.273438 -0.265625 -0.652344 -0.59375 -1.273438 -0.59375 c -0.625 0 -1.003906 0.328125 -1.277344 0.59375 c -0.273437 0.265625 -0.480468 0.542969 -0.671874 0.792969 c -0.148438 0.191406 -0.265626 0.324219 -0.371094 0.445312 c -0.109375 -0.121093 -0.226563 -0.253906 -0.371094 -0.445312 c -0.195312 -0.25 -0.402344 -0.53125 -0.675781 -0.792969 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 c -0.625 -0.003906 -1.003906 0.328125 -1.273437 0.59375 c -0.273438 0.261719 -0.484375 0.542969 -0.675782 0.792969 c -0.148437 0.1875 -0.261718 0.320312 -0.371093 0.441406 c -0.109375 -0.121094 -0.222657 -0.253906 -0.371094 -0.441406 c -0.191406 -0.253907 -0.402344 -0.53125 -0.671875 -0.796875 c -0.273438 -0.265625 -0.652344 -0.59375 -1.273438 -0.59375 z m 0 5.003906 c -0.621094 -0.003906 -1 0.328125 -1.273437 0.59375 c -0.273438 0.261719 -0.480469 0.539062 -0.675781 0.792969 c -0.191407 0.25 -0.371094 0.46875 -0.484376 0.582031 c -0.113281 0.109375 -0.121093 0.027344 0.113282 0.027344 c -0.546875 0 -0.996094 0.449218 -0.996094 0.996094 c 0 0.265624 0.105469 0.519531 0.292969 0.707031 s 0.441406 0.292969 0.703125 0.292969 c 0.625 0 1.003906 -0.328126 1.273437 -0.59375 c 0.273438 -0.265626 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191407 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253906 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.671875 0.792969 c 0.273437 0.265624 0.652344 0.59375 1.277344 0.59375 c 0.625 0.003906 1 -0.328126 1.273437 -0.59375 c 0.273438 -0.261719 0.484375 -0.542969 0.675782 -0.792969 c 0.148437 -0.191407 0.261718 -0.324219 0.371093 -0.445313 c 0.109375 0.121094 0.222657 0.257813 0.367188 0.445313 c 0.195312 0.253906 0.402343 0.53125 0.675781 0.796875 s 0.652344 0.59375 1.273438 0.59375 c 0.625 0 1.003906 -0.328125 1.273437 -0.59375 c 0.273437 -0.265625 0.484375 -0.542969 0.675781 -0.792969 c 0.148438 -0.191406 0.261719 -0.324219 0.371094 -0.445313 c 0.109375 0.121094 0.222656 0.253907 0.371094 0.445313 c 0.191406 0.25 0.402344 0.53125 0.675781 0.792969 c 0.273437 0.265625 0.648437 0.59375 1.273437 0.59375 c 0.550782 0.003906 0.996094 -0.445313 0.996094 -0.996094 c 0 -0.480469 -0.34375 -0.894531 -0.820312 -0.980469 c -0.011719 -0.007812 -0.03125 -0.019531 -0.058594 -0.046875 c -0.117188 -0.109375 -0.296875 -0.332031 -0.488281 -0.582031 c -0.191407 -0.25 -0.402344 -0.527344 -0.671875 -0.792969 c -0.273438 -0.265625 -0.652344 -0.59375 -1.273438 -0.597656 c -0.625 0 -1.003906 0.332031 -1.277344 0.59375 c -0.273437 0.265625 -0.480468 0.542969 -0.671874 0.792969 c -0.148438 0.191406 -0.265626 0.324219 -0.371094 0.445312 c -0.109375 -0.121093 -0.226563 -0.253906 -0.371094 -0.445312 c -0.195312 -0.25 -0.402344 -0.527344 -0.675781 -0.792969 c -0.273438 -0.265625 -0.648438 -0.59375 -1.273438 -0.59375 s -1.003906 0.328125 -1.273437 0.59375 c -0.273438 0.265625 -0.484375 0.542969 -0.675782 0.792969 c -0.148437 0.191406 -0.261718 0.324219 -0.371093 0.441406 c -0.109375 -0.117187 -0.222657 -0.25 -0.371094 -0.441406 c -0.191406 -0.25 -0.402344 -0.53125 -0.671875 -0.796875 c -0.273438 -0.261719 -0.652344 -0.589844 -1.273438 -0.59375 z m 0 0" fill="#2e3436" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwWeatherFogSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWeatherFogSymbolic;
