import { useEffect, useState } from "react";
import { api } from "./api-client";
import { detail } from "./types/detail";

type Details = {
    walletAccount: string;
    CRBScore: string;
};

export async function getCRB(walletAccount: string): Promise<Details[]> {
    const details = await api<Details[]>(`/accounts/details?walletAccount=${walletAccount}`);
    return details;
}