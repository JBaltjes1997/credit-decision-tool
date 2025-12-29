"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFinanceDetails } from "@/lib/getFinanceDetails";
import { getFallbackRouteParams } from "next/dist/server/request/fallback-params";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type CustomerDataProps = {
  walletAccount: string;
};

export default function FinancialData({walletAccount}: CustomerDataProps) {
    const [financialData, setFinancialData] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;

        getFinanceDetails(walletAccount).then(setFinancialData);
    }, [walletAccount]);

return (

<Card className="border-l-4 border-l-primary bg-accent">
<CardHeader className="pb-2">
    <CardTitle className="text-lg text-primary">Financiële Data</CardTitle>
</CardHeader>
<CardContent className="space-y-4">
    {/* Income Section */}
    <div className="space-y-2">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Inkomen</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">estimatedIncome:</span>
        <span className="font-medium">{financialData?.estimatedIncome ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">salaryIn:</span>
        <span className="font-medium">{financialData?.salaryIn ?? "-" }</span>
    </div>
    </div>

    {/* Volume Section */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Volume</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">totalVolumeIn:</span>
        <span className="font-medium">{financialData?.totalVolumeIn ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">totalVolumeOut:</span>
        <span className="font-medium">{financialData?.totalVolumeOut ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">wholesaleAvgOut:</span>
        <span className="font-medium">{financialData?.wholesaleAvgOut ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">wholesaleMaxOut:</span>
        <span className="font-medium">{financialData?.wholesaleMaxOut ?? "-" }</span>
    </div>
    </div>

    {/* Credit Section */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Krediet</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">creditIn:</span>
        <span className="font-medium">{financialData?.creditIn ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">creditOut:</span>
        <span className="font-medium">{financialData?.creditOut ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">fuliza:</span>
        <span className="font-medium">{financialData?.fuliza ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">overdraft:</span>
        <span className="font-medium">{financialData?.overdraft ?? "-" }</span>
    </div>
    </div>

    {/* Risk Indicators */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide">Risico-indicatoren</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">liquorOut:</span>
        <span className="font-medium">{financialData?.liquorOut ?? "-" }</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">gamblingOut:</span>
        <span className="font-medium text-destructive">{financialData?.gamblingOut ?? "-" }</span>
    </div>
    </div>
</CardContent>
</Card>
);
}