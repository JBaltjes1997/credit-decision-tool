import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Account } from "./types/account";

export async function getAccountInfo(walletAccount: string): Promise<Account[]> {
  const accountDetails = await api<Account[]>(`/accounts?walletAccount=${walletAccount}`);
  return accountDetails;
}


