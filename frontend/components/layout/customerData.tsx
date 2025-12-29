import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accountSelect } from "@/lib/accountSelect";
import { getAccountInfo } from "@/lib/getAccountInfo";
import { useState } from "react";

// detect change toevoegen
// fetch selector value



export default function CustomerData() {
    const [selectedAccount, setSelectedAccount] = useState("");
    // <AccountSelect onChange={setSelectedAccount} />;
    const accountInfo = getAccountInfo(selectedAccount);

    // className = "w-full border rounded px-2 py-1";
    // querySelector = document.selectByClassname(className);
    return (
        <Card className="border-l-4 border-l-primary bg-accent">
            <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">Klantgegevens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi User name:</span>
                <span className="font-medium"> {accountInfo?.username || "Onbekend"}</span>
            </div>
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi Phone Number:</span>
                <span className="font-medium"> {accountInfo?.phonenumber || "Onbekend"}</span>
            </div>
            </CardContent>
        </Card>
    );
}