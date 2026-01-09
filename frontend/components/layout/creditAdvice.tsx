"use client"
import { use, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getLimits } from "@/lib/getLimits";
import { getFinanceDetails } from "@/lib/getFinanceDetails";

type CustomerDataProps = {
  walletAccount: string;
};  

export default function CreditAdvice({ walletAccount }: { walletAccount: string }) {
    const [creditInfo, setCreditInfo] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;

        getLimits(walletAccount).then(setCreditInfo);
    }, [walletAccount]);

    const [financialData, setFinancialData] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;

        getFinanceDetails(walletAccount).then(setFinancialData);
    }, [walletAccount]);
    return (
<Card className="border-l-4 border-l-accent-foreground bg-accent" style={{ backgroundColor: "white" }}>
    <CardHeader className="pb-2">
    <CardTitle className="text-lg text-accent-foreground">CreditAdvice</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
    {/* Limits */}
    <div className="grid grid-cols-2 gap-2 pb-4 border-b border-border">
        <div className="space-y-2">
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Proposed limit:</span>
            <span className="font-bold text-primary">{creditInfo?.proposedlimit || "Onbekend"}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Predicted limit:</span>
            <span className="font-bold text-primary">{creditInfo?.predictedlimit || "Onbekend"}</span>
        </div>
        </div>
        <div className="space-y-2">
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Expected limit:</span>
            <span className="font-bold text-primary">{creditInfo?.expectedlimit || "Onbekend"}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Advise:</span>
            <span className="font-bold text-accent-foreground"> { calculate_expected_limit(financialData?.salaryin) || "-"} </span>
        </div>
        </div>
    </div>

    {/* Advice Explanation */}
    <div>
        <p className="font-medium text-foreground mb-2">The advice is based on:</p>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
        <li>The customer has a low average volume</li>
        <li>The customer&apos;s probability of default score is very high: 0.5.</li>
        <li>Customer&apos;s average gambling is above average:</li>
        <li>Customer&apos;s average liquor consumption is: average</li>
        <li>The customer has a high CRB score of JJ.</li>
        <li>The customer has a low credit score of</li>
        </ul>
    </div>
    </CardContent>
</Card> 
    );

    function calculate_limit_advanced(): Array<number>{
        const totalIn = financialData?.totalvolumein;
        const totalOut = financialData?.totalvolumeout;
        const wholeSaleAvg = financialData?.whosaleavgout;

        // Check wholesale - positively reward higher wholesale
        let expect_limit = calculate_expected_limit(totalIn, 0);
        if(wholeSaleAvg > expect_limit){
            expect_limit = wholeSaleAvg;
        }

        // Penalize estimated limit based on the volume covered by credit volume by 50%
        const credit_out = Math.abs(financialData?.creditout);
        const credit_penalty = calculate_expected_limit(credit_out, 0) * 0.5;
        expect_limit -= credit_penalty;

        const red_flags_out = Math.abs(financialData?.liquorout) + Math.abs(financialData?.gamblingout);
        const red_flags_ratio = totalOut !== 0 ? red_flags_out / totalOut : 0;
        expect_limit -= expect_limit * Math.min(5*red_flags_ratio, 1);

        expect_limit = Math.round(expect_limit / 5000) * 5000;

        return [expect_limit, totalIn];
    }

    function calculate_expected_limit(salaryIn: number, base=5000): number{
        const estimated_limit = Math.pow(0.33, Math.min(salaryIn / 25e6, 1)) * 0.0167 * salaryIn;
        const rounded_limit = Math.max(Math.round(estimated_limit / 5000) * 5000, base);
        return rounded_limit;
    }
}