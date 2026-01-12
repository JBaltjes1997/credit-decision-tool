import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Account } from "./types/account";
import { Wallet } from "./types/wallet";

export async function getWalletInfo(walletAccount: string): Promise<Wallet[]> {
  const accountDetails = await api<Wallet[]>(`/wallets?walletAccount=${walletAccount}`);
  return accountDetails;
}


