import { useEffect, useState } from "react";
import { api } from "./api-client";
import { detail } from "./types/detail";

type Details = {
    walletAccount: string;
    CRBScore: string;
    estimatedIncome: number;
    salaryIn: number;
    totalVolumeIn: number;
    totalVolumeOut: number;
    wholesaleAvgOut: number;
    wholesaleMaxOut: number;
    creditIn: number;
    creditOut: number;
    fuliza: number;
    overdraft: number;
    liquorOut: number;
};

export async function getCRB(walletAccount: string): Promise<Details[]> {
    const details = await api<Details[]>(`/accounts/details?walletAccount=${walletAccount}`);
    return details;
}