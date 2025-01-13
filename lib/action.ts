import { useCallback, useRef } from "react";
import { debounce } from "lodash";

export type MutationFunction<TVariables extends {}, TResult> = (variables: TVariables) => Promise<TResult>;

export const DEBOUNCE_DEFAULT_WAIT = 500;

export function useDebouncedMutation<TVariables extends {}, TResult = unknown>(
  mutationFn: MutationFunction<TVariables, TResult>,
) {
  const promiseRef = useRef<{
    resolve: (value: TResult) => void;
    reject: (reason?: any) => void;
  } | null>(null);

  const debouncedMutation = useCallback(
    debounce(async (variables: TVariables) => {
      try {
        const result = await mutationFn(variables);
        promiseRef.current?.resolve(result);
      } catch (error) {
        promiseRef.current?.reject(error);
      } finally {
        promiseRef.current = null;
      }
    }, DEBOUNCE_DEFAULT_WAIT),
    [mutationFn],
  );

  return useCallback(
    (variables: TVariables): Promise<TResult> => {
      return new Promise((resolve, reject) => {
        promiseRef.current = { resolve, reject };
        debouncedMutation(variables);
      });
    },
    [debouncedMutation],
  );
}
