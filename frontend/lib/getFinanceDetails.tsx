import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Details } from "./types/detail";


export async function getFinanceDetails(walletAccount: string): Promise<Details[]> {
    const details = await api<Details[]>(`/wallets/details?walletAccount=${walletAccount}`);
    return details;
}