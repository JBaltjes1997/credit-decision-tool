"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { walletSelect } from "@/lib/walletSelect";
import { getWalletInfo } from "@/lib/getWalletInfo";
import { get } from "http";
import { useEffect, useState } from "react";


type CustomerDataProps = {
  walletAccount: string;
};

export default function CustomerData({ walletAccount }: CustomerDataProps) {
    const [walletInfo, setWalletInfo] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;
        
        getWalletInfo(walletAccount).then(setWalletInfo);
    }, [walletAccount]);
    return (
        <Card className="border-l-4 border-l-primary bg-accent" style={{ backgroundColor: "white" }}>
            <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">Customer data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi User name:</span>
                <span className="font-medium"> {walletInfo?.username ?? "Onbekend"}</span>
            </div>
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi Phone Number:</span>
                <span className="font-medium"> {walletInfo?.phonenumber ?? "Onbekend"}</span>
            </div>
            </CardContent>
        </Card>
    );
}