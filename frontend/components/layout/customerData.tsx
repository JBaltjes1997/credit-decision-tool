"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accountSelect } from "@/lib/accountSelect";
import { getAccountInfo } from "@/lib/getAccountInfo";
import { get } from "http";
import { useEffect, useState } from "react";


type CustomerDataProps = {
  walletAccount: string;
};

export default function CustomerData({ walletAccount }: CustomerDataProps) {
    const [accountInfo, setAccountInfo] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;
        
        getAccountInfo(walletAccount).then(setAccountInfo);
    }, [walletAccount]);
    return (
        <Card className="border-l-4 border-l-primary bg-accent">
            <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">Klantgegevens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi User name:</span>
                <span className="font-medium"> {accountInfo?.username ?? "Onbekend"}</span>
            </div>
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi Phone Number:</span>
                <span className="font-medium"> {accountInfo?.phonenumber ?? "Onbekend"}</span>
            </div>
            </CardContent>
        </Card>
    );
}