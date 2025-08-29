"use client";

import { useMemo } from "react";

export const useIsNewProduct = (createdAt, days) => {
  return useMemo(() => {
    if (!createdAt) return false;
    const created = new Date(createdAt);
    const now = new Date();
    const diffInDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
    return diffInDays <= days;
  }, [createdAt, days]);
};
