'use client';
// import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { useEffect, useState } from "react";
// import { get } from "https";
// import { api } from "@/lib/api-client";
// import { Account } from "@/lib/types/account";
import { accountSelect } from "@/lib/accountSelect";
import FinancialData from "@/components/layout/financialData";
import CustomerData from "@/components/layout/customerData";
import CreditAdvice from "@/components/layout/creditAdvice";
import Crb from "@/components/layout/crb";
import { on } from "events";
import { useState } from "react";

export default function Home() {
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  return (
    
    <div className="min-h-screen bg-muted p-6">
      <div className="w-[1200px] mx-auto space-y-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground">Credit Assesment Dashboard</h1>
        {/* {accountSelect({})} */}
        {accountSelect({          
          onSelect: setSelectedAccount,
        })}
        

        {/* CRB Section */}
        <Crb walletAccount={selectedAccount} />
        
        {/* User Info Card */}
        <CustomerData walletAccount={selectedAccount} />
        

        {/* Financial Data Card */}
        <FinancialData walletAccount={selectedAccount}/>
        

        {/* Advice Section with Limits */}
        <CreditAdvice walletAccount={selectedAccount} />
      </div>
    </div>
  );
};


