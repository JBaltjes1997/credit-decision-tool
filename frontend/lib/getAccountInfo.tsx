import { useEffect, useState } from "react";
import { api } from "./api-client";
// import { account } from "./types/detail";

type Account = {
  walletAccount: string;
  username: string;
  phonenumber: string;
}

export async function getAccountInfo(walletAccount: string): Promise<Account[]> {
  const accountDetails = await api<Account[]>(`/accounts?walletAccount=${walletAccount}`);
  return accountDetails;
}


