import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Limit } from "./types/limit";


export async function getLimits(walletAccount: string): Promise<Limit[]> {
  const limits = await api<Limit[]>(`/accounts/limits?walletAccount=${walletAccount}`);
  return limits;
}