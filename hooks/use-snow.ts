import { useMemo } from "react";

export const useSnow = () => {
  const date = useMemo(() => new Date(), []);

  if (
    date.getMonth() === 10 ||
    date.getMonth() === 11 ||
    date.getMonth() === 0
  ) {
    return true;
  }
  return false;
};
