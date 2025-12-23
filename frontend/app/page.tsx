'use client';
// import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { useEffect, useState } from "react";
// import { get } from "https";
// import { api } from "@/lib/api-client";
// import { Account } from "@/lib/types/account";
import { apiSelect } from "@/lib/apiSelect";
import FinancialData from "@/components/layout/financialData";
import CustomerData from "@/components/layout/customerData";
import CreditAdvice from "@/components/layout/creditAdvice";
import Crb from "@/components/layout/crb";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-muted p-6">
      <div className="w-[1200px] mx-auto space-y-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground">Krediet Beoordeling Dashboard</h1>
        {apiSelect()}

        {/* CRB Section */}
        <Crb />
        
        {/* User Info Card */}
        <CustomerData />
        

        {/* Financial Data Card */}
        <FinancialData />
        

        {/* Advice Section with Limits */}
        <CreditAdvice />
      </div>
    </div>
  );
};


