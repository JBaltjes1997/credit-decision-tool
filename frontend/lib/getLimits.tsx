import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Limit } from "./types/limit";

type Limit = {
  walletAccount: string;
  currentLimit: number;
  proposedLimit: number;
  predictedLimit: number;
  expectedLimit: number;
};

export async function getLimits(walletAccount: string): Promise<Limit[]> {
  const limits = await api<Limit[]>(`/accounts/limits?walletAccount=${walletAccount}`);
  return limits;
}