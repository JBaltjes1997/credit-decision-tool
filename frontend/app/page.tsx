'use client';
// import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { useEffect, useState } from "react";
// import { get } from "https";
// import { api } from "@/lib/api-client";
// import { Account } from "@/lib/types/account";
import { walletSelect } from "@/lib/walletSelect";
import FinancialData from "@/components/layout/financialData";
import CustomerData from "@/components/layout/customerData";
import CreditAdvice from "@/components/layout/creditAdvice";
import Crb from "@/components/layout/crb";
import { on } from "events";
import { useState } from "react";
import { getDetails } from "@/lib/getDetailsFromElastic";

export default function Home() {
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  return (
    
    <div className="min-h-screen bg-muted p-6">
      <div className="w-[1200px] mx-auto space-y-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground">Credit Assesment Dashboard</h1>
        {/* {walletSelect({})} */}
        {walletSelect({          
          onSelect: setSelectedWallet,
        })}        

        {/* CRB Section */}
        <Crb walletAccount={selectedWallet} />
        {/* User Info Card */}
        <CustomerData walletAccount={selectedWallet} />
        

        {/* Financial Data Card */}
        <FinancialData walletAccount={selectedWallet}/>

        {/* Advice Section with Limits */}
        <CreditAdvice walletAccount={selectedWallet} />
      </div>
    </div>    
  );
};


