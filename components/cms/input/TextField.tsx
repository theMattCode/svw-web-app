"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";

export function TextField({
  label,
  value: initialValue,
  Icon,
  save,
}: {
  label: string;
  value: string | null;
  Icon?: IconType;
  save?: (value: string | null) => void;
}) {
  const [value, setValue] = useState(initialValue ?? "");
  return (
    <div className="my-2 w-full relative group flex items-center">
      {Icon ? (
        <Icon className="ml-3 mr-1.5 w-5 h-5 text-gray-400 group-focus-within:text-svw-blue-default flex items-center" />
      ) : (
        <div className="ml-3.5" />
      )}
      <input
        type="text"
        className="outline-none py-2.5 w-full peer"
        placeholder=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          save?.(value);
        }}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            save?.(value);
          } else if (e.key === "Escape") {
            setValue(initialValue ?? "");
          }
        }}
      />

      <label
        className={`absolute left-[9px] ${Icon && "peer-placeholder-shown:left-9"} group-focus-within:!left-[9px] top-px text-sm text-gray-400 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-svw-blue-default`}
      >
        {label}
      </label>

      {/* This fieldset+legend is used for the border and notch transition */}
      <fieldset
        className="inset-0 absolute border border-gray-300 rounded pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible
  group-focus-within:!border-svw-blue-default group-focus-within:border-2 group-hover:border-svw-blue-default"
      >
        <legend className="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
          {label}
        </legend>
      </fieldset>

      {/*This fieldset+legend always has a notch and is shown when the input is filled, instead of the other, so the notch doesn't vanish when you unfocus the field */}
      <fieldset
        className="inset-0 absolute border border-gray-400 rounded pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible
  group-focus-within:border-2 group-focus-within:!border-svw-blue-default group-hover:border-svw-blue-default"
      >
        <legend className="ml-2 left-[9px] text-sm invisible px-1 max-w-full whitespace-nowrap">{label}</legend>
      </fieldset>
    </div>
  );
}
