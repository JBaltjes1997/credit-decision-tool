"use client";
import { Badge } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import { getFinanceDetails } from "@/lib/getFinanceDetails";

type CustomerDataProps = {
  walletAccount: string;
};
export default function Crb({walletAccount}: CustomerDataProps) {
    const [crbInfo, setCrbInfo] = useState<any>(null);

    useEffect(() => {
        if(!walletAccount) return;
        
        getFinanceDetails(walletAccount).then(setCrbInfo);
    }, [walletAccount]);
    return (
<Card className="border-l-4 border-l-destructive">
    <CardHeader className="pb-2">
    <CardTitle className="text-lg text-destructive">CRB Score</CardTitle>
    </CardHeader>
    <CardContent>
   <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold mb-2">
              CRB: {crbInfo?.crbscore ?? " - "}
    </Badge>
    <p className="text-sm text-muted-foreground">
        Account has score: {crbInfo?.crbscore ?? " - "}.<br />

        {/* This means the customer has been very unreliable in the past. This will be of severe negative influence on his/her credit limit. */}
    </p>
    <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
        <li>Low activity for assessment low</li>
        <li>High level of recent credit enquiry activity</li>
        <li>Recent delinquency on accounts</li>
        <li>High installment delinquency in the last 24 hours</li>
    </ul>
    </CardContent>
</Card>
    );
}
