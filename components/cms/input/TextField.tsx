import * as React from "react";
import { InputAdornment, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { IconType } from "react-icons";
import { ChangeEventHandler, useCallback, useState } from "react";
import { MdCheck, MdError } from "react-icons/md";

export type TextFieldMutationVariables = { value: string | null };
export type MutateResult = { type: "success" } | { type: "error"; message: string };
export type MutateFn = (variables: TextFieldMutationVariables) => Promise<MutateResult | undefined>;

export interface TextFieldProps
  extends Pick<MuiTextFieldProps, "defaultValue" | "fullWidth" | "ref" | "inputRef" | "type" | "id" | "placeholder"> {
  StartIcon?: IconType;
  label?: string;
  mutate?: MutateFn;
  onChange?: (value: string) => void;
}

export function TextField({
  StartIcon,
  label,
  defaultValue,
  mutate,
  onChange,
  fullWidth = true,
  ref,
  inputRef,
  type,
  id,
  placeholder,
}: TextFieldProps) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [mutationResult, setMutationResult] = useState<MutateResult | undefined>();

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(
    async (event) => {
      setMutationResult(undefined);
      const newValue = event.target.value;
      setValue(newValue);
      onChange?.(newValue);
      setMutationResult(await mutate?.({ value: newValue }));
    },
    [mutate, onChange],
  );

  return (
    <MuiTextField
      type={type}
      id={id}
      ref={ref}
      value={value}
      placeholder={placeholder}
      inputRef={inputRef}
      onChange={onChangeHandler}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setValue(defaultValue ?? "");
          onChange?.(defaultValue?.toString() ?? "");
        }
      }}
      size="small"
      fullWidth={fullWidth}
      label={label}
      aria-label={label}
      slotProps={{
        input: {
          id,
          type,
          startAdornment: StartIcon ? (
            <InputAdornment position="start">
              <StartIcon />
            </InputAdornment>
          ) : null,
          endAdornment: mutationResult && (
            <InputAdornment position="end">
              {mutationResult?.type === "success" && <MdCheck className="text-green-600" />}
              {mutationResult?.type === "error" && <MdError className="text-red-600" />}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
